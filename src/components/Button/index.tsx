import React from 'react'
import { ActivityIndicator } from 'react-native'

import { RectButtonProps } from 'react-native-gesture-handler'
import { useTheme } from 'styled-components'

import { Container, Title } from './styles'

interface Props extends RectButtonProps {
  title: string
  color?: string
  loading?: boolean
}

const Button: React.FC<Props> = ({
  title,
  color,
  loading = false,
  enabled = true,
  ...rest
}) => {
  const theme = useTheme()

  return (
    <Container
      {...rest}
      color={color}
      style={{ opacity: enabled && !loading ? 1 : 0.5 }}
    >
      {!loading ? (
        <Title>{title}</Title>
      ) : (
        <ActivityIndicator
          size="large"
          color={theme.colors.additionalColors.shape.main}
        />
      )}
    </Container>
  )
}

export { Button }
