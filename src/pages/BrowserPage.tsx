import BrowserControl from '@components/BrowserControl'
import InitialView from '@components/InitialView'
import useBrowserTab from '@hooks/useBrowserTab'
import styled from 'styled-components'

const Container = styled.section``

const IframeBrowser = styled.iframe`
  width: 100%;
  height: 100vh;
  border: none;
`

const BrowserPage = () => {
  const { browserTab } = useBrowserTab()

  return (
    <Container>
      <BrowserControl />

      {browserTab && browserTab.src ? (
        <IframeBrowser src={browserTab.src} />
      ) : (
        <InitialView />
      )}
    </Container>
  )
}

export default BrowserPage
