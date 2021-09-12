import { CarDTO } from './CarDTO'

export interface RentalDTO {
  start_date: Date
  expected_return_date: Date
  car: CarDTO
}
