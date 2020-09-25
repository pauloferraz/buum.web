import 'styled-components'
declare module 'styled-components' {
  export interface DefaultTheme {
    title: string
    colors: {
      primary: string
      secondary: string
      accent_1: string
      accent_2: string
      white: string
      black: string
      grey: string
    }
  }
}
