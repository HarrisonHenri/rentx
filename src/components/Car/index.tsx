import React from 'react'

import { RectButtonProps } from 'react-native-gesture-handler'

import { config } from '../../config/config'
import { CarDTO } from '../../dtos/CarDTO'
import { getAccessoryIcon } from '../../utils/getAccessoryIcon'
import {
  Container,
  Details,
  Brand,
  Name,
  About,
  Rent,
  Price,
  CarImage,
  Type,
} from './styles'

interface Props extends RectButtonProps {
  data: CarDTO
}

const Car: React.FC<Props> = ({ data, ...rest }) => {
  const motor =
    data.specifications?.find(
      specification =>
        specification.description === 'eletric_motor' ||
        specification.description === 'gasoline_motor' ||
        specification.description === 'hybrid_motor',
    )?.description ?? 'eletric_motor'

  const MotorIcon = getAccessoryIcon(motor)

  const thumbUri = `${config.API_URL}/${data.images[0].image_name}`

  return (
    <Container {...rest}>
      <Details>
        <Brand>{data.brand}</Brand>
        <Name>{data.name}</Name>

        <About>
          <Rent>
            <Price>{`R$ ${data.daily_rate}`}</Price>
          </Rent>

          <Type>
            <MotorIcon />
          </Type>
        </About>
      </Details>
      <CarImage
        source={{
          uri: thumbUri,
        }}
        resizeMode="contain"
      />
    </Container>
  )
}

export { Car }
