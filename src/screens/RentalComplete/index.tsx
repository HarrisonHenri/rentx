import React from 'react'
import { useWindowDimensions } from 'react-native'

import DoneSvg from '../../assets/done.svg'
import LogoSvg from '../../assets/logo_background_gray.svg'
import { ConfirmButton } from '../../components/ConfirmButton'
import { Container, Content, Title, Message, Footer } from './styles'

const RentalComplete: React.FC = () => {
  const { width } = useWindowDimensions()

  return (
    <Container>
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
        <ConfirmButton title="OK" />
      </Footer>
    </Container>
  )
}

export { RentalComplete }
