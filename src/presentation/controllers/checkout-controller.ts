import { ok, serverError } from '@/presentation/helpers'
import { Controller, HttpRequest, HttpResponse } from '@/presentation/protocols'
import { Checkout } from '@/domain/usecases'

export class CheckoutController implements Controller {
  constructor (private readonly checkout: Checkout) {}

  async handle (request: HttpRequest): Promise<HttpResponse> {
    try {
      return ok('OK')
    } catch (error) {
      console.error({ error })
      return serverError()
    }
  }
}
