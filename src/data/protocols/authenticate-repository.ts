export interface AuthenticateRepository {
  authenticate: () => Promise<string>
}
