import { CaptureOrderController } from '@/presentation'
import { makeApiAuthenticate } from './api-authenticate-factory'
import { makeApiCaptureOrder } from './api-capture-order-factory'

export const makeCaptureOrderController = (): CaptureOrderController => {
  const apiAuthenticate = makeApiAuthenticate()
  const apiCaptureOrder = makeApiCaptureOrder()
  return new CaptureOrderController(apiAuthenticate, apiCaptureOrder)
}
