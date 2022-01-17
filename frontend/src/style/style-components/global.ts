import { createGlobalStyle } from 'styled-components'

export const lightTheme = {
  background: '#fff',
  color1: '#f6f6f6',
}
export const darkTheme = {
  background: '#fff',
  color1: '#f6f6f6',
}

interface Theme {
  background: string
}
export const GlobalStyles = createGlobalStyle<{ theme: Theme }>`
body{
    background:${({ theme }) => theme.background} ;
    font-family: 'Rey' !important;
    overflow-x: hidden;
}
`
