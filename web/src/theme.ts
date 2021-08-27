import { extendTheme } from '@chakra-ui/react'
import { mode, createBreakpoints } from '@chakra-ui/theme-tools'

export const theme = extendTheme({
  fonts: {
    heading: '"Fira Code", monospace',
    body: '"Fira Code", monospace',
  },
  styles: {
    global: (props) => ({
      body: {
        bg: mode('white', 'black')(props),
      },
    }),
  },
  layout: {
    navigatorWidth: 280,
    asideWidth: 280,
  },
  breakpoints: createBreakpoints({
    sm: '30em',
    md: '48em',
    lg: '62em',
    xl: '75em',
    '2xl': '96em',
  }),
})
