/* eslint no-param-reassign: "off", no-underscore-dangle: "off" */
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'

import { where } from '@nozbe/watermelondb/QueryDescription'

import { database } from '../databases'
import { User as UserModel } from '../databases/model/User'
import { AuthResponse } from '../dtos/AuthResponseDTO'
import { User } from '../dtos/UserDTO'
import { api } from '../services/api'

interface SignInCredentials {
  email: string
  password: string
}

interface AuthContextData {
  user: User
  signIn: ({ email, password }: SignInCredentials) => Promise<void>
  signOut: () => Promise<void>
  updateUserAvatar: (avatar: string) => Promise<void>
  loading: boolean
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<User>({} as User)
  const [loading, setLoading] = useState(true)

  const signIn = useCallback(async ({ email, password }: SignInCredentials) => {
    const response = await api.post<AuthResponse>('/sessions', {
      email,
      password,
    })
    const { refresh_token, token, user } = response.data
    api.defaults.headers.Authorization = `Bearer ${token}`

    const userCollection = database.get<UserModel>('users')
    await database.write(async () => {
      await userCollection.create(newUser => {
        newUser.user_id = user.id
        newUser.name = user.name
        newUser.token = token
        newUser.refresh_token = refresh_token
        newUser.email = user.email
        newUser.driver_license = user.driver_license
        newUser.avatar = user.avatar
      })
    })

    setData({ ...user, user_id: user.id, token, refresh_token })
  }, [])

  useEffect(() => {
    async function loadUserData(): Promise<void> {
      const userCollection = database.get<UserModel>('users')
      const response = await userCollection.query().fetch()
      if (response.length) {
        const user = response[0]._raw as unknown as UserModel
        api.defaults.headers.Authorization = `Bearer ${user.token}`
        setData(prevState => ({ ...prevState, ...user }))
      }
    }
    loadUserData()
    setLoading(false)
  }, [])

  const updateUserAvatar = useCallback(
    async (avatar: string) => {
      const userCollection = database.get<UserModel>('users')
      await database.write(async () => {
        const userSelected = await userCollection
          .query(where('user_id', data.user_id))
          .fetch()
        await userSelected[0].update(userData => {
          userData.avatar = avatar
        })
      })

      setData(prevState => ({ ...prevState, avatar }))
    },
    [data.user_id],
  )

  const signOut = useCallback(async () => {
    const userCollection = database.get<UserModel>('users')
    await database.write(async () => {
      const userSelected = await userCollection
        .query(where('user_id', data.user_id))
        .fetch()

      await userSelected[0].destroyPermanently()
    })

    setData({} as User)
  }, [data.user_id])

  return (
    <AuthContext.Provider
      value={{ user: data, signIn, signOut, updateUserAvatar, loading }}
    >
      {children}
    </AuthContext.Provider>
  )
}

const useAuth = (): AuthContextData => {
  return useContext(AuthContext)
}

export { useAuth, AuthProvider }
