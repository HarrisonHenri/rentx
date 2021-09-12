import { RectButton } from 'react-native-gesture-handler'
import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) =>
    theme.colors.additionalColors.background.primary};
`
export const Header = styled.View`
  width: 100%;
  height: 112px;

  background-color: ${({ theme }) => theme.colors.additionalColors.header};
  justify-content: flex-end;
  padding: 32px 24px;
`

export const HeaderContent = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const TotalCars = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.primary[400]};
  color: ${({ theme }) => theme.fonts.colors.text};
`

export const CarList = styled.FlatList.attrs({
  contentContainerStyle: { padding: 24 },
  showsVerticalScrollIndicator: false,
})``

export const UserRentals = styled(RectButton)`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.primary.main};
  position: absolute;
  bottom: 8px;
  right: 8px;
`
