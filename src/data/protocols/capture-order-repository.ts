import { CaptureOrder } from '@/domain/usecases'

export interface CaptureOrderRepository {
  captureOrder: (data: CaptureOrder.Input) => Promise<CaptureOrder.Output>
}

export namespace CaptureOrderRepository {
  export type Input = CaptureOrder.Input
  export type Output = CaptureOrder.Output
}
