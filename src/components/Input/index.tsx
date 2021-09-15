import React, { useCallback, useState } from 'react'
import { TextInputProps } from 'react-native'

import { Feather } from '@expo/vector-icons'
import { useTheme } from 'styled-components'

import { Container, InputText, IconContainer } from './styles'

interface Props extends TextInputProps {
  iconName: React.ComponentProps<typeof Feather>['name']
}

const Input: React.FC<Props> = ({ iconName, value, ...rest }) => {
  const [isFocused, setIsFocused] = useState(false)
  const [isFilled, setIsFilled] = useState(false)
  const theme = useTheme()

  const handleInputFocus = useCallback(() => setIsFocused(true), [])
  const handleInputBlur = useCallback(() => {
    setIsFocused(false)
    setIsFilled(Boolean(value))
  }, [value])

  return (
    <Container>
      <IconContainer isFocused={isFocused}>
        <Feather
          name={iconName}
          size={24}
          color={
            isFocused || isFilled
              ? theme.colors.primary.main
              : theme.fonts.colors.detail
          }
        />
      </IconContainer>
      <InputText
        {...rest}
        value={value}
        isFocused={isFocused}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
      />
    </Container>
  )
}

export { Input }
