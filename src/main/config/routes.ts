import express, { type Express, type Request, type Response, Router } from 'express'
import { adaptRoute } from '../adapters'
import { makeCaptureOrderController, makeCreateOrderController } from '../factories'
import { bodyParser, contentType, cors, securityHeaders, staticHeaders } from '../middlewares'
import path from 'path'

export default (app: Express): void => {
  const router = Router()

  app.use(express.static(path.join(__dirname, '..', '..', '..', 'public')))

  router.get('/', staticHeaders, (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, '..', '..', '..', 'public', 'checkout-page.html'))
    console.log('sending file: ' + path.join(__dirname, '..', '..', '..', 'public', 'checkout-page.html'))
  })

  router.get('/confirmed', (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, '..', '..', '..', 'public', 'confirmed-purchase.html'))
  })

  router.post('/checkout', bodyParser, contentType, cors, securityHeaders, adaptRoute(makeCreateOrderController()))
  router.get('/capture', bodyParser, contentType, cors, securityHeaders, adaptRoute(makeCaptureOrderController()))

  app.use(router)
}
