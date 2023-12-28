import { ok, serverError } from '@/presentation/helpers'
import { Controller, HttpRequest, HttpResponse } from '@/presentation/protocols'
import { Checkout } from '@/domain/usecases'

export class CheckoutController implements Controller {
  constructor (private readonly checkout: Checkout) {}

  async handle (request: HttpRequest): Promise<HttpResponse> {
    try {
      await this.checkout.checkout(request.body)
      return ok('OK')
    } catch (error) {
      console.error({ error })
      return serverError()
    }
  }
}
