import React from 'react'

import {
  Archivo_400Regular,
  Archivo_500Medium,
  Archivo_600SemiBold,
} from '@expo-google-fonts/archivo'
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter'
import AppLoading from 'expo-app-loading'
import { useFonts } from 'expo-font'
import { ThemeProvider } from 'styled-components/native'

import { CarDetails } from './src/screens/CarDetails'
import Rental from './src/screens/Rental'
import { theme } from './src/styles/theme'

export default function App(): JSX.Element {
  const [fontsLoader] = useFonts({
    Archivo_400Regular,
    Archivo_500Medium,
    Archivo_600SemiBold,
    Inter_400Regular,
    Inter_500Medium,
  })

  if (!fontsLoader) {
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={theme}>
      <Rental />
    </ThemeProvider>
  )
}
