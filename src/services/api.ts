/* eslint no-underscore-dangle: "off" */

import axios from 'axios'

import { config } from '../config/config'
import { database } from '../databases'
import { User } from '../databases/model/User'
import { AuthResponse } from '../dtos/AuthResponseDTO'

const api = axios.create({
  baseURL: config.API_URL,
})

// api.interceptors.response.use(
//   response => {
//     return response
//   },
//   async function (error) {
//     const userCollection = database.get<User>('users')
//     const useQuery = await userCollection.query().fetch()

//     let db_refresh_token = ''
//     let user: User

//     if (useQuery.length) {
//       user = useQuery[0]._raw as unknown as User
//       db_refresh_token = user.refresh_token
//     }

//     if (error.response.status === 401 && db_refresh_token) {
//       const response = await api.post<AuthResponse>('/refresh-token', {
//         token: db_refresh_token,
//       })

//       const { refresh_token, token } = response.data

//       await database.write(async () => {
//         await user.update(() => {
//           user.token = token
//           user.refresh_token = refresh_token
//         })
//       })

//       return response
//     }
//     return Promise.reject(error)
//   },
// )

export { api }
