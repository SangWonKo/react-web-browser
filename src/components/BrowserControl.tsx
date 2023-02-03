import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
  ReloadOutlined,
} from '@ant-design/icons'
import useBrowserTab from '@hooks/useBrowserTab'
import { Button } from 'antd'
import styled from 'styled-components'
import Input from './Input'

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

const BrowserControl = () => {
  const { browserTab, inputRef, handleSubmit } = useBrowserTab()
  return (
    <ControlSection onSubmit={handleSubmit}>
      <IconButton
        type="text"
        shape="circle"
        icon={<ArrowLeftOutlined />}
        onClick={() => history.back()}
      />
      <IconButton
        type="text"
        shape="circle"
        icon={<ArrowRightOutlined />}
        onClick={() => history.forward()}
      />
      <IconButton
        type="text"
        shape="circle"
        icon={<ReloadOutlined />}
        onClick={() => document.location.reload()}
      />
      <Input ref={inputRef} variant="square" defaultValue={browserTab.src} />
    </ControlSection>
  )
}

export default BrowserControl
