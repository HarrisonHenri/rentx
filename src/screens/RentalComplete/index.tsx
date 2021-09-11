import React, { useCallback } from 'react'
import { StatusBar, useWindowDimensions } from 'react-native'

import { useNavigation } from '@react-navigation/native'

import DoneSvg from '../../assets/done.svg'
import LogoSvg from '../../assets/logo_background_gray.svg'
import { ConfirmButton } from '../../components/ConfirmButton'
import { StackNavigationProps } from '../../routes/stack.routes.model'
import { Container, Content, Title, Message, Footer } from './styles'

const RentalComplete: React.FC = () => {
  const { width } = useWindowDimensions()

  const { navigate } = useNavigation<StackNavigationProps>()

  const handleRentalCompleteNav = useCallback(() => {
    navigate('Home')
  }, [navigate])

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
        <Title>Carro alugado!</Title>

        <Message>
          Agora você só precisa ir{'\n'}
          até a concessionária da RENTX
          {'\n'}
          pagar o seu automóvel.
        </Message>
      </Content>
      <Footer>
        <ConfirmButton title="OK" onPress={handleRentalCompleteNav} />
      </Footer>
    </Container>
  )
}

export { RentalComplete }
