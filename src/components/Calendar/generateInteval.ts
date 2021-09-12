import { eachDayOfInterval, format } from 'date-fns'
import { DateObject } from 'react-native-calendars'

import { MarkedDateDTO } from '../../dtos/MarkedDateDTO'
import { theme } from '../../styles/theme'
import { getPlatformDate } from '../../utils/getPlatformDate'

export const generateInteval = (
  start: DateObject,
  end: DateObject,
): MarkedDateDTO => {
  let interval: MarkedDateDTO = {}

  eachDayOfInterval({
    start: new Date(start.timestamp),
    end: new Date(end.timestamp),
  }).forEach(item => {
    const date = format(getPlatformDate(item), 'yyyy-MM-dd')
    const isStartOrEnd = start.dateString === date || end.dateString === date

    interval = {
      ...interval,
      [date]: {
        color: isStartOrEnd
          ? theme.colors.primary.main
          : theme.colors.primary.light,
        textColor: isStartOrEnd
          ? theme.colors.primary.light
          : theme.colors.primary.main,
      },
    }
  })

  return interval
}
