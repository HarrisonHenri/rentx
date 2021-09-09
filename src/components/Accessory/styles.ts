import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.View`
  width: 100px;
  height: 88px;

  justify-content: center;
  align-items: center;
  padding: 16px;
  margin-bottom: 8px;

  background-color: ${({ theme }) =>
    theme.colors.additionalColors.background.primary};
`

export const Name = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary[500]};
  color: ${({ theme }) => theme.fonts.colors.text};
  font-size: ${RFValue(16)}px;
`
