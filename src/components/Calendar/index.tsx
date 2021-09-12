import React from 'react'

import { Feather } from '@expo/vector-icons'
import {
  Calendar as CustomCalendar,
  DateCallbackHandler,
  LocaleConfig,
} from 'react-native-calendars'
import { useTheme } from 'styled-components'

import { MarkedDateDTO } from '../../dtos/MarkedDateDTO'
import { ptBR } from './localeConfig'

LocaleConfig.locales['pt-br'] = ptBR

LocaleConfig.defaultLocale = 'pt-br'

interface Props {
  markedDates: MarkedDateDTO
  onDayPress: DateCallbackHandler
}

const Calendar: React.FC<Props> = ({ onDayPress, markedDates }) => {
  const theme = useTheme()

  return (
    <CustomCalendar
      renderArrow={direction => (
        <Feather
          size={24}
          color={theme.fonts.colors.text}
          name={direction === 'left' ? 'chevron-left' : 'chevron-right'}
        />
      )}
      headerStyle={{
        backgroundColor: theme.colors.additionalColors.background.secondary,
        borderBottomWidth: 0.5,
        borderBottomColor: theme.fonts.colors.detail,
        paddingBottom: 10,
        marginBottom: 10,
      }}
      theme={{
        textDayFontFamily: theme.fonts.primary[400],
        textDayHeaderFontFamily: theme.fonts.primary[500],
        textDayHeaderFontSize: 10,
        textMonthFontSize: 20,
        textMonthFontFamily: theme.fonts.secondary[600],
        monthTextColor: theme.fonts.colors.title,
        arrowStyle: {
          marginHorizontal: -16,
        },
      }}
      firstDay={1}
      minDate={new Date()}
      markingType="period"
      markedDates={markedDates}
      onDayPress={onDayPress}
    />
  )
}

export { Calendar }
