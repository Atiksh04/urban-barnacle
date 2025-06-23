import { useLookbookStore } from '../stores/lookbookStore'
import { looks } from '../data/dummyData'
import Looks from './Looks'
import { useRef, useEffect } from 'react'

// Lookbook component: Handles look navigation via swipe and keyboard, displaying the current look using the Looks component.
export default function Lookbook() {
  const currentLook = useLookbookStore((s) => s.currentLook)
  const nextLook = useLookbookStore((s) => s.nextLook)
  const prevLook = useLookbookStore((s) => s.prevLook)

  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    let touchStartY = 0

    const handleTouchStart = (e) => {
      touchStartY = e.touches[0].clientY
    }

    const handleTouchEnd = (e) => {
      const touchEndY = e.changedTouches[0].clientY
      const diff = touchStartY - touchEndY

      if (Math.abs(diff) < 30) return // ignore small swipes

      if (diff > 0) {
        nextLook()
      } else {
        prevLook()
      }
    }

    container.addEventListener('touchstart', handleTouchStart)
    container.addEventListener('touchend', handleTouchEnd)

    return () => {
      container.removeEventListener('touchstart', handleTouchStart)
      container.removeEventListener('touchend', handleTouchEnd)
    }
  }, [nextLook, prevLook])


    const handleKeyDown = (e) => {
      // console.log("key down",e)
    if (e.key === 'ArrowUp') prevLook()
    if (e.key === 'ArrowDown') nextLook()
  }

  return (
    <div
      ref={containerRef}
      className="overflow-hidden text-white h-[94vh] outline-none"
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      <Looks look={looks[currentLook]} />
    </div>
  )
}