import { NavigationProp, RouteProp } from '@react-navigation/native'

import { CarDTO } from '../dtos/CarDTO'
import { RentalPeriodDTO } from '../dtos/RentalPeriodDTO'

export type RootParamList = {
  Splash: undefined
  SignIn: undefined
  SignUpFirstStep: undefined
  SignUpSecondStep: { name: string; email: string; driverLicense: string }
  Home: undefined
  CarDetails: { car: CarDTO }
  Rental: { car: CarDTO }
  RentalDetails: {
    car: CarDTO
    dailys: number
    expectedReturnDate: string
    rentalPeriod: RentalPeriodDTO
  }
  Confirmation: {
    title: string
    message: string
    nextScreen: keyof RootParamList
  }
  UserRentals: undefined
}

export type RootParams<Route extends keyof RootParamList> = RouteProp<
  RootParamList,
  Route
>

export type StackNavigationProps = NavigationProp<RootParamList>
