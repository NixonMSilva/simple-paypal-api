import path from 'path'
import { Express, Router } from 'express'

export default (app: Express): void => {
  const router = Router()

  router.post('/checkout')

  app.use(router)
}
