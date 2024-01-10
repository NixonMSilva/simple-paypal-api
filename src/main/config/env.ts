import dotenv from 'dotenv'

dotenv.config()

export default {
  port: process.env.PORT ?? 8080,
  selfUrl: String(process.env.SELF_URL) ?? 'http://localhost',
  authUrl: 'https://api-m.sandbox.paypal.com/v1/oauth2/token',
  paypalUrl: 'https://api-m.sandbox.paypal.com/v2/checkout/orders',
  clientId: String(process.env.CLIENT_ID),
  clientSecret: String(process.env.CLIENT_SECRET),
  redisHost: 'redis',
  redisPort: 6379,
  redisPassword: String(process.env.REDIS_PASSWORD)
}
