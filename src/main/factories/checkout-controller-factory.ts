import { CheckoutController } from '@/presentation'
import { makeApiAuthenticate } from './api-authenticate-factory'
import { makeApiCheckout } from './api-checkout-factory'

export const makeCheckoutController = (): CheckoutController => {
  const apiAuthenticate = makeApiAuthenticate()
  const apiCheckout = makeApiCheckout()
  return new CheckoutController(apiAuthenticate, apiCheckout)
}
