import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  align-items: center;
`

export const Header = styled.View`
  width: 100%;

  background-color: ${({ theme }) => theme.colors.additionalColors.header};

  justify-content: center;
  padding: 24px;
  padding-top: ${getStatusBarHeight() + 32}px;
`

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.additionalColors.shape.main};
  font-family: ${({ theme }) => theme.fonts.secondary[600]};
  font-size: ${RFValue(32)}px;

  margin-top: 8px;
`

export const Subtitle = styled.Text`
  color: ${({ theme }) => theme.colors.additionalColors.shape.main};
  font-family: ${({ theme }) => theme.fonts.secondary[400]};
  font-size: ${RFValue(16)}px;

  margin-top: 8px;
`

export const Content = styled.View`
  width: 100%;
  flex: 1;
  padding: 0 16px;
`

export const RentalsTitle = styled.Text`
  color: ${({ theme }) => theme.colors.additionalColors.shape.dark};
  font-family: ${({ theme }) => theme.fonts.secondary[600]};
  font-size: ${RFValue(16)}px;
  padding: 24px 0;
`

export const NoRentalsText = styled.Text`
  color: ${({ theme }) => theme.colors.additionalColors.shape.dark};
  font-family: ${({ theme }) => theme.fonts.secondary[600]};
  font-size: ${RFValue(24)}px;
  text-align: center;
  margin-top: 40px;
`

export const CarFooter = styled.View`
  width: 100%;
  padding: 12px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  background-color: ${({ theme }) =>
    theme.colors.additionalColors.background.secondary};
`

export const CarFooterTitle = styled.Text`
  color: ${({ theme }) => theme.fonts.colors.detail};
  font-family: ${({ theme }) => theme.fonts.secondary[500]};
  font-size: ${RFValue(10)}px;
`

export const CarFooterPeriod = styled.View`
  flex-direction: row;
`

export const CarFooterDate = styled.Text`
  color: ${({ theme }) => theme.fonts.colors.detail};
  font-family: ${({ theme }) => theme.fonts.primary[400]};
  font-size: ${RFValue(12)}px;
`
