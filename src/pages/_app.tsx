import React from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'
import reduxStore from '../redux/store'
import { createWrapper } from 'next-redux-wrapper'

// Styles
import GlobalStyle from '../styles/global'
import theme from '../styles/theme'

// Components
import TopBar from '../../Components/TopBar/TopBar'
import Header from '../../Components/Header/Header'

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <Provider store={reduxStore}>
      <ThemeProvider theme={theme}>
        <TopBar />
        <Header />
        <Component {...pageProps} />
        <GlobalStyle />
      </ThemeProvider>
    </Provider>
  )
}

const wrapper = createWrapper(() => reduxStore)
export default wrapper.withRedux(MyApp)
