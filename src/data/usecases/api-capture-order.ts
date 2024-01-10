import { CaptureOrderRepository } from '@/data/protocols'
import { CaptureOrder } from '@/domain/usecases'

export class ApiCaptureOrder implements CaptureOrder {
  constructor (private readonly captureOrderRepository: CaptureOrderRepository) {}

  async captureOrder (data: CaptureOrder.Input): Promise<CaptureOrder.Output> {
    return await this.captureOrderRepository.captureOrder(data)
  }
}
