import { browserState, historyState } from '@store/atom'
import { urlRegex } from '@utils/validations'
import { FormEvent, useCallback, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useRecoilState, useSetRecoilState } from 'recoil'

const useBrowserTab = () => {
  const { tab } = useParams()
  const [browserTab, setBrowserTab] = useRecoilState(
    browserState(tab || 'tab1')
  )
  const setHistory = useSetRecoilState(historyState)

  const [urlInputVal, setUrlInputVal] = useState(browserTab.src || '')

  const handleChangeUrl = useCallback(
    (url: string) => {
      setBrowserTab((prev) => ({ ...prev, src: url }))
    },
    [setBrowserTab]
  )

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      const url = getValidatedUrl(urlInputVal)
      handleChangeUrl(url)
      setHistory((prev) => [url, ...prev].slice(0, 8))
    },
    [urlInputVal, handleChangeUrl, setHistory]
  )

  return {
    urlInputVal,
    setUrlInputVal,
    browserTab,
    handleChangeUrl,
    handleSubmit,
  }
}

export default useBrowserTab

const getValidatedUrl = (url: string) => {
  if (urlRegex.test(url)) {
    return url
  }

  const qs = new URLSearchParams({ q: url })
  const replacedUrl = `https://www.google.com/search?igu=1&${qs}`

  return replacedUrl
}
