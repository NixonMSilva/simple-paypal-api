import { CreateOrderModel } from '@/domain/models'

export interface CreateOrder {
  createOrder: (data: CreateOrder.Input) => Promise<string[]>
}

export namespace CreateOrder {
  export type Input = CreateOrderModel
}
