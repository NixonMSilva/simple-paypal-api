import { ApiPaypal } from '@/infra/api'
import { ApiCreateOrder } from '@/data/usecases'

export const makeApiCreateOrder = (): ApiCreateOrder => {
  const checkoutRepository = new ApiPaypal()
  return new ApiCreateOrder(checkoutRepository)
}
