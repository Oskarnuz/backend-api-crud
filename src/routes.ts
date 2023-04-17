import { Application } from "express";

import healthcheck from './api/healthcheck'
import user from './api/user'


const routes = (app: Application): void => {
  app.use('/api/healthcheck', healthcheck)
  app.use('/api/user', user)

}

export default routes