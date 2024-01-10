import { ok, serverError } from '@/presentation/helpers'
import { Controller, HttpRequest, HttpResponse } from '@/presentation/protocols'
import { Authenticate, CreateOrder } from '@/domain/usecases'

export class CreateOrderController implements Controller {
  constructor (
    private readonly authenticate: Authenticate,
    private readonly createOrder: CreateOrder
  ) {}

  async handle (request: HttpRequest): Promise<HttpResponse> {
    try {
      const token = await this.authenticate.authenticate()
      const urls = await this.createOrder.createOrder({ ...request.body, token })
      console.log(urls)
      return ok(urls)
    } catch (error) {
      console.error({ error })
      return serverError()
    }
  }
}
