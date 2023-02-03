import { LinkOutlined } from '@ant-design/icons'
import useBrowserTab from '@hooks/useBrowserTab'
import { historyState } from '@store/atom'
import { Avatar, Col, Row } from 'antd'
import { useRecoilValue } from 'recoil'
import styled from 'styled-components'
import Input from './Input'

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px;
  background-color: ${(props) => props.theme.palette.gray.light};
  color: white;
  height: calc(100vh - 94px);
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 560px;
  width: 100%;
`

const Title = styled.h1`
  font-size: 56px;
`

const Form = styled.form`
  width: 100%;
`

const GridRow = styled(Row)`
  width: 100%;
  margin: 24px;
`

const GridCol = styled(Col)`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  padding: 8px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`

const Typo = styled.p`
  width: 100%;
  word-break: break-all;
  margin-top: 8px;
  text-align: center;
`

const InitialView = () => {
  const { inputRef, handleSubmit, handleChangeUrl } = useBrowserTab()
  const history = useRecoilValue(historyState)
  return (
    <Container>
      <Wrapper>
        <Title>React Web Browser</Title>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Search..."
            sizeVariant="large"
            ref={inputRef}
          />
        </Form>

        <GridRow gutter={[16, 8]}>
          {history.map((url, idx) => (
            <GridCol key={idx} span={6} onClick={() => handleChangeUrl(url)}>
              <Avatar size="large" icon={<LinkOutlined />} />
              <Typo>{url}</Typo>
            </GridCol>
          ))}
        </GridRow>
      </Wrapper>
    </Container>
  )
}

export default InitialView
