import { CheckoutRepository } from '@/data/protocols'
import env from '@/main/config/env'
import axios, { type AxiosRequestConfig } from 'axios'

export class ApiPaypal implements CheckoutRepository {
  async checkout (data: CheckoutRepository.Input): Promise<void> {
    const orderDetails = {
      intent: 'CAPTURE',
      purchase_units: [
        {
          amount: {
            currency_code: 'USD',
            value: data.amount
          },
          items: [
            {
              name: 'Test purchase item',
              description: 'Test description',
              unit_amount: {
                currency_code: 'USD',
                value: data.amount
              },
              quantity: '1',
              category: 'PHYSICAL_GOODS'
            },
          ],
          shipping: {
            name: {
              full_name: data.firstName + ' ' + data.lastName
            },
            address: {
              address_line_1: data.addressLine1,
              admin_area_2: data.addressLine2,
              admin_area_1: data.stateProvince,
              postal_code: data.zipPostalCode,
              country_code: data.country
            }
          }
        }
      ]
    }
    const config: AxiosRequestConfig = {
      method: 'post',
      maxBodyLength: Infinity,
      url: env.paypalUrl,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${data.token}`
      }
    }
    
    try {
      const response = await axios.request()
    }
  }
}
