import { Authenticate } from '@/domain/usecases'
import { AuthenticateRepository } from '@/data/protocols'

export class ApiAuthenticate implements Authenticate {
  constructor (private readonly authenticateRepository: AuthenticateRepository) {}

  async authenticate (): Promise<string> {
    return await this.authenticateRepository.authenticate()
  }
}
