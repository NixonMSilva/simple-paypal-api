export interface HttpRequest {
  accountId?: string
  query?: any
  body?: any
  headers?: any
  params?: any
  file?: any
}

export interface HttpResponse {
  statusCode: number
  redirectUrl?: string
  body?: any
}
