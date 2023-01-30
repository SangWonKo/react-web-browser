import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './Router'
import './index.css'
import 'antd/dist/reset.css'
import { RecoilRoot } from 'recoil'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <Router />
    </RecoilRoot>
  </React.StrictMode>
)
