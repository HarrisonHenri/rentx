/* eslint no-param-reassign: "off", no-underscore-dangle: "off" */

import axios from 'axios'

import { config } from '../config/config'
import { database } from '../databases'
import { User } from '../databases/model/User'
import { AuthResponse } from '../dtos/AuthResponseDTO'

const api = axios.create({
  baseURL: config.API_URL,
})

api.interceptors.response.use(
  response => {
    return response
  },
  async function (error) {
    const userCollection = database.get<User>('users')
    const useQuery = await userCollection.query().fetch()

    if (useQuery.length && error.response.status === 401) {
      const user = useQuery[0]._raw as unknown as User
      const db_refresh_token = user.refresh_token

      const response = await api.post<AuthResponse>('/refresh-token', {
        token: db_refresh_token,
      })

      const { refresh_token, token } = response.data

      await database.write(async () => {
        const userSelected = await userCollection.find(user.id)
        await userSelected.update(userData => {
          userData.token = token
          userData.refresh_token = refresh_token
        })
      })

      api.defaults.headers.Authorization = `Bearer ${user.token}`
    }
    return Promise.reject(error)
  },
)

export { api }
