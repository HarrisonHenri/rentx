import { SvgProps } from 'react-native-svg'

import AccelerationSvg from '../assets/acceleration.svg'
import CarSvg from '../assets/car.svg'
import EletricSvg from '../assets/energy.svg'
import ExchangeSvg from '../assets/exchange.svg'
import ForceSvg from '../assets/force.svg'
import GasolineSvg from '../assets/gasoline.svg'
import HybridSvg from '../assets/hybrid.svg'
import PeopleSvg from '../assets/people.svg'
import SpeedSvg from '../assets/speed.svg'

export const getAccessoryIcon = (description: string): React.FC<SvgProps> => {
  switch (description) {
    case 'speed':
      return SpeedSvg
    case 'seats':
      return PeopleSvg
    case 'hybrid_motor':
      return HybridSvg
    case 'gasoline_motor':
      return GasolineSvg
    case 'eletric_motor':
      return EletricSvg
    case 'acceleration':
      return AccelerationSvg
    case 'exchange':
      return ExchangeSvg
    case 'turning_diameter':
      return ForceSvg
    default:
      return CarSvg
  }
}
