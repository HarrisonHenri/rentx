import React, { useCallback } from 'react'
import { StatusBar, useWindowDimensions } from 'react-native'

import { useNavigation, useRoute } from '@react-navigation/native'

import DoneSvg from '../../assets/done.svg'
import LogoSvg from '../../assets/logo_background_gray.svg'
import { ConfirmButton } from '../../components/ConfirmButton'
import {
  RootParams,
  StackNavigationProps,
} from '../../routes/stack.routes.model'
import { Container, Content, Title, Message, Footer } from './styles'

const Confirmation: React.FC = () => {
  const { width } = useWindowDimensions()
  const route = useRoute<RootParams<'Confirmation'>>()
  const { title, message, nextScreen } = route.params

  const { navigate } = useNavigation<StackNavigationProps>()

  const handleRentalCompleteNav = useCallback(() => {
    navigate(nextScreen)
  }, [navigate, nextScreen])

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <LogoSvg width={width} />
      <Content>
        <DoneSvg width={80} height={80} />
        <Title>{title}</Title>

        <Message>{message}</Message>
      </Content>
      <Footer>
        <ConfirmButton title="OK" onPress={handleRentalCompleteNav} />
      </Footer>
    </Container>
  )
}

export { Confirmation }
