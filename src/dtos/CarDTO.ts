export interface CarDTO {
  id: string
  brand: string
  name: string
  daily_rate: number
  thumbnail?: string
  specifications: [{ name: string; description: string }]
}
