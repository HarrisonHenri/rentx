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
    let isMounted = true

    async function fetchCars(): Promise<void> {
      try {
        const response = await api.get<CarDTO[]>('/cars/available')

        if (isMounted) {
          setCars(response.data)
        }
      } catch (error) {
        console.log(error)
      } finally {
        if (isMounted) {
          setLoading(false)
        }
      }
    }
    fetchCars()
    return () => {
      isMounted = false
    }
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
    </Container>
  )
}

export { Home }
