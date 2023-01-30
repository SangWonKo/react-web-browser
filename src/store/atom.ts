import { atom } from 'recoil'

export interface BrowserUrlType {
  key: string
  src: string
}

export const browserTabState = atom<BrowserUrlType[]>({
  key: 'urlState',
  default: [{ key: 'tab1', src: '' }],
})

export const recentlyVisitedState = atom<string[]>({
  key: 'recentlyVisitedState',
  default: [],
})
