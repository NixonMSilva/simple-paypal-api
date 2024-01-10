import { badRequest, ok, serverError } from '@/presentation/helpers'
import { MissingParamError } from '../errors'
import { Controller, HttpRequest, HttpResponse } from '@/presentation/protocols'
import { CaptureOrder } from '@/domain/usecases'

export class CaptureOrderController implements Controller {
  constructor (
    private readonly captureOrder: CaptureOrder
  ) {}

  async handle (request: HttpRequest): Promise<HttpResponse> {
    try {
      const data = {
        orderId: request.query.token,
        auth: 'test'
      }

      if (!data.orderId) {
        return badRequest(new MissingParamError('token'))
      }

      const output = await this.captureOrder.captureOrder(data)
      return ok(output)
    } catch (error) {
      console.error({ error })
      return serverError()
    }
  }
}
