import React from 'react'

import { Container, Title } from './styles'

interface Props {
  title: string
  color?: string
  onPress: VoidFunction
}

const Button: React.FC<Props> = ({ title, ...rest }) => {
  return (
    <Container {...rest}>
      <Title>{title}</Title>
    </Container>
  )
}

export default Button
