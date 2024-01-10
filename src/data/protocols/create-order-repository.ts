import { CreateOrder } from '@/domain/usecases'

export interface CreateOrderRepository {
  createOrder: (data: CreateOrder.Input) => Promise<CreateOrder.Output>
}

export namespace CreateOrderRepository {
  export type Input = CreateOrder.Input
  export type Output = CreateOrder.Output
}
