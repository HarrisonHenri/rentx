import React, { useCallback, useState } from 'react'
import { Alert, StatusBar } from 'react-native'

import { useNavigation, useRoute } from '@react-navigation/native'
import { format } from 'date-fns'
import { DateObject } from 'react-native-calendars'
import { useTheme } from 'styled-components'

import ArrowSvg from '../../assets/arrow.svg'
import { BackButton } from '../../components/BackButton'
import { Button } from '../../components/Button'
import { Calendar } from '../../components/Calendar'
import { generateInteval } from '../../components/Calendar/generateInteval'
import { MarkedDateDTO } from '../../dtos/MarkedDateDTO'
import { RentalPeriodDTO } from '../../dtos/RentalPeriodDTO'
import {
  RootParams,
  StackNavigationProps,
} from '../../routes/stack.routes.model'
import { getPlatformDate } from '../../utils/getPlatformDate'
import {
  Container,
  Header,
  Title,
  RentalPeriod,
  DateInfo,
  DateTitle,
  DateValue,
  Content,
  Footer,
} from './styles'

const Rental: React.FC = () => {
  const [lastSelectedDate, setLastSelectedDate] = useState<DateObject>(
    {} as DateObject,
  )
  const [markedDates, setMarkedDates] = useState<MarkedDateDTO>(
    {} as MarkedDateDTO,
  )
  const [rentalPeriod, setRentalPeriod] = useState<RentalPeriodDTO>(
    {} as RentalPeriodDTO,
  )
  const theme = useTheme()
  const route = useRoute<RootParams<'CarDetails'>>()
  const { car } = route.params
  const { navigate, goBack } = useNavigation<StackNavigationProps>()

  const handleRentalDetailsNav = useCallback(() => {
    if (!rentalPeriod.startFormatted || !rentalPeriod.endFormatted) {
      Alert.alert('Selecione o período de aluguel')
    } else {
      const dates = Object.keys(markedDates)
      const dailys = dates.length
      const expectedReturnDate = dates[dailys - 1]
      navigate('RentalDetails', {
        car,
        dailys,
        expectedReturnDate,
        rentalPeriod,
      })
    }
  }, [navigate, car, markedDates, rentalPeriod])

  const handleGoBack = useCallback(() => {
    goBack()
  }, [goBack])

  const handleChangeDate = useCallback(
    (date: DateObject) => {
      let start = !lastSelectedDate.timestamp ? date : lastSelectedDate
      let end = date

      if (start.timestamp > end.timestamp) {
        start = end
        end = date
      }

      setLastSelectedDate(end)
      setMarkedDates(generateInteval(start, end))
      setRentalPeriod({
        startFormatted: format(
          getPlatformDate(new Date(start.timestamp)),
          'dd/MM/yyyy',
        ),
        endFormatted: format(
          getPlatformDate(new Date(end.timestamp)),
          'dd/MM/yyyy',
        ),
      })
    },
    [lastSelectedDate],
  )

  return (
    <Container>
      <Header>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        <BackButton
          onPress={handleGoBack}
          color={theme.colors.additionalColors.shape.main}
        />

        <Title>
          Escolha uma{'\n'}data de início e{'\n'}fim do aluguel
        </Title>

        <RentalPeriod>
          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue selected={Boolean(rentalPeriod.startFormatted)}>
              {rentalPeriod.startFormatted}
            </DateValue>
          </DateInfo>

          <ArrowSvg />

          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue selected={Boolean(rentalPeriod.endFormatted)}>
              {rentalPeriod.endFormatted}
            </DateValue>
          </DateInfo>
        </RentalPeriod>
      </Header>

      <Content>
        <Calendar markedDates={markedDates} onDayPress={handleChangeDate} />
      </Content>

      <Footer>
        <Button
          title="Confirmar"
          onPress={handleRentalDetailsNav}
          enabled={Boolean(rentalPeriod.startFormatted)}
        />
      </Footer>
    </Container>
  )
}

export { Rental }
