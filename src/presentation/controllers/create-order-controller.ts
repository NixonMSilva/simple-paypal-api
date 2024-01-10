import { ok, redirect, serverError, unauthorized } from '@/presentation/helpers'
import { Controller, HttpRequest, HttpResponse } from '@/presentation/protocols'
import { Authenticate, CreateOrder } from '@/domain/usecases'

export class CreateOrderController implements Controller {
  constructor (
    private readonly authenticate: Authenticate,
    private readonly createOrder: CreateOrder
  ) {}

  async handle (request: HttpRequest): Promise<HttpResponse> {
    try {
      // Authentication
      const token = await this.authenticate.authenticate()

      if (!token) {
        return unauthorized()
      }

      // Order creation
      const orderData = await this.createOrder.createOrder({ ...request.body, token })
      console.log(orderData)

      // Paypal redirection
      for (const link of orderData.links) {
        if (link.rel === 'payer-action') {
          return redirect(link.href)
        }
      }

      return ok('Ok')
    } catch (error) {
      console.error({ error })
      return serverError()
    }
  }
}
