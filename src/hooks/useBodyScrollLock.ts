import { useEffect, useState } from 'react'

const useBodyScrollLock = () => {
  const [isLocked, setIsLocked] = useState(false)

  useEffect(() => {
    const bodyStyle = document.body.style

    bodyStyle.overflowY = isLocked ? 'hidden' : 'auto'
  }, [isLocked])

  const toggle = () => setIsLocked(prev => !prev)

  return { isLocked, toggle }
}

export default useBodyScrollLock
