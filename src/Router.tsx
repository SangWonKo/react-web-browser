import MainLayout from '@layouts/MainLayout'
import BrowserPage from '@pages/BrowserPage'
import { theme } from '@styles/DefaultTheme'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

const Router = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Navigate to="/tab1" />} />
            <Route path=":tab" element={<BrowserPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default Router
