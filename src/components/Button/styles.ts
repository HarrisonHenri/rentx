import { TextProps } from 'react-native'

import { RectButton } from 'react-native-gesture-handler'
import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

interface ButtonProps {
  color?: string
}

export const Container = styled(RectButton)<ButtonProps>`
  width: 100%;

  padding: 16px;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;

  background-color: ${({ theme, color }) => color || theme.colors.primary.main};
`

interface CustomTextProps extends TextProps {
  light?: boolean
}

export const Title = styled.Text<CustomTextProps>`
  font-family: ${({ theme }) => theme.fonts.primary[500]};
  font-size: ${RFValue(16)}px;
  color: ${({ theme, light }) =>
    light
      ? theme.colors.additionalColors.header
      : theme.colors.additionalColors.shape.main};
`
