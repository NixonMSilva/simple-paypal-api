export type CreateOrderOutputModel = {
  id: string
  status: string
  paymentSource: PaymentSourceModel
  payer: {
    name: NameModel
  }
  links: LinksModel[]
}

export type PaymentSourceModel = {
  paypal: {
    name: NameModel
  }
}

export type NameModel = {
  given_name: string
  surname: string
}

export type LinksModel = {
  href: string
  rel: string
  method: string
}
