import { Tabs, TabsProps } from 'antd'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

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
  .ant-tabs-nav-operations {
    padding: 8px 8px 0;
    background-color: ${(props) => props.theme.palette.dark};
    color: white;

    .ant-tabs-nav-add {
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

interface BrowserTabsProps {
  items?: TabsProps['items']
  activeKey?: string
  onEdit?: (
    e: React.MouseEvent | React.KeyboardEvent | string,
    action: 'add' | 'remove'
  ) => void
}
const BrowserTabs = ({ items, activeKey, onEdit }: BrowserTabsProps) => {
  const navigate = useNavigate()

  return (
    <StyledTabs
      type="editable-card"
      onChange={(path) => navigate(`${path}`)}
      destroyInactiveTabPane
      activeKey={activeKey}
      items={items}
      onEdit={onEdit}
    />
  )
}

export default BrowserTabs
