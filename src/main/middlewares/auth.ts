import { adaptMiddleware } from '@/main/adapters'
import { makeAuthTwoLayersMiddleware, makeAuthInternalResourcesMiddleware } from '@/main/factories'

// export const authLegacy = adaptMiddleware(makeAuthMiddleware(false))
// export const authLegacyAdmin = adaptMiddleware(makeAuthMiddleware(true))
export const auth = adaptMiddleware(makeAuthTwoLayersMiddleware(false))
export const authAdmin = adaptMiddleware(makeAuthTwoLayersMiddleware(true))
export const authWithInternalResources = adaptMiddleware(makeAuthInternalResourcesMiddleware(false))
export const authWithInternalResourcesAdmin = adaptMiddleware(makeAuthInternalResourcesMiddleware(true))
