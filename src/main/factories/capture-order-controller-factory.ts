import { CaptureOrderController } from '@/presentation'
import { makeApiCaptureOrder } from './api-capture-order-factory'

export const makeCaptureOrderController = (): CaptureOrderController => {
  const apiCaptureOrder = makeApiCaptureOrder()
  return new CaptureOrderController(apiCaptureOrder)
}
