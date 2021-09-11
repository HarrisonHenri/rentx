import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

interface ButtonProps extends RectButtonProps {
  color: string
}

export const Container = styled(RectButton)<ButtonProps>`
  width: 100%;

  padding: 16px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, color }) => color || theme.colors.primary.main};
`

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary[500]};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.additionalColors.shape.main};
`
