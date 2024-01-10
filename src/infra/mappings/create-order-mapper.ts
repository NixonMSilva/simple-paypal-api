import { CreateOrderRepository } from '@/data/protocols'

export const CreateOrderMapper = {
  toDomain: (raw: any): CreateOrderRepository.Output => {
    const response = {
      id: raw.id,
      status: raw.status,
      paymentSource: raw.payment_source,
      payer: raw.payer,
      links: raw.links
    }
    return response
  }
}
