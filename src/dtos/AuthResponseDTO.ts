import { User } from './UserDTO'

export interface AuthResponse {
  token: string
  user: User
  refresh_token: string
}
