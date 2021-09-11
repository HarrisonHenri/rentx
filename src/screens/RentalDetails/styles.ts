import {
  getBottomSpace,
  getStatusBarHeight,
} from 'react-native-iphone-x-helper'
import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) =>
    theme.colors.additionalColors.background.secondary};
`

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: absolute;

  margin-top: ${getStatusBarHeight() + 16}px;
  margin-left: 24px;
`

export const CarImages = styled.View`
  margin-top: ${getStatusBarHeight() + 32}px;
`

export const Content = styled.ScrollView.attrs({
  contentContainerStyle: {
    padding: 24,
    alignItems: 'center',
  },
  showsVerticalScrollIndicator: false,
})``

export const Details = styled.View`
  width: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-top: 36px;
`

export const Description = styled.View``

export const Rent = styled.View``

export const Price = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary[500]};
  color: ${({ theme }) => theme.colors.primary.main};
  font-size: ${RFValue(24)}px;
`

export const Brand = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary[500]};
  color: ${({ theme }) => theme.fonts.colors.detail};
  font-size: ${RFValue(10)}px;

  text-transform: uppercase;
`

export const Name = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary[500]};
  color: ${({ theme }) => theme.fonts.colors.detail};
  font-size: ${RFValue(24)}px;
`

export const Accessories = styled.View`
  width: 100%;

  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  margin-top: 16px;
`

export const Footer = styled.View`
  width: 100%;
  background-color: ${({ theme }) =>
    theme.colors.additionalColors.background.primary};

  padding: 24px 24px ${getBottomSpace() + 24}px;
`

export const RentalPeriod = styled.View`
  width: 100%;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin: 16px;
  border-bottom-width: 0.5px;
  border-bottom-color: ${({ theme }) => theme.fonts.colors.line};
  padding-bottom: 16px;
`

export const DateInfo = styled.View`
  width: 30%;
`

export const DateTitle = styled.Text`
  color: ${({ theme }) => theme.fonts.colors.detail};
  font-family: ${({ theme }) => theme.fonts.primary[500]};
  font-size: ${RFValue(10)}px;

  text-transform: uppercase;
`

export const DateValue = styled.Text`
  color: ${({ theme }) => theme.fonts.colors.title};
  font-family: ${({ theme }) => theme.fonts.primary[500]};
  font-size: ${RFValue(16)}px;
`

export const CalendarIcon = styled.View`
  width: 48px;
  height: 48px;
  background-color: ${({ theme }) => theme.colors.primary.main};

  justify-content: center;
  align-items: center;
`
export const RentalPrice = styled.View`
  width: 100%;
`
export const RentalPriceLabel = styled.Text`
  color: ${({ theme }) => theme.fonts.colors.detail};
  font-family: ${({ theme }) => theme.fonts.primary[500]};
  font-size: ${RFValue(10)}px;

  text-transform: uppercase;
`

export const RentalPriceDetails = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const RentalPriceQuota = styled.Text`
  color: ${({ theme }) => theme.fonts.colors.title};
  font-family: ${({ theme }) => theme.fonts.primary[500]};
  font-size: ${RFValue(16)}px;
`

export const RentalPriceTotal = styled.Text`
  color: ${({ theme }) => theme.colors.additionalColors.success};
  font-family: ${({ theme }) => theme.fonts.secondary[500]};
  font-size: ${RFValue(24)}px;
`
