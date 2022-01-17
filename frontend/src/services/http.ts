import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'

const onRequest = (config: AxiosRequestConfig): AxiosRequestConfig => {
  config.baseURL = 'http://localhost:3001/api'
  console.info(`[request] [${JSON.stringify(config)}]`)
  return config
}

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
  console.error(`[request error] [${JSON.stringify(error)}]`)
  return Promise.reject(error)
}

const onResponse = (response: AxiosResponse): AxiosResponse => {
  console.info(`[response] [${JSON.stringify(response)}]`)
  return response
}

const onResponseError = (error: AxiosError): Promise<AxiosError> => {
  console.error(`[response error] [${JSON.stringify(error)}]`)
  return Promise.reject(error)
}
axios.interceptors.request.use(onRequest, onRequestError)
axios.interceptors.response.use(onResponse, onResponseError)

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
}
