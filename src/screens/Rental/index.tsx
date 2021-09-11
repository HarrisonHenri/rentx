import React, { useCallback } from 'react'
import { StatusBar } from 'react-native'

import { useNavigation } from '@react-navigation/native'
import { useTheme } from 'styled-components'

import ArrowSvg from '../../assets/arrow.svg'
import { BackButton } from '../../components/BackButton'
import { Button } from '../../components/Button'
import { Calendar } from '../../components/Calendar'
import {
  Container,
  Header,
  Title,
  RentalPeriod,
  DateInfo,
  DateTitle,
  DateValue,
  Content,
  Footer,
} from './styles'

const Rental: React.FC = () => {
  const theme = useTheme()

  const { navigate } = useNavigation()

  const handleRentalDetailsNav = useCallback(() => {
    navigate({ name: 'RentalDetails' as never, params: {} as never })
  }, [navigate])

  return (
    <Container>
      <Header>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        <BackButton
          onPress={() => {}}
          color={theme.colors.additionalColors.shape.main}
        />

        <Title>
          Escolha uma{'\n'}data de início e{'\n'}fim do aluguel
        </Title>

        <RentalPeriod>
          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue selected>18/06/2021</DateValue>
          </DateInfo>

          <ArrowSvg />

          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue selected={false}>18/06/2021</DateValue>
          </DateInfo>
        </RentalPeriod>
      </Header>

      <Content>
        <Calendar />
      </Content>

      <Footer>
        <Button title="Confirmar" onPress={handleRentalDetailsNav} />
      </Footer>
    </Container>
  )
}

export { Rental }
