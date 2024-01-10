import { CaptureOrderInputModel, CaptureOrderOutputModel } from '@/domain/models'

export interface CaptureOrder {
  captureOrder: (data: CaptureOrder.Input) => Promise<CaptureOrder.Output>
}

export namespace CaptureOrder {
  export type Input = CaptureOrderInputModel

  export type Output = CaptureOrderOutputModel
}
