import React, { useCallback, useEffect, useState } from 'react'
import { StatusBar, View } from 'react-native'

import { AntDesign } from '@expo/vector-icons'
import { useIsFocused, useNavigation } from '@react-navigation/native'
import { format } from 'date-fns'
import { useTheme } from 'styled-components'

import { BackButton } from '../../components/BackButton'
import { Car } from '../../components/Car'
import { Load } from '../../components/Load'
import { RentalDTO } from '../../dtos/RentalDTO'
import { api } from '../../services/api'
import {
  Container,
  Header,
  Title,
  Subtitle,
  Content,
  RentalsTitle,
  CarFooter,
  CarFooterTitle,
  CarFooterPeriod,
  CarFooterDate,
  NoRentalsText,
} from './styles'

const UserRentals: React.FC = () => {
  const [rental, setRental] = useState<RentalDTO>({} as RentalDTO)
  const [loading, setLoading] = useState(true)
  const theme = useTheme()
  const userIsFocused = useIsFocused()
  const { goBack } = useNavigation()

  useEffect(() => {
    async function fetchUserRental(): Promise<void> {
      try {
        const response = await api.get<RentalDTO[]>('/rentals/user')

        setRental(response.data[0] ?? ({} as RentalDTO))
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }

    fetchUserRental()
  }, [userIsFocused])

  const handleGoBack = useCallback(() => {
    goBack()
  }, [goBack])

  return (
    <Container>
      <Header>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        <BackButton
          onPress={handleGoBack}
          color={theme.colors.additionalColors.shape.main}
        />

        <Title>
          Escolha uma{'\n'}data de início e{'\n'}fim do aluguel
        </Title>

        <Subtitle>Conforto, segurança e praticidade.</Subtitle>
      </Header>

      <Content>
        <RentalsTitle>Aluguel corrente</RentalsTitle>
        {loading && <Load />}
        {!loading && rental && rental.car && (
          <View>
            <Car data={rental.car} />
            <CarFooter>
              <CarFooterTitle>Período</CarFooterTitle>
              <CarFooterPeriod>
                <CarFooterDate>
                  {format(new Date(rental.start_date), 'dd/MM/yyyy')}
                </CarFooterDate>
                <AntDesign
                  name="arrowright"
                  size={16}
                  color={theme.fonts.colors.title}
                  style={{ marginHorizontal: 10 }}
                />
                <CarFooterDate>
                  {format(new Date(rental.expected_return_date), 'dd/MM/yyyy')}
                </CarFooterDate>
              </CarFooterPeriod>
            </CarFooter>
          </View>
        )}
        {!loading && !rental.car && (
          <NoRentalsText>Sem alugueis por aqui 😥.</NoRentalsText>
        )}
      </Content>
    </Container>
  )
}

export { UserRentals }
