import React from 'react'

import { Feather } from '@expo/vector-icons'
import {
  Calendar as CustomCalendar,
  LocaleConfig,
} from 'react-native-calendars'
import { useTheme } from 'styled-components'

LocaleConfig.locales['pt-br'] = {
  monthNames: [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ],
  monthNamesShort: [
    'Jan',
    'Fev',
    'Mar',
    'Abr',
    'Mai',
    'Jun',
    'Jul',
    'Ago',
    'Set',
    'Out',
    'Nov',
    'Dez',
  ],
  dayNames: [
    'Domingo',
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sábado',
  ],
  dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Se', 'Sáb'],
  today: 'Hoje',
}

LocaleConfig.defaultLocale = 'pt-br'

const Calendar: React.FC = () => {
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
    />
  )
}

export { Calendar }
