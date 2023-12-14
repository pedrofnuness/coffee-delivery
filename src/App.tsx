import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import Header from './components/Header'

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <div>
        <Header />
        <h1>Coffee Shop</h1>
      </div>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
