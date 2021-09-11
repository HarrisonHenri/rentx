import { NavigationProp } from '@react-navigation/native'

import { CarDTO } from '../dtos/CarDTO'

export type RootParamList = {
  Home: undefined
  CarDetails: { car: CarDTO }
  Rental: undefined
  RentalDetails: undefined
  RentalComplete: undefined
}

export type StackNavigationProps = NavigationProp<RootParamList>
