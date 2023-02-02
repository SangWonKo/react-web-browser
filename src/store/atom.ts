import { atom, atomFamily } from 'recoil'

export interface BrowserType {
  id: string
  src: string
}

export const browserTabIdState = atom<string[]>({
  key: 'browserTabIdState',
  default: ['tab1'],
})

export const browserState = atomFamily<BrowserType, string>({
  key: 'browserState',
  default: (id) => ({
    id,
    src: '',
  }),
})

export const historyState = atom<string[]>({
  key: 'historyState',
  default: [],
})
