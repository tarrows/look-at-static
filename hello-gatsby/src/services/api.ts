import axios from 'axios'
import { AxiosBasicCredentials } from 'axios'
import { AxiosError, AxiosInstance, AxiosResponse } from 'axios'

const API_ROOT = process.env.URL || ''
const TIMEOUT = 20000
const HEADERS = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
}

export interface ApiConfig {
  baseURL?: string
  timeout?: number
  headers?: {
    Accept: string
    'Content-Type': string
  }
}

class ApiService {
  private client: AxiosInstance

  constructor({ baseURL = API_ROOT, timeout = TIMEOUT, headers = HEADERS }: ApiConfig, auth?: AxiosBasicCredentials) {
    const client = axios.create({auth, baseURL, headers, timeout})

    client.interceptors.response.use(this.handleSuccess, this.handleError)
    this.client = client
  }

  public get(path: string) {
    return this.client.get(path).then(response => response.data)
  }

  public post(path: string, payload: any) {
    return this.client.post(path, payload).then(response => response.data)
  }

  private handleSuccess = (response: AxiosResponse) => response
  private handleError = (error: AxiosError) => Promise.reject(error)
}

export default ApiService
