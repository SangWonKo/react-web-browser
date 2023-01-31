import { browserTabIdState } from '@store/atom'
import { Layout, Tabs } from 'antd'
import { KeyboardEvent, MouseEvent, useEffect, useRef } from 'react'
import { Outlet, useNavigate, useParams } from 'react-router-dom'
import { useRecoilState } from 'recoil'
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
  const [tabIds, setTabIds] = useRecoilState(browserTabIdState)
  const newTabIndex = useRef(2)

  const handleEdit = (
    targetKey: MouseEvent | KeyboardEvent | string,
    action: 'add' | 'remove'
  ) => {
    if (action === 'add') {
      const newTab = `tab${newTabIndex.current++}`
      setTabIds((prev) => [...prev, newTab])
      navigate(newTab)
    } else {
      const newTabs = tabIds.filter((tabId) => tabId !== targetKey)
      setTabIds(newTabs)
      navigate(newTabs[newTabs.length - 1])
    }
  }

  useEffect(() => {
    if (!tab) return

    if (!tabIds.includes(tab)) {
      navigate(tabIds[tabIds.length - 1])
    }
  }, [tab, tabIds, navigate])

  return (
    <StyledLayout>
      <Content>
        <StyledTabs
          type="editable-card"
          onChange={(path) => navigate(`${path}`)}
          onEdit={handleEdit}
          activeKey={tab}
          items={tabIds.map((tabId) => ({
            label: tabId,
            key: tabId,
            children: <Outlet />,
          }))}
          destroyInactiveTabPane
        />
      </Content>
    </StyledLayout>
  )
}

export default MainLayout
