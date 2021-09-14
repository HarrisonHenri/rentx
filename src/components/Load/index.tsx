import React from 'react'

import LottieView from 'lottie-react-native'

import LoadAnimation from '../../assets/load.json'
import { Container } from './styles'

const Load: React.FC = () => {
  return (
    <Container>
      <LottieView
        source={LoadAnimation}
        autoPlay
        style={{ height: 100 }}
        resizeMode="contain"
        loop
      />
    </Container>
  )
}
export { Load }
