import React from 'react'
import { Platform } from 'react-native'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useTheme } from 'styled-components'

import CarSvg from '../assets/car.svg'
import HomeSvg from '../assets/home.svg'
import { UserRentals } from '../screens/UserRentals'
import { AppStackRoutes } from './app.stack.routes'

const { Navigator, Screen } = createBottomTabNavigator()

const AppTabRoutes: React.FC = () => {
  const theme = useTheme()

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.primary.main,
        tabBarInactiveTintColor: theme.fonts.colors.detail,
        tabBarShowLabel: false,
        tabBarStyle: {
          paddingVertical: Platform.OS === 'ios' ? 20 : 0,
          height: 80,
          backgroundColor: theme.colors.additionalColors.background.primary,
        },
      }}
    >
      <Screen
        name="App"
        component={AppStackRoutes}
        options={{
          tabBarIcon: ({ color }) => (
            <HomeSvg fill={color} width={24} height={24} />
          ),
        }}
      />
      <Screen
        name="UserRentals"
        component={UserRentals}
        options={{
          tabBarIcon: ({ color }) => (
            <CarSvg fill={color} width={24} height={24} />
          ),
        }}
      />
    </Navigator>
  )
}

export { AppTabRoutes }
