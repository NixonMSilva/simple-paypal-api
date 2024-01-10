import { AuthenticateRepository } from '@/data/protocols'
import env from '@/main/config/env'
import axios, { type AxiosRequestConfig } from 'axios'
import qs from 'qs'

export class ApiAuth implements AuthenticateRepository {
  async authenticate (): Promise<string> {
    const auth = Buffer.from(`${env.clientId}:${env.clientSecret}`).toString('base64')
    const dataContent = qs.stringify({
      grant_type: 'client_credentials'
    })
    const config: AxiosRequestConfig = {
      method: 'post',
      maxBodyLength: Infinity,
      url: env.authUrl,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${auth}`
      },
      data: dataContent
    }
    try {
      const response = await axios.request(config)
      return response.data.access_token
    } catch (error) {
      throw new Error('Failed to retrieve access token')
    }
  }
}
