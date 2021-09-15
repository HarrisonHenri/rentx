import axios from 'axios'

import { config } from '../config/config'

const api = axios.create({
  baseURL: config.API_URL,
})

// api.interceptors.response.use(
//   response => {
//     return response
//   },
//   async function (error) {
//     const access_token = localStorage.getItem('access_token')
//     const refresh_token = localStorage.getItem('refresh_token')
//     if (error.response.status === 401 && access_token) {
//       const response = await api.post('/refresh-token', {
//         token: refresh_token,
//       })

//       return response
//     }
//     return Promise.reject(error)
//   },
// )

export { api }
