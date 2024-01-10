import { ApiAuth } from '@/infra/api'
import { ApiAuthenticate } from '@/data/usecases'

export const makeApiAuthenticate = (): ApiAuthenticate => {
  const authRepository = new ApiAuth()
  return new ApiAuthenticate(authRepository)
}
