import { Checkout } from '@/domain/usecases'

export interface CheckoutRepository {
  checkout: (data: Checkout.Input) => Promise<void>
}

export namespace CheckoutRepository {
  export type Input = Checkout.Input
}
