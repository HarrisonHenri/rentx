import { Dimensions } from 'react-native'

import styled from 'styled-components/native'

export const Container = styled.View`
  width: 100%;
`
export const ImageIndexes = styled.View`
  flex-direction: row;
  padding-right: 24px;
  align-self: flex-end;
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
