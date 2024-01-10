import { CaptureOrderRepository, CreateOrderRepository } from '@/data/protocols'
import env from '@/main/config/env'
import axios, { type AxiosRequestConfig } from 'axios'

export class ApiPaypal implements CaptureOrderRepository, CreateOrderRepository {
  async createOrder (data: CreateOrderRepository.Input): Promise<string[]> {
    const orderDetails = {
      intent: 'CAPTURE',
      purchase_units: [
        {
          amount: {
            currency_code: 'USD',
            value: data.amount
          },
          shipping: {
            type: 'SHIPPING',
            name: {
              full_name: data.firstName + ' ' + data.lastName
            },
            address: {
              address_line_1: data.addressLine1,
              address_line_2: data.addressLine2,
              admin_area_2: data.city,
              admin_area_1: data.stateProvince,
              postal_code: data.zipPostalCode,
              country_code: data.country
            }
          }
        }
      ],
      payment_source: {
        paypal: {
          experience_context: {
            payment_method_preference: 'IMMEDIATE_PAYMENT_REQUIRED',
            locale: 'en-US',
            landing_page: 'GUEST_CHECKOUT',
            user_action: 'PAY_NOW',
            return_url: String(env.selfUrl) + ':' + String(env.port) + '/capture',
            address: {
              address_line_1: data.addressLine1,
              address_line_2: data.addressLine2,
              admin_area_2: data.city,
              admin_area_1: data.stateProvince,
              postal_code: data.zipPostalCode,
              country_code: data.country
            }
          },
          name: {
            given_name: data.firstName,
            surname: data.lastName
          }
        }
      }
    }
    const config: AxiosRequestConfig = {
      method: 'post',
      maxBodyLength: Infinity,
      url: env.paypalUrl,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${data.token}`
      },
      data: orderDetails
    }

    const response = await axios.request(config)
    return response.data.links
  }

  async captureOrder (data: CaptureOrderRepository.Input): Promise<CaptureOrderRepository.Output> {
    const response = {
      orderId: data.orderId,
      status: 'COMPLETED'
    }
    console.log(response)
    return response
  }
}
