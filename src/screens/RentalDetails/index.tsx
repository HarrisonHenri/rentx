import React, { useCallback, useState } from 'react'
import { Alert } from 'react-native'

import { Feather } from '@expo/vector-icons'
import { useNavigation, useRoute } from '@react-navigation/native'
import { RFValue } from 'react-native-responsive-fontsize'
import { useTheme } from 'styled-components'

import { Accessory } from '../../components/Accessory'
import { BackButton } from '../../components/BackButton'
import { Button } from '../../components/Button'
import { ImageSlider } from '../../components/ImageSlider'
import { config } from '../../config/config'
import {
  RootParams,
  StackNavigationProps,
} from '../../routes/stack.routes.model'
import { api } from '../../services/api'
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
  DateInfo,
  DateTitle,
  DateValue,
  RentalPeriod,
  CalendarIcon,
  Accessories,
  Footer,
  RentalPrice,
  RentalPriceLabel,
  RentalPriceDetails,
  RentalPriceQuota,
  RentalPriceTotal,
} from './styles'

const RentalDetails: React.FC = () => {
  const theme = useTheme()
  const route = useRoute<RootParams<'RentalDetails'>>()
  const { car, rentalPeriod, dailys, expectedReturnDate } = route.params
  const rentTotal = Number(car.daily_rate) * dailys
  const [loading, setLoading] = useState(false)

  const carImages = car.images.map(
    ({ image_name }) => `${config.API_URL}/${image_name}`,
  )

  const { navigate, goBack } = useNavigation<StackNavigationProps>()

  const handleRentalComplete = useCallback(async () => {
    setLoading(true)
    try {
      await api.post('/rentals', {
        car_id: car.id,
        expected_return_date: new Date(expectedReturnDate),
      })

      navigate('Confirmation', {
        title: 'Carro alugado!',
        message:
          'Agora você só precisa ir\naté a concessionária da RENTX\npegar o seu automóvel.',
        nextScreen: 'Home',
      })
    } catch {
      setLoading(false)
      Alert.alert('Ocorreu um erro ao agendar o seu aluguel. Tente novamente.')
    }
  }, [navigate, car, expectedReturnDate])

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

        <RentalPeriod>
          <CalendarIcon>
            <Feather
              name="calendar"
              size={RFValue(24)}
              color={theme.colors.additionalColors.shape.main}
            />
          </CalendarIcon>

          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue>{rentalPeriod.startFormatted}</DateValue>
          </DateInfo>

          <Feather
            name="chevron-right"
            size={RFValue(12)}
            color={theme.fonts.colors.text}
          />

          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue>{rentalPeriod.endFormatted}</DateValue>
          </DateInfo>
        </RentalPeriod>

        <RentalPrice>
          <RentalPriceLabel>TOTAL</RentalPriceLabel>
          <RentalPriceDetails>
            <RentalPriceQuota>{`R$ ${car.daily_rate} x${dailys} diárias`}</RentalPriceQuota>
            <RentalPriceTotal>{`R$ ${rentTotal}`}</RentalPriceTotal>
          </RentalPriceDetails>
        </RentalPrice>
      </Content>

      <Footer>
        <Button
          title="Alugar"
          color={theme.colors.additionalColors.success}
          onPress={handleRentalComplete}
          enabled={!loading}
          loading={loading}
        />
      </Footer>
    </Container>
  )
}

export { RentalDetails }
