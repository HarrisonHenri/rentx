import { Dimensions } from 'react-native'

import styled from 'styled-components/native'

interface ImageIndexProps {
  active: boolean
}

export const Container = styled.View`
  width: 100%;
`
export const ImageIndexes = styled.View`
  flex-direction: row;
  padding-right: 24px;
  align-self: flex-end;
`

export const ImageIndex = styled.View<ImageIndexProps>`
  width: 8px;
  height: 8px;

  background-color: ${({ theme, active }) =>
    active
      ? theme.fonts.colors.title
      : theme.colors.additionalColors.shape.main};

  margin-left: 8px;
  border-radius: 4px;
`

export const CarImageWrapper = styled.View`
  width: ${Dimensions.get('window').width}px;
  height: 136px;

  justify-content: center;
  align-items: center;
`

export const CarImage = styled.Image`
  width: 280px;
  height: 136px;
`
