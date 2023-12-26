import { type Middleware, type HttpRequest } from '@/presentation/protocols'

import { type RequestHandler, type NextFunction } from 'express'

type Adapter = (middleware: Middleware) => RequestHandler

export const adaptMiddleware: Adapter = middleware => async (req, res, next: NextFunction) => {
  const request: HttpRequest = {
    headers: req.headers
  }

  const httpResponse = await middleware.handle(request)

  if (httpResponse.statusCode === 200) {
    Object.assign(req, httpResponse.body)
    next()
  } else {
    res.status(httpResponse.statusCode).json({
      error: httpResponse.body.message
    })
  }
}
