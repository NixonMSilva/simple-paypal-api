import { CheckoutRepository } from '@/data/protocols'
import { Checkout } from '@/domain/usecases'

export class ApiCheckout implements Checkout {
  constructor (private readonly checkoutRepository: CheckoutRepository) {}

  async checkout (data: Checkout.Input): Promise<void> {
    await this.checkoutRepository.checkout(data)
  }
}
