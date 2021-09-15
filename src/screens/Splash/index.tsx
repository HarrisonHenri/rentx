import React, { useCallback, useEffect } from 'react'

import { StackActions, useNavigation } from '@react-navigation/native'
import Animated, {
  Extrapolate,
  interpolate,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'

import BrandSvg from '../../assets/brand.svg'
import LogoSvg from '../../assets/logo.svg'
import { StackNavigationProps } from '../../routes/stack.routes.model'
import { Container } from './styles'

const Splash: React.FC = () => {
  const splashAnimation = useSharedValue(0)
  const { dispatch } = useNavigation<StackNavigationProps>()

  const brandStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(splashAnimation.value, [0, 50], [1, 0]),
      transform: [
        {
          translateX: interpolate(
            splashAnimation.value,
            [0, 50],
            [0, -50],
            Extrapolate.CLAMP,
          ),
        },
      ],
    }
  })

  const logoStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(splashAnimation.value, [0, 25, 50], [0, 0.3, 1]),
      transform: [
        {
          translateX: interpolate(
            splashAnimation.value,
            [0, 50],
            [-50, 0],
            Extrapolate.CLAMP,
          ),
        },
      ],
    }
  })

  const startApp = useCallback(() => {
    dispatch(StackActions.replace('SignIn'))
  }, [dispatch])

  useEffect(() => {
    splashAnimation.value = withTiming(50, { duration: 1000 }, () => {
      'worklet'

      runOnJS(startApp)()
    })
  }, [splashAnimation, startApp])

  return (
    <Container>
      <Animated.View style={[brandStyle, { position: 'absolute' }]}>
        <BrandSvg width={80} height={50} />
      </Animated.View>
      <Animated.View style={[logoStyle, { position: 'absolute' }]}>
        <LogoSvg width={180} height={20} />
      </Animated.View>
    </Container>
  )
}

export { Splash }
