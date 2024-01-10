import dotenv from 'dotenv'

dotenv.config()

export default {
  port: process.env.PORT ?? 8080,
  selfUrl: String(process.env.SELF_URL) ?? 'http://localhost',
  authUrl: String(process.env.AUTH_URL),
  paypalUrl: String(process.env.PAYPAL_URL),
  clientId: String(process.env.CLIENT_ID),
  clientSecret: String(process.env.CLIENT_SECRET)
}
