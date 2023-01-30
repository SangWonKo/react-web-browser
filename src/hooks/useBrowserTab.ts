import { browserTabState } from '@store/atom'
import { urlRegex } from '@utils/validations'
import { FormEvent, useCallback, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useRecoilState } from 'recoil'

const useBrowserTab = () => {
  const { tab } = useParams()
  const [browserTabs, setBrowserTabs] = useRecoilState(browserTabState)

  const activeTab = useMemo(
    () => browserTabs.find((tabs) => tabs.key === tab),
    [browserTabs, tab]
  )
  const [urlInputVal, setUrlInputVal] = useState(activeTab?.src || '')

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      if (!tab) return

      const url = getValidatedUrl(urlInputVal)

      console.log(url)

      if (activeTab) {
        setBrowserTabs((prev) =>
          prev.map((item) => ({
            ...item,
            src: item.key === tab ? url : item.src,
          }))
        )
      } else {
        setBrowserTabs((prev) => [...prev, { key: tab, src: url }])
      }
    },
    [urlInputVal, activeTab, tab, setBrowserTabs]
  )

  return { urlInputVal, setUrlInputVal, activeTab, handleSubmit }
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
