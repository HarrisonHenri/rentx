export interface CarDTO {
  id: string
  brand: string
  name: string
  daily_rate: number
  thumbnail?: string
  description?: string
  specifications?: [{ id: string; name: string; description: string }]
}
