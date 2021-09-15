import React, { useRef, useState } from 'react'
import { ViewToken } from 'react-native'

import { FlatList } from 'react-native-gesture-handler'

import { BulletPoint } from '../BulletPoint'
import { Container, ImageIndexes, CarImageWrapper, CarImage } from './styles'

interface Props {
  imagesUrl: string[]
}

interface ChangeImageInfo {
  viewableItems: ViewToken[]
}

const ImageSlider: React.FC<Props> = ({ imagesUrl }) => {
  const [activeIndex, setActiveIndex] = useState(0)

  const hadleImageChange = useRef((info: ChangeImageInfo) => {
    setActiveIndex(info.viewableItems[0].index as number)
  })

  return (
    <Container>
      <ImageIndexes>
        {imagesUrl.map((_, index) => (
          <BulletPoint key={String(index)} active={index === activeIndex} />
        ))}
      </ImageIndexes>

      <FlatList
        data={imagesUrl}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <CarImageWrapper>
            <CarImage source={{ uri: item }} resizeMode="contain" />
          </CarImageWrapper>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={hadleImageChange.current}
      />
    </Container>
  )
}

export { ImageSlider }
