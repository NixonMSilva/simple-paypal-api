import { ApiPaypal } from '@/infra/api'
import { ApiCaptureOrder } from '@/data/usecases'

export const makeApiCaptureOrder = (): ApiCaptureOrder => {
  const checkoutRepository = new ApiPaypal()
  return new ApiCaptureOrder(checkoutRepository)
}
