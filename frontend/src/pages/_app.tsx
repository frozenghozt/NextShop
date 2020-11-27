import React from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import withData from '../../lib/apollo'

// Styles
import GlobalStyle from '../styles/global'
import theme from '../styles/theme'

// Components
import TopBar from '../../Components/TopBar/TopBar'
import Header from '../../Components/Header/Header'

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <TopBar />
      <Header />
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default withData(MyApp)
