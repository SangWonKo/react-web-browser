import { LinkOutlined } from '@ant-design/icons'
import useBrowserTab from '@hooks/useBrowserTab'
import { Avatar, Col, Input, Row } from 'antd'
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

const InitialView = () => {
  const { urlInputVal, setUrlInputVal, handleSubmit } = useBrowserTab()

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
          {visitedList.map((item) => (
            <GridCol key={item.id} span={6}>
              <Avatar
                size="large"
                icon={<LinkOutlined />}
                style={{ marginBottom: '8px' }}
              />
              {item.label}
            </GridCol>
          ))}
        </GridRow>
      </Wrapper>
    </Container>
  )
}

export default InitialView

const visitedList = [
  { id: 1, label: 'page1', value: 'https://www.bing.com' },
  { id: 2, label: 'page2', value: 'https://www.bing.com' },
  { id: 3, label: 'page3', value: 'https://www.bing.com' },
  { id: 4, label: 'page4', value: 'https://www.bing.com' },
  { id: 5, label: 'page5', value: 'https://www.bing.com' },
]
