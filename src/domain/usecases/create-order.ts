import { CreateOrderInputModel, CreateOrderOutputModel } from '@/domain/models'

export interface CreateOrder {
  createOrder: (data: CreateOrder.Input) => Promise<CreateOrder.Output>
}

export namespace CreateOrder {
  export type Input = CreateOrderInputModel
  export type Output = CreateOrderOutputModel
}
