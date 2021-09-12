import axios from 'axios'

import { config } from '../config/config'

const api = axios.create({
  baseURL: config.API_URL,
})

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MzE0MjExOTIsImV4cCI6MTYzMTQyMjA5Miwic3ViIjoiNzk4NzljNTMtOWZmMC00NmY2LTk3M2MtMDkwNmJhZDZjNzkzIn0.HDybFYMmp6iSM1PlXYNXT0EZq2NcrkaCDg6jBaxA7eg'

api.defaults.headers.Authorization = `Bearer ${token}`

export { api }
