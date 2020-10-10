import {createBreakpoint} from 'styled-components-breakpoint';
export default {
    colors: {
      red: '#B02834',
    },
    font: {
      family: 'myriad-pro'
    },
    breakpoint: createBreakpoint({
      xs: 0,
      sm: 300,
      md: 600,
      lg: 900,
      xl: 1200
    })
  }
