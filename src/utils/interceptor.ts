import Axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import crypto from 'crypto'

// let attempt = false

const API: AxiosInstance = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true
})

const generateHmac = (timestamp: number, body: string): string => {
  const message = `${timestamp}:${body}`
  return crypto
    .createHmac('sha256', process.env.NEXT_PUBLIC_APP_SECRET || '')
    .update(message)
    .digest('base64')
}

const requestHandler = (request: AxiosRequestConfig): AxiosRequestConfig => {
  request.headers = {
    ...request.headers,
    Accept: 'application/json'
  }
  const timestamp = Math.floor(Date.now() / 1000) // Current timestamp in seconds
  const body = request.data ? JSON.stringify(request.data) : ''
  const hmac = generateHmac(timestamp, body)

  if (request.headers) {
    request.headers['X-Client-HMAC'] = hmac
    request.headers['X-Client-Timestamp'] = timestamp.toString()
  }

  const Url = request.url || ''

  if (/\[[a-zA-Z]+\]/.test(Url) && request.pathParams) {
    const reformedUrl = new URL(Url, request.baseURL)

    Object.entries(request.pathParams || {}).forEach(([k, v]) => {
      if (!!v) reformedUrl.pathname = reformedUrl.pathname.replace(`[${k}]`, encodeURIComponent(v))
    })

    return { ...request, url: reformedUrl.pathname.replace(/\/[[a-zA-Z]+\]/g, '') }
  }

  return request
}

// @ts-ignore
API.interceptors.request.use(request => requestHandler(request))

export default API
