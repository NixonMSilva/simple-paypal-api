import { CheckoutModel } from '@/domain/models'

export interface Checkout {
  checkout: (data: CheckoutModel) => Promise<void>
}

export namespace Checkout {
  export type Input = CheckoutModel
}
