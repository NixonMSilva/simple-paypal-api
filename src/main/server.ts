import 'module-alias/register'
import app from './config/app'
import env from './config/env'

app.listen(env.port, () => {
  console.log(`Server started on port ${env.port}!`)
})
