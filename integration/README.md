```go
	endpoint := os.Getenv("ENDPOINT")
	querykey := os.Getenv("QUERYKEY")

case "topstories":
		slug := "topstories.json"
		fullURL := fmt.Sprintf("%s/%s", endpoint, slug)
		log.Printf("request to: %s", fullURL)
		req, err := http.NewRequest("GET", fullURL, nil)
		if err != nil {
			log.Fatal(err)
		}
		client := new(http.Client)
		res, err := client.Do(req)
		if err != nil {
			log.Fatal(err)
		}
		defer res.Body.Close()
		body, err := ioutil.ReadAll(res.Body)
		if err != nil {
			log.Fatal(err)
		}
		var tops []int
		err = json.Unmarshal(body, &tops)
  	if err != nil {
	  	log.Fatal(err)
	  }

		w.Write(tops)
		log.Println("get topstories done")
```
set GOPATH=C:\Users\User\go

module github.com/c10t/look-at-static/integration/backend

go 1.13

require (
	github.com/daviddengcn/go-colortext v0.0.0-20180409174941-186a3d44e920 // indirect
	github.com/hashicorp/go-version v1.2.0 // indirect
	github.com/joho/godotenv v1.3.0
	github.com/mattn/gom v0.0.0-20190726063113-0ebf2b5d812d // indirect
)
