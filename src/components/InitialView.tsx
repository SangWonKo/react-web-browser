import { LinkOutlined } from '@ant-design/icons'
import useBrowserTab from '@hooks/useBrowserTab'
import { historyState } from '@store/atom'
import { Avatar, Col, Input, Row } from 'antd'
import { useRecoilValue } from 'recoil'
import styled from 'styled-components'

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

const StyledInput = styled(Input)`
  width: 100%;
  border-radius: 20px;
  padding: 7px 14px;
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
`

const InitialView = () => {
  const { urlInputVal, setUrlInputVal, handleSubmit, handleChangeUrl } =
    useBrowserTab()
  const history = useRecoilValue(historyState)
  return (
    <Container>
      <Wrapper>
        <Title>React Web Browser</Title>
        <Form onSubmit={handleSubmit}>
          <StyledInput
            size="large"
            placeholder="Search..."
            value={urlInputVal}
            onChange={(e) => setUrlInputVal(e.target.value)}
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
