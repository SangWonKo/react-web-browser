import 'styled-components'
import { ITheme } from './DefaultTheme'

declare module 'styled-components' {
  export interface DefaultTheme extends ITheme {}
}
