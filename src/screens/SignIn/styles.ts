import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.View`
  padding: 0 24px;

  background-color: ${({ theme }) =>
    theme.colors.additionalColors.background.primary};
`

export const Header = styled.View`
  width: 100%;
  margin-top: ${getStatusBarHeight() + 120}px;
`

export const Title = styled.Text`
  color: ${({ theme }) => theme.fonts.colors.title};
  font-family: ${({ theme }) => theme.fonts.secondary[600]};
  font-size: ${RFValue(40)}px;
`

export const Subtitle = styled.Text`
  color: ${({ theme }) => theme.fonts.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary[400]};
  font-size: ${RFValue(16)}px;
  line-height: ${RFValue(24)}px;
`

export const Form = styled.View`
  width: 100%;
  margin: 64px 0;
`

export const Footer = styled.View``
