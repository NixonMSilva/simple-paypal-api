import { CaptureOrderModel } from '@/domain/models'

export interface CaptureOrder {
  captureOrder: (data: CaptureOrder.Input) => Promise<CaptureOrder.Output>
}

export namespace CaptureOrder {
  export type Input = CaptureOrderModel

  export type Output = {
    orderId: string
    status: string
  }
}
