import { Express, Router } from 'express'
import { adaptRoute } from '../adapters'
import { makeCheckoutController } from '../factories'

export default (app: Express): void => {
  const router = Router()

  router.post('/checkout', adaptRoute(makeCheckoutController()))

  app.use(router)
}
