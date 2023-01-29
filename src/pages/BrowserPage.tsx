import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
  ReloadOutlined,
} from '@ant-design/icons'
import InitialView from '@components/InitialView'
import { Button, Input } from 'antd'
import { useState } from 'react'
import { useRef } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.section``
const ControlSection = styled.div`
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
  const { tab } = useParams()
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const [iframeSrc, setIframeSrc] = useState('')

  return (
    <Container>
      <ControlSection>
        <IconButton type="text" shape="circle" icon={<ArrowLeftOutlined />} />
        <IconButton type="text" shape="circle" icon={<ArrowRightOutlined />} />
        <IconButton type="text" shape="circle" icon={<ReloadOutlined />} />
        <StyledInput />
      </ControlSection>
      {/* {tab} */}
      {iframeSrc ? (
        <IframeBrowser
          src={'https://www.google.com/webhp?igu=1'}
          ref={iframeRef}
          id="frame"
        />
      ) : (
        <InitialView />
      )}
    </Container>
  )
}

export default BrowserPage
