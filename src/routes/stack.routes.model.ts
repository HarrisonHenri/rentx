import { NavigationProp } from '@react-navigation/native'

export type RootParamList = {
  Home: undefined
  CarDetails: undefined
  Rental: undefined
  RentalDetails: undefined
  RentalComplete: undefined
}

export type StackNavigationProps = NavigationProp<RootParamList>
