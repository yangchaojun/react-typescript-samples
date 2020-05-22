import { LoginEntity } from '../model/login'

export const isValidLogin = (loginInfo: LoginEntity): boolean =>
  loginInfo.login === 'admin' && loginInfo.password === 'test'
