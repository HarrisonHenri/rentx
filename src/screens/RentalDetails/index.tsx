import React, { useCallback } from 'react'

import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { RFValue } from 'react-native-responsive-fontsize'
import { useTheme } from 'styled-components'

import AccelerationSvg from '../../assets/acceleration.svg'
import ExchangeSvg from '../../assets/exchange.svg'
import ForceSvg from '../../assets/force.svg'
import GasolineSvg from '../../assets/gasoline.svg'
import PeopleSvg from '../../assets/people.svg'
import SpeedSvg from '../../assets/speed.svg'
import { Accessory } from '../../components/Accessory'
import { BackButton } from '../../components/BackButton'
import { Button } from '../../components/Button'
import { ImageSlider } from '../../components/ImageSlider'
import { StackNavigationProps } from '../../routes/stack.routes.model'
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
  Period,
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

  const { navigate } = useNavigation<StackNavigationProps>()

  const handleRentalCompleteNav = useCallback(() => {
    navigate({ name: 'RentalComplete' as never, params: {} as never })
  }, [navigate])

  return (
    <Container>
      <Header>
        <BackButton onPress={() => {}} />
      </Header>

      <CarImages>
        <ImageSlider
          imagesUrl={[
            'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFBQWFRcYGBgaGBkWGhocGhocHBUcGRoZGRgcHCEhJC4lHCQrJBgaJjonKy8xNTU1HCU7QDs0Py40NTEBDAwMDw8PGA8PETEdGB00NDQxNDExMTExMTExMTExMTExMTExMTExMTQxMTExMTExMTExMTE/MTExMTExNDExMf/AABEIAMIBBAMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABQIDBAYHCAH/xABCEAACAQIEAwQHBQUHBAMAAAABAgADEQQFEiExQVEGImFxBxMygZGhsRRCcoLBI1KywtFDYpKi0uHwRFNzgxUXM//EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDs0REBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQERIPMe0tGkzIpNWouzIljoO2zsSFQ7g6SdRHAGBORNCq9rcUxIRKKHgPbrHw/7fwmDj8wzDTd6z0weGimqX8tWowOlyhnA4kD3zkDJiqntYrEHrun6JMDELoJD4yorcwalPUPy6bwO1HFIOLr/AIhPn2yn++n+Jf6zhT5uicMZiW8rH6oJjt2nqXCpWxDMdgCqHUeQ2cQO/LiUPB1Pkwl6cNXE4p1vVxBRdwdIFyeJVeZIBF9wouLkXF/iEj2XxJ/vDEMn+UBgPjA7pE4pgs7xKmyVsUNyBeqK243tpdByN+PI9JNYTt1iaZAqFKgHHWhpufI0y6/FRA6jE1nKO2eHraVY+qc7AMVKMeiupKk+BIPhNlgfYiICIiAiIgIiICIiAiIgIiICIiAiUk23Mx2x9MfeB/D3vpeBlSMzrOqGFQPWa1zpRQCWqMeCoo3Zj0Ejc87QVEpn7JQevVOyhitNFPVi5UkDoBvwuOI0pKOLDtWbDVq2IYWas9TCgoDxSkgqkUl47Dc8yYEpmGa4nEmz68PSbZcOjft6m+3rXU9wEfcTfexblMzA9n+6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',
          ]}
        />
      </CarImages>

      <Content>
        <Details>
          <Description>
            <Brand>Lamborghini</Brand>
            <Name>Huracan</Name>
          </Description>

          <Rent>
            <Period>Ao dia</Period>
            <Price>R$ 580</Price>
          </Rent>
        </Details>

        <Accessories>
          <Accessory name="380 km/h" icon={SpeedSvg} />
          <Accessory name="3.2 s" icon={AccelerationSvg} />
          <Accessory name="800 HP" icon={ForceSvg} />
          <Accessory name="Gasolina" icon={GasolineSvg} />
          <Accessory name="Auto" icon={ExchangeSvg} />
          <Accessory name="2 pessoas" icon={PeopleSvg} />
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
            <DateValue>18/06/2021</DateValue>
          </DateInfo>

          <Feather
            name="chevron-right"
            size={RFValue(12)}
            color={theme.fonts.colors.text}
          />

          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue>18/06/2021</DateValue>
          </DateInfo>
        </RentalPeriod>

        <RentalPrice>
          <RentalPriceLabel>TOTAL</RentalPriceLabel>
          <RentalPriceDetails>
            <RentalPriceQuota>R$ 580 x3 diárias</RentalPriceQuota>
            <RentalPriceTotal>R$ 2.900</RentalPriceTotal>
          </RentalPriceDetails>
        </RentalPrice>
      </Content>

      <Footer>
        <Button
          title="Alugar"
          color={theme.colors.additionalColors.success}
          onPress={handleRentalCompleteNav}
        />
      </Footer>
    </Container>
  )
}

export { RentalDetails }
