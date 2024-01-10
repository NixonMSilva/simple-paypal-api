import { CreateOrderController } from '@/presentation'
import { makeApiAuthenticate } from './api-authenticate-factory'
import { makeApiCreateOrder } from './api-create-order-factory'

export const makeCreateOrderController = (): CreateOrderController => {
  const apiAuthenticate = makeApiAuthenticate()
  const apiCreateOrder = makeApiCreateOrder()
  return new CreateOrderController(apiAuthenticate, apiCreateOrder)
}
