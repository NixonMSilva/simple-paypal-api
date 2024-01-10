import { CreateOrder } from '@/domain/usecases'

export interface CreateOrderRepository {
  createOrder: (data: CreateOrder.Input) => Promise<string[]>
}

export namespace CreateOrderRepository {
  export type Input = CreateOrder.Input
}
