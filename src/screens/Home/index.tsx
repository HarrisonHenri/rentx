import React, { useCallback, useEffect, useState } from 'react'
import { StatusBar } from 'react-native'

import { useNavigation } from '@react-navigation/native'
import { RFValue } from 'react-native-responsive-fontsize'

import Logo from '../../assets/logo.svg'
import { Car } from '../../components/Car'
import { Load } from '../../components/Load'
import { CarDTO } from '../../dtos/CarDTO'
import { StackNavigationProps } from '../../routes/stack.routes.model'
import { api } from '../../services/api'
import { Container, Header, TotalCars, HeaderContent, CarList } from './styles'

const Home: React.FC = () => {
  const [cars, setCars] = useState<CarDTO[]>([])
  const [loading, setLoading] = useState(true)
  const { navigate } = useNavigation<StackNavigationProps>()

  const handleCarDetailsNav = useCallback(() => {
    navigate('CarDetails')
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
      <Header>
        <HeaderContent>
          <Logo width={RFValue(100)} height={RFValue(12)} />
          <TotalCars>Total de 12 carros</TotalCars>
        </HeaderContent>
      </Header>
      {loading ? (
        <Load />
      ) : (
        <CarList
          data={cars}
          renderItem={({ item }) => (
            <Car data={item as CarDTO} onPress={handleCarDetailsNav} />
          )}
          keyExtractor={item => {
            return (item as CarDTO).id
          }}
        />
      )}
    </Container>
  )
}

export { Home }
