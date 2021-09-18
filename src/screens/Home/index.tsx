import React, { useCallback, useEffect, useState } from 'react'
import { StatusBar } from 'react-native'

import { synchronize } from '@nozbe/watermelondb/sync'
import { useNetInfo } from '@react-native-community/netinfo'
import { useNavigation } from '@react-navigation/native'
import { RFValue } from 'react-native-responsive-fontsize'

import Logo from '../../assets/logo.svg'
import { Car } from '../../components/Car'
import { Load } from '../../components/Load'
import { database } from '../../databases'
import { CarDTO } from '../../dtos/CarDTO'
import { StackNavigationProps } from '../../routes/stack.routes.model'
import { api } from '../../services/api'
import { Container, Header, TotalCars, HeaderContent, CarList } from './styles'

const Home: React.FC = () => {
  const { navigate } = useNavigation<StackNavigationProps>()
  const [cars, setCars] = useState<CarDTO[]>([])
  const [loading, setLoading] = useState(true)
  const netInfo = useNetInfo()

  const handleCarDetailsNav = useCallback(
    (car: CarDTO) => {
      navigate('CarDetails', { car })
    },
    [navigate],
  )

  const offlineSynchronize = useCallback(async () => {
    await synchronize({
      database,
      pullChanges: async () => {
        return {
          changes: {},
          timestamp: new Date().getTime(),
        }
      },
      pushChanges: async ({ changes }) => {
        const user = changes.users.updated[0] ?? changes.users.created[0]

        await api.post('/users/sync', user)
      },
    })
  }, [])

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

  useEffect(() => {
    if (netInfo.isConnected) {
      offlineSynchronize()
    }
  }, [netInfo.isConnected, offlineSynchronize])

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
