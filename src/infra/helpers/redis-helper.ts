import Redis from 'ioredis'

export const redisHelper = async (): Promise<any> => {
  const conn = new Redis({
    host: 'redis',
    port: 6379,
    password: '123'
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
