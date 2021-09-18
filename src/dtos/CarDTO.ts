export interface CarDTO {
  id: string
  brand: string
  name: string
  daily_rate: number
  description?: string
  specifications?: [{ id: string; name: string; description: string }]
  images: [{ id: string; image_name: string }]
}
