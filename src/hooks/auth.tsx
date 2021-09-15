import React, { createContext, useCallback, useContext, useState } from 'react'

import { api } from '../services/api'

interface User {
  id: string
  email: string
  name: string
  driver_license: string
  avatar: string
}

interface SessionsResponse {
  token: string
  user: User
  refresh_token: string
}

interface AuthState {
  token: string
  user: User
}

interface SignInCredentials {
  email: string
  password: string
}

interface AuthContextData {
  user: User
  signIn: ({ email, password }: SignInCredentials) => Promise<void>
  signOut: () => Promise<void>
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>({} as AuthState)

  const signIn = useCallback(async ({ email, password }: SignInCredentials) => {
    const response = await api.post<SessionsResponse>('/sessions', {
      email,
      password,
    })

    const { token, user } = response.data

    api.defaults.headers.Authorization = `Bearer ${token}`

    setData({ token, user })
  }, [])

  const signOut = useCallback(async () => {}, [])

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

const useAuth = (): AuthContextData => {
  return useContext(AuthContext)
}

export { useAuth, AuthProvider }
