package main

import (
	"compress/gzip"
	"encoding/json"
	"flag"
	"io"
	"io/ioutil"
	"log"
	"net/http"
	"path/filepath"
	"strings"
	"time"

	"github.com/joho/godotenv"
)


const assetsDir = "dist"
const dataDir = "appdata"

type Health struct {
	Status string `json:"status"`
	Now    string `json:"now"`
}


func healthHandler(w http.ResponseWriter, req *http.Request) {
	log.Printf("%s %s", req.Method, req.URL.Path)

	health := Health{Status: "OK", Now: time.Now().String()}

	res, err := json.Marshal(health)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.Write(res)
}

func main() {
	var addr = flag.String("addr", ":5963", "The address of the application")
	flag.Parse()

	err := godotenv.Load(".env")
	if err != nil {
   	log.Fatal("Error loading .env file:", err)
  }

  http.HandleFunc("/health", healthHandler)
	http.HandleFunc("/api/v1/", apiV1Handler)
	http.Handle("/", makeGzipHandler(http.FileServer(http.Dir(assetsDir))))
	log.Println("starting backend server on", *addr)
	if err := http.ListenAndServe(*addr, nil); err != nil {
		log.Fatal("ListenAndServe:", err)
	}
}

type gzipResponseWriter struct {
	io.Writer
	http.ResponseWriter
}

// Use the Writer part of gzipResponseWriter to write the output.
func (w gzipResponseWriter) Write(b []byte) (int, error) {
	return w.Writer.Write(b)
}

func makeGzipHandler(handler http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		log.Printf("%s %s", r.Method, r.URL.Path)
		// Check if the client can accept the gzip encoding.
		if !strings.Contains(r.Header.Get("Accept-Encoding"), "gzip") {
			handler.ServeHTTP(w, r)
			return
		}
  	w.Header().Set("Content-Encoding", "gzip")
		gz := gzip.NewWriter(w)
		defer gz.Close()
		gzw := gzipResponseWriter{Writer: gz, ResponseWriter: w}
		handler.ServeHTTP(gzw, r)
	})
}

func apiV1Handler(w http.ResponseWriter, r *http.Request) {
	log.Printf("%s %s", r.Method, r.URL.Path)
	segs := strings.Split(r.URL.Path, "/")
	action := segs[3]
	switch action {
	case "sample":
		raw, _ := ioutil.ReadFile(filepath.Join(dataDir, "sample.json"))
		d := &struct {
			Version string `json:"version"`
		}{}
		_ = json.Unmarshal(raw, d)
		j, _ := json.Marshal(d)
		w.Write(j)
		log.Println("sample done")
	default:
		http.Error(w, "404 Status Not Found", http.StatusNotFound)
	}
}
