import env from '@/main/config/env'
import Redis from 'ioredis'

export const redisHelper = async (): Promise<any> => {
  const conn = new Redis({
    host: env.redisHost,
    port: env.redisPort,
    password: env.redisPassword
  })

  await new Promise<void>((resolve, reject) => {
    conn.on('connect', () => {
      console.log('Redis connected')
      resolve()
    })

    conn.on('error', (err) => {
      console.error('Error connecting to redis', err)
      reject(err)
    })
  })

  return conn
}
