import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import { CarDetails } from '../screens/CarDetails'
import { Confirmation } from '../screens/Confirmation'
import { Home } from '../screens/Home'
import { Rental } from '../screens/Rental'
import { RentalDetails } from '../screens/RentalDetails'
import { RootParamList } from './stack.routes.model'

const { Navigator, Screen } = createStackNavigator<RootParamList>()

const AppStackRoutes: React.FC = () => (
  <Navigator screenOptions={{ headerShown: false }}>
    <Screen name="Home" component={Home} />
    <Screen name="CarDetails" component={CarDetails} />
    <Screen name="Rental" component={Rental} />
    <Screen name="RentalDetails" component={RentalDetails} />
    <Screen name="Confirmation" component={Confirmation} />
  </Navigator>
)

export { AppStackRoutes }
