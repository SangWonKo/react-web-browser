import { browserState } from '@store/atom'
import { urlRegex } from '@utils/validations'
import { FormEvent, useCallback, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useRecoilState } from 'recoil'

const useBrowserTab = () => {
  const { tab } = useParams()
  const [browserTab, setBrowserTab] = useRecoilState(
    browserState(tab || 'tab1')
  )

  const [urlInputVal, setUrlInputVal] = useState(browserTab.src || '')

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      const url = getValidatedUrl(urlInputVal)
      setBrowserTab((prev) => ({ ...prev, src: url }))
    },
    [urlInputVal, setBrowserTab]
  )

  return { urlInputVal, setUrlInputVal, browserTab, handleSubmit }
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
