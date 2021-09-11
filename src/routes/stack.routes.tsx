import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import { CarDetails } from '../screens/CarDetails'
import { Home } from '../screens/Home'
import { Rental } from '../screens/Rental'
import { RentalComplete } from '../screens/RentalComplete'
import { RentalDetails } from '../screens/RentalDetails'

const { Navigator, Screen } = createStackNavigator()

const StackRoutes: React.FC = () => (
  <Navigator screenOptions={{ headerShown: false }}>
    <Screen name="Home" component={Home} />
    <Screen name="CarDetails" component={CarDetails} />
    <Screen name="Rental" component={Rental} />
    <Screen name="RentalDetails" component={RentalDetails} />
    <Screen name="RentalComplete" component={RentalComplete} />
  </Navigator>
)

export { StackRoutes }
