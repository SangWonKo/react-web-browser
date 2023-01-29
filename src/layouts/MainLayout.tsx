import { Layout, Tabs } from 'antd'
import { Outlet, useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components'

const StyledLayout = styled(Layout)`
  height: 100vh;
  background: white;
`

const StyledTabs = styled(Tabs)`
  .ant-tabs-nav {
    margin: 0;
    &::before {
      border: none;
    }
  }
  .ant-tabs-nav-list {
    width: 100%;
    padding: 8px 8px 0;
    background-color: ${(props) => props.theme.palette.dark};
    color: white;
    outline: none;

    .ant-tabs-tab {
      background-color: ${(props) => props.theme.palette.dark};
      border: none;
      .ant-tabs-tab-btn {
        color: white;
      }
    }
    .ant-tabs-tab-active {
      background-color: ${(props) => props.theme.palette.gray.main};
      border: none;
    }

    .ant-tabs-tab-remove {
      color: white;
      border-radius: 12px;
      padding: 1px 5px;
      &:hover {
        background-color: ${(props) => props.theme.palette.gray.light};
      }
      &:focus {
        color: white;
      }
    }

    .ant-tabs-nav-add {
      margin-left: auto;
      color: white;
      &:hover {
        background-color: ${(props) => props.theme.palette.gray.main};
        color: white;
      }
      &:focus:not(:focus-visible) {
        color: white;
      }
    }
  }
`

const { Content } = StyledLayout

const MainLayout = () => {
  const navigate = useNavigate()
  const { tab } = useParams()

  return (
    <StyledLayout>
      <Content>
        <StyledTabs
          type="editable-card"
          onChange={(path) => navigate(`${path}`)}
          activeKey={tab}
          items={[
            { label: 'tab1', key: 'tab1', children: <Outlet /> },
            { label: 'tab2', key: 'tab2', children: <Outlet /> },
          ]}
          destroyInactiveTabPane
        />
      </Content>
    </StyledLayout>
  )
}

export default MainLayout
