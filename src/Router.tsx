import { theme } from '@styles/DefaultTheme'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

const Router = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<>root</>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default Router
