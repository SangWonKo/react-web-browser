import BrowserTabs from '@components/BrowserTabs'
import { browserTabIdState } from '@store/atom'
import { Layout } from 'antd'
import { KeyboardEvent, MouseEvent, useEffect, useRef } from 'react'
import { Outlet, useNavigate, useParams } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import styled from 'styled-components'

const StyledLayout = styled(Layout)`
  height: 100vh;
  background: white;
  min-width: 640px;
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
        <BrowserTabs
          activeKey={tab}
          items={tabIds.map((tabId) => ({
            label: tabId,
            key: tabId,
            children: <Outlet />,
            closable: tabIds.length > 1,
          }))}
          onEdit={handleEdit}
        />
      </Content>
    </StyledLayout>
  )
}

export default MainLayout
