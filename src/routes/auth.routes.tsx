import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import { Confirmation } from '../screens/Confirmation'
import { SignIn } from '../screens/SignIn'
import { SignUpFirstStep } from '../screens/SignUp/SignUpFirstStep'
import { SignUpSecondStep } from '../screens/SignUp/SignUpSecondStep'
import { Splash } from '../screens/Splash'
import { RootParamList } from './stack.routes.model'

const { Navigator, Screen } = createStackNavigator<RootParamList>()

const AuthRoutes: React.FC = () => (
  <Navigator screenOptions={{ headerShown: false }}>
    <Screen name="Splash" component={Splash} />
    <Screen name="SignIn" component={SignIn} />
    <Screen name="SignUpFirstStep" component={SignUpFirstStep} />
    <Screen name="SignUpSecondStep" component={SignUpSecondStep} />
    <Screen name="Confirmation" component={Confirmation} />
  </Navigator>
)

export { AuthRoutes }
