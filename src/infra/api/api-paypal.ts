import { CheckoutRepository } from '@/data/protocols'

export class ApiPaypal implements CheckoutRepository {
  async checkout (data: any): Promise<void> {
    console.log(data)
    // TODO: Next Steps
  }
}
