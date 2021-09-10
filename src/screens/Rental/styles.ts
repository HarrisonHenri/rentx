import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import { RFValue } from 'react-native-responsive-fontsize'
import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) =>
    theme.colors.additionalColors.background.secondary};
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

export const RentalPeriod = styled.View`
  width: 100%;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin: 8px 0;
`

export const DateInfo = styled.View`
  width: 30%;
`

export const DateTitle = styled.Text`
  color: ${({ theme }) => theme.fonts.colors.text};
  font-family: ${({ theme }) => theme.fonts.secondary[500]};
  font-size: ${RFValue(10)}px;
`

interface DateValueProps {
  selected?: boolean
}

export const DateValue = styled.Text<DateValueProps>`
  color: ${({ theme }) => theme.fonts.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary[500]};
  font-size: ${RFValue(16)}px;

  ${({ selected, theme }) =>
    !selected &&
    css`
      border-bottom-width: 1px;
      border-bottom-color: ${theme.fonts.colors.text};
      padding: 4px;
    `}
`

export const Content = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingBottom: 24,
  },
  showsVerticalScrollIndicator: false,
})``

export const Footer = styled.View`
  padding: 24px;
`
