import React from 'react'

import { MaterialCommunityIcons } from '@expo/vector-icons'
import { BorderlessButtonProps } from 'react-native-gesture-handler'
import { useTheme } from 'styled-components'

import { Container } from './styles'

interface Props extends BorderlessButtonProps {
  color?: string
}

const BackButton: React.FC<Props> = ({ color, ...rest }) => {
  const theme = useTheme()

  return (
    <Container {...rest}>
      <MaterialCommunityIcons
        name="chevron-left"
        size={24}
        color={color || theme.fonts.colors.text}
      />
    </Container>
  )
}

export { BackButton }
