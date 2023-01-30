import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
  ReloadOutlined,
} from '@ant-design/icons'
import InitialView from '@components/InitialView'
import useBrowserTab from '@hooks/useBrowserTab'
import { Button, Input } from 'antd'
import { useRef } from 'react'
import styled from 'styled-components'

const Container = styled.section``
const ControlSection = styled.form`
  padding: 8px;
  background-color: ${(props) => props.theme.palette.gray.main};
  color: white;
  display: flex;
  align-items: center;
`

const IconButton = styled(Button)`
  color: white;
  margin: 0 2px;
  &:not(:disabled):hover {
    color: white;
    background-color: ${(props) => props.theme.palette.gray.light};
  }
`

const StyledInput = styled(Input)`
  margin-left: 4px;
`

const IframeBrowser = styled.iframe`
  width: 100%;
  height: 100vh;
  border: none;
`

const BrowserPage = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null)

  const { urlInputVal, setUrlInputVal, activeTab, handleSubmit } =
    useBrowserTab()

  return (
    <Container>
      <ControlSection onSubmit={handleSubmit}>
        <IconButton type="text" shape="circle" icon={<ArrowLeftOutlined />} />
        <IconButton type="text" shape="circle" icon={<ArrowRightOutlined />} />
        <IconButton type="text" shape="circle" icon={<ReloadOutlined />} />
        <StyledInput
          value={urlInputVal}
          onChange={(e) => setUrlInputVal(e.target.value)}
        />
      </ControlSection>
      {/* {tab} */}
      {activeTab && activeTab.src ? (
        <IframeBrowser src={activeTab.src} ref={iframeRef} id="frame" />
      ) : (
        <InitialView />
      )}
    </Container>
  )
}

export default BrowserPage
