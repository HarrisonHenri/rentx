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
  margin-top: ${getStatusBarHeight() + 32}px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const Steps = styled.View`
  flex-direction: row;
  align-self: flex-end;
`

export const Title = styled.Text`
  color: ${({ theme }) => theme.fonts.colors.title};
  font-family: ${({ theme }) => theme.fonts.secondary[400]};
  font-size: ${RFValue(40)}px;

  margin-bottom: 16px;
`

export const Subtitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary[400]};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.fonts.colors.text};
  line-height: ${RFValue(24)}px;

  margin-bottom: 16px;
`

export const Form = styled.View`
  width: 100%;
  margin-bottom: 16px;
`

export const FormTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary[600]};
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.fonts.colors.title};

  margin-bottom: 24px;
`

export const Footer = styled.View``
