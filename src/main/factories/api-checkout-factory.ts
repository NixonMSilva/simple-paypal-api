import { ApiPaypal } from '@/infra/api'
import { ApiCheckout } from '@/data/usecases'

export const makeApiCheckout = (): ApiCheckout => {
  const checkoutRepository = new ApiPaypal()
  return new ApiCheckout(checkoutRepository)
}
