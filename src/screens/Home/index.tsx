import React, { useCallback, useEffect, useState } from 'react'
import { StatusBar, StyleSheet } from 'react-native'

import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { PanGestureHandler, RectButton } from 'react-native-gesture-handler'
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated'
import { RFValue } from 'react-native-responsive-fontsize'
import { useTheme } from 'styled-components'

import Logo from '../../assets/logo.svg'
import { Car } from '../../components/Car'
import { Load } from '../../components/Load'
import { CarDTO } from '../../dtos/CarDTO'
import { StackNavigationProps } from '../../routes/stack.routes.model'
import { api } from '../../services/api'
import { Container, Header, TotalCars, HeaderContent, CarList } from './styles'

const UserRentals = Animated.createAnimatedComponent(RectButton)

const Home: React.FC = () => {
  const [cars, setCars] = useState<CarDTO[]>([])
  const [loading, setLoading] = useState(true)
  const theme = useTheme()
  const { navigate } = useNavigation<StackNavigationProps>()
  const positionY = useSharedValue(0)
  const positionX = useSharedValue(0)

  const userRentalsButtonStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: positionX.value },
      { translateY: positionY.value },
    ],
  }))
  const onGestureEvent = useAnimatedGestureHandler({
    onStart(_, ctx: any) {
      ctx.positionX = positionX.value
      ctx.positionY = positionY.value
    },
    onActive(event, ctx: any) {
      positionY.value = ctx.positionY + event.translationY
      positionX.value = ctx.positionX + event.translationX
    },
    onEnd() {
      positionY.value = withSpring(0)
      positionX.value = withSpring(0)
    },
  })

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
      <PanGestureHandler onGestureEvent={onGestureEvent}>
        <Animated.View style={[userRentalsButtonStyle, styles.view]}>
          <UserRentals
            onPress={handleUserRentals}
            style={[
              styles.button,
              { backgroundColor: theme.colors.primary.main },
            ]}
          >
            <Ionicons
              name="ios-car-sport"
              size={32}
              color={theme.colors.additionalColors.shape.main}
            />
          </UserRentals>
        </Animated.View>
      </PanGestureHandler>
    </Container>
  )
}

export { Home }

const styles = StyleSheet.create({
  view: {
    position: 'absolute',
    bottom: 8,
    right: 8,
  },
  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
