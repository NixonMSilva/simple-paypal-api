import { badRequest, ok, serverError, unauthorized } from '@/presentation/helpers'
import { MissingParamError } from '../errors'
import { Controller, HttpRequest, HttpResponse } from '@/presentation/protocols'
import { Authenticate, CaptureOrder } from '@/domain/usecases'

export class CaptureOrderController implements Controller {
  constructor (
    private readonly authenticate: Authenticate,
    private readonly captureOrder: CaptureOrder
  ) {}

  async handle (request: HttpRequest): Promise<HttpResponse> {
    try {
      // Authentication
      const token = await this.authenticate.authenticate()

      if (!token) {
        return unauthorized()
      }
      console.log(token)

      // Order capturing
      const data = {
        orderId: request.body.orderId,
        token
      }

      if (!data.orderId) {
        return badRequest(new MissingParamError('OrderID'))
      }

      const captureOutput = await this.captureOrder.captureOrder(data)
      return ok(captureOutput)
    } catch (error) {
      console.error({ error })
      return serverError()
    }
  }
}
