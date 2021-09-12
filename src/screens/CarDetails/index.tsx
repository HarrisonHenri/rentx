import React, { useCallback } from 'react'

import { useNavigation, useRoute } from '@react-navigation/native'

import { Accessory } from '../../components/Accessory'
import { BackButton } from '../../components/BackButton'
import { Button } from '../../components/Button'
import { ImageSlider } from '../../components/ImageSlider'
import { config } from '../../config/config'
import {
  RootParams,
  StackNavigationProps,
} from '../../routes/stack.routes.model'
import { getAccessoryIcon } from '../../utils/getAccessoryIcon'
import {
  Container,
  Header,
  CarImages,
  Content,
  Details,
  Description,
  Brand,
  Name,
  Rent,
  Price,
  About,
  Accessories,
  Footer,
} from './styles'

const CarDetails: React.FC = () => {
  const { navigate, goBack } = useNavigation<StackNavigationProps>()
  const route = useRoute<RootParams<'CarDetails'>>()
  const { car } = route.params
  const carImages = car.images.map(
    ({ image_name }) => `${config.API_URL}/${image_name}`,
  )

  const handleRentalNav = useCallback(() => {
    navigate('Rental', { car })
  }, [navigate, car])

  const handleGoBack = useCallback(() => {
    goBack()
  }, [goBack])

  return (
    <Container>
      <Header>
        <BackButton onPress={handleGoBack} />
      </Header>

      <CarImages>
        <ImageSlider imagesUrl={carImages} />
      </CarImages>

      <Content>
        <Details>
          <Description>
            <Brand>{car.brand}</Brand>
            <Name>{car.name}</Name>
          </Description>

          <Rent>
            <Price>{`R$ ${car.daily_rate}`}</Price>
          </Rent>
        </Details>

        <Accessories>
          {car?.specifications?.map(({ id, name, description }) => (
            <Accessory
              key={id}
              name={name}
              icon={getAccessoryIcon(description)}
            />
          ))}
        </Accessories>

        <About>{car.description}</About>
      </Content>
      <Footer>
        <Button title="Agende seu aluguel" onPress={handleRentalNav} />
      </Footer>
    </Container>
  )
}

export { CarDetails }
