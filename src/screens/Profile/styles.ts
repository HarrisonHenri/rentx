import { BorderlessButton, RectButton } from 'react-native-gesture-handler'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import { RFValue } from 'react-native-responsive-fontsize'
import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) =>
    theme.colors.additionalColors.background.primary};
`

export const Header = styled.View`
  width: 100%;
  height: 224px;
  padding: 0 24px;

  align-items: center;

  background-color: ${({ theme }) => theme.colors.additionalColors.header};
`

export const HeaderTop = styled.View`
  width: 100%;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-top: ${getStatusBarHeight() + 32}px;
`

export const HeaderTitle = styled.Text`
  font-size: ${RFValue(24)}px;
  font-family: ${({ theme }) => theme.fonts.secondary[600]};
  color: ${({ theme }) => theme.colors.additionalColors.background.secondary};
`

export const LogoutButton = styled(BorderlessButton)``

export const PhotoContainer = styled.View`
  width: 160px;
  height: 160px;
  border-radius: 80px;

  background-color: ${({ theme }) => theme.colors.additionalColors.shape.main};
  margin-top: 48px;
`

export const Photo = styled.Image`
  width: 160px;
  height: 160px;
  border-radius: 80px;
`

export const PhotoButton = styled(RectButton)`
  width: 40px;
  height: 40px;

  background-color: ${({ theme }) => theme.colors.primary.main};

  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 10px;
  right: 10px;
`

export const Content = styled.View`
  flex: 1;

  padding: 0 24px;
  margin-top: 80px;
`

export const Options = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.fonts.colors.line};

  flex-direction: row;
  justify-content: space-around;

  margin-bottom: 24px;
`

interface OptionProps {
  active?: boolean
}

export const Option = styled.View<OptionProps>`
  ${({ active, theme }) =>
    active &&
    css`
      border-bottom-width: 3px;
      border-bottom-color: ${theme.colors.primary.main};
    `}
`

export const OptionTitle = styled.Text<OptionProps>`
  font-size: ${RFValue(24)}px;
  font-family: ${({ theme, active }) =>
    active ? theme.fonts.secondary[600] : theme.fonts.secondary[500]};

  color: ${({ theme, active }) =>
    active ? theme.colors.additionalColors.header : theme.fonts.colors.detail};
`

export const Section = styled.View``
