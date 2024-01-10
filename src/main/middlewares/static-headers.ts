import { RequestHandler } from 'express'

export const staticHeaders: RequestHandler = (request, response, next): void => {
  response.setHeader('Content-Type', 'text/html')
  next()
}
