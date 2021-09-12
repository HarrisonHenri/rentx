import React, { useCallback, useEffect, useState } from 'react'
import { StatusBar } from 'react-native'

import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { RFValue } from 'react-native-responsive-fontsize'
import { useTheme } from 'styled-components'

import Logo from '../../assets/logo.svg'
import { Car } from '../../components/Car'
import { Load } from '../../components/Load'
import { CarDTO } from '../../dtos/CarDTO'
import { StackNavigationProps } from '../../routes/stack.routes.model'
import { api } from '../../services/api'
import {
  Container,
  Header,
  TotalCars,
  HeaderContent,
  CarList,
  UserRentals,
} from './styles'

const Home: React.FC = () => {
  const [cars, setCars] = useState<CarDTO[]>([])
  const [loading, setLoading] = useState(true)
  const theme = useTheme()
  const { navigate } = useNavigation<StackNavigationProps>()

  const handleCarDetailsNav = useCallback(
    (car: CarDTO) => {
      navigate('CarDetails', { car })
    },
    [navigate],
  )

  const handleUserRentals = useCallback(() => {
    navigate('UserRentals')
  }, [navigate])

  useEffect(() => {
    async function fetchCars(): Promise<void> {
      try {
        const response = await api.get<CarDTO[]>('/cars/available')

        setCars(response.data)
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }

    fetchCars()
  }, [])

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {loading ? (
        <Load />
      ) : (
        <>
          <Header>
            <HeaderContent>
              <Logo width={RFValue(100)} height={RFValue(12)} />
              <TotalCars>{`Total de ${cars.length} carros`}</TotalCars>
            </HeaderContent>
          </Header>
          <CarList
            data={cars}
            renderItem={({ item }) => (
              <Car
                data={item as CarDTO}
                onPress={() => handleCarDetailsNav(item as CarDTO)}
              />
            )}
            keyExtractor={item => {
              return (item as CarDTO).id
            }}
          />
        </>
      )}
      <UserRentals onPress={handleUserRentals}>
        <Ionicons
          name="ios-car-sport"
          size={32}
          color={theme.colors.additionalColors.shape.main}
        />
      </UserRentals>
    </Container>
  )
}

export { Home }
