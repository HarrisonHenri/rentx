import React, { useCallback, useEffect } from 'react'
import { StatusBar, StyleSheet } from 'react-native'

import { useNetInfo } from '@react-native-community/netinfo'
import { useNavigation, useRoute } from '@react-navigation/native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated'
import { useTheme } from 'styled-components'

import { Accessory } from '../../components/Accessory'
import { BackButton } from '../../components/BackButton'
import { Button } from '../../components/Button'
import { ImageSlider } from '../../components/ImageSlider'
import { config } from '../../config/config'
import {
  RootParams,
  StackNavigationProps,
} from '../../routes/stack.routes.model'
import { getAccessoryIcon } from '../../utils/getAccessoryIcon'
import {
  Container,
  Header,
  CarImages,
  Details,
  Description,
  Brand,
  Name,
  Rent,
  Price,
  About,
  Accessories,
  Footer,
  OfflineInfo,
} from './styles'

const CarDetails: React.FC = () => {
  const { navigate, goBack } = useNavigation<StackNavigationProps>()
  const route = useRoute<RootParams<'CarDetails'>>()
  const theme = useTheme()
  const { car } = route.params

  const netInfo = useNetInfo()

  const carImages = car.images.map(
    ({ image_name }) => `${config.API_URL}/${image_name}`,
  )

  const scrollY = useSharedValue(0)
  const scrollHandler = useAnimatedScrollHandler(event => {
    scrollY.value = event.contentOffset.y
  })
  const headerStyleAnimation = useAnimatedStyle(() => ({
    height: interpolate(scrollY.value, [0, 200], [200, 70], Extrapolate.CLAMP),
  }))
  const sliderCarsStyleAnimation = useAnimatedStyle(() => ({
    opacity: interpolate(scrollY.value, [0, 150], [1, 0], Extrapolate.CLAMP),
  }))

  const handleRentalNav = useCallback(() => {
    navigate('Rental', { car })
  }, [navigate, car])

  const handleGoBack = useCallback(() => {
    goBack()
  }, [goBack])

  return (
    <Container>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />

      <Animated.View
        style={[
          headerStyleAnimation,
          styles.header,
          {
            backgroundColor: theme.colors.additionalColors.background.secondary,
          },
        ]}
      >
        <Header>
          <BackButton onPress={handleGoBack} />
        </Header>

        <Animated.View style={[sliderCarsStyleAnimation]}>
          <CarImages>
            <ImageSlider
              imagesUrl={netInfo.isConnected ? carImages : [carImages[0]]}
            />
          </CarImages>
        </Animated.View>
      </Animated.View>

      <Animated.ScrollView
        contentContainerStyle={{
          paddingHorizontal: 24,
          paddingTop: getStatusBarHeight() + 160,
        }}
        showsVerticalScrollIndicator={false}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
      >
        <Details>
          <Description>
            <Brand>{car.brand}</Brand>
            <Name>{car.name}</Name>
          </Description>

          <Rent>
            <Price>{`R$ ${
              netInfo.isConnected ? car.daily_rate : '...'
            }`}</Price>
          </Rent>
        </Details>

        {netInfo.isConnected ? (
          <Accessories>
            {car?.specifications?.map(({ id, name, description }) => (
              <Accessory
                key={id}
                name={name}
                icon={getAccessoryIcon(description)}
              />
            ))}
          </Accessories>
        ) : null}

        <About>{car.description}</About>
      </Animated.ScrollView>
      <Footer>
        <Button
          title="Agende seu aluguel"
          onPress={handleRentalNav}
          enabled={Boolean(netInfo.isConnected)}
        />

        {netInfo.isConnected === false && (
          <OfflineInfo>
            Conecte-se a Internet para ver mais detalhes e agendar seu carro.
          </OfflineInfo>
        )}
      </Footer>
    </Container>
  )
}

export { CarDetails }

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    overflow: 'hidden',
    zIndex: 1,
  },
})
