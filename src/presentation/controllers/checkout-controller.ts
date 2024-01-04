import { ok, serverError } from '@/presentation/helpers'
import { Controller, HttpRequest, HttpResponse } from '@/presentation/protocols'
import { Authenticate, Checkout } from '@/domain/usecases'

export class CheckoutController implements Controller {
  constructor (
    private readonly authenticate: Authenticate,
    private readonly checkout: Checkout
  ) {}

  async handle (request: HttpRequest): Promise<HttpResponse> {
    try {
      const token = await this.authenticate.authenticate()
      await this.checkout.checkout({ ...request.body, token })
      return ok('OK')
    } catch (error) {
      console.error({ error })
      return serverError()
    }
  }
}
