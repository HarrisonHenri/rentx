import React from 'react'

import { NavigationContainer } from '@react-navigation/native'

import { Load } from '../components/Load'
import { useAuth } from '../hooks/auth'
import { AppTabRoutes } from './app.tab.routes'
import { AuthRoutes } from './auth.routes'

const Routes: React.FC = () => {
  const { user, loading } = useAuth()

  if (loading) {
    return <Load />
  }

  return (
    <NavigationContainer>
      {user.id ? <AppTabRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  )
}

export default Routes
