import { NavigationProp, RouteProp } from '@react-navigation/native'

import { CarDTO } from '../dtos/CarDTO'
import { RentalPeriodDTO } from '../dtos/RentalPeriodDTO'

export type RootParamList = {
  Home: undefined
  CarDetails: { car: CarDTO }
  Rental: { car: CarDTO }
  RentalDetails: {
    car: CarDTO
    dailys: number
    expectedReturnDate: string
    rentalPeriod: RentalPeriodDTO
  }
  RentalComplete: undefined
  UserRentals: undefined
  Splash: undefined
}

export type RootParams<Route extends keyof RootParamList> = RouteProp<
  RootParamList,
  Route
>

export type StackNavigationProps = NavigationProp<RootParamList>
