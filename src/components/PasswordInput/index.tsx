import React, { useCallback, useState } from 'react'
import { TextInputProps } from 'react-native'

import { Feather } from '@expo/vector-icons'
import { BorderlessButton } from 'react-native-gesture-handler'
import { useTheme } from 'styled-components'

import { Container, InputText, IconContainer } from './styles'

const PasswordInput: React.FC<TextInputProps> = ({ value, ...rest }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const [isFocused, setIsFocused] = useState(false)
  const [isFilled, setIsFilled] = useState(false)
  const theme = useTheme()

  const handleInputFocus = useCallback(() => setIsFocused(true), [])
  const handleInputBlur = useCallback(() => {
    setIsFocused(false)
    setIsFilled(Boolean(value))
  }, [value])

  const handleIsPasswordVisibleChange = useCallback(() => {
    setIsPasswordVisible(!isPasswordVisible)
  }, [isPasswordVisible])

  return (
    <Container>
      <IconContainer isFocused={isFocused}>
        <Feather
          name="lock"
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
        secureTextEntry={!isPasswordVisible}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        isFocused={isFocused}
      />
      <BorderlessButton onPress={handleIsPasswordVisibleChange}>
        <IconContainer isFocused={isFocused}>
          <Feather
            name={isPasswordVisible ? 'eye' : 'eye-off'}
            size={24}
            color={theme.fonts.colors.detail}
          />
        </IconContainer>
      </BorderlessButton>
    </Container>
  )
}

export { PasswordInput }
