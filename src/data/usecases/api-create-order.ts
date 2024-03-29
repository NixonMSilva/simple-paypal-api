import { CreateOrderRepository } from '@/data/protocols'
import { CreateOrder } from '@/domain/usecases'

export class ApiCreateOrder implements CreateOrder {
  constructor (private readonly createOrderRepository: CreateOrderRepository) {}

  async createOrder (data: CreateOrder.Input): Promise<CreateOrder.Output> {
    return await this.createOrderRepository.createOrder(data)
  }
}
