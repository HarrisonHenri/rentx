import { TextInput } from 'react-native-gesture-handler'
import { RFValue } from 'react-native-responsive-fontsize'
import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  flex-direction: row;
  margin-bottom: 8px;
`

interface Props {
  isFocused: boolean
}

export const IconContainer = styled.View<Props>`
  height: 56px;
  width: 56px;

  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) =>
    theme.colors.additionalColors.background.secondary};
  margin-right: 2px;

  ${({ isFocused, theme }) =>
    isFocused &&
    css`
      border-bottom-width: 2px;
      border-bottom-color: ${theme.colors.primary.main};
    `}
`

export const InputText = styled(TextInput)<Props>`
  flex: 1;
  padding: 0 24px;

  background-color: ${({ theme }) =>
    theme.colors.additionalColors.background.secondary};
  color: ${({ theme }) => theme.fonts.colors.text};

  font-family: ${({ theme }) => theme.fonts.primary[400]};
  font-size: ${RFValue(16)}px;

  ${({ isFocused, theme }) =>
    isFocused &&
    css`
      border-bottom-width: 2px;
      border-bottom-color: ${theme.colors.primary.main};
    `}
`
