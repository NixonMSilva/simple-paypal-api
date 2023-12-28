import { CheckoutModel } from '@/domain/models'

export interface Checkout {
  checkout: (data: CheckoutModel) => Promise<void>
}
