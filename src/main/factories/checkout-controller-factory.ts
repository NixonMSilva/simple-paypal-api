import { CheckoutController } from '@/presentation'
import { makeApiCheckout } from './api-checkout-factory'

export const makeCheckoutController = (): CheckoutController => {
  const apiCheckout = makeApiCheckout()
  return new CheckoutController(apiCheckout)
}
