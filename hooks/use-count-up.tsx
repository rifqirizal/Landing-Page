"use client"

import { useState, useEffect, useRef } from "react"
import { useInView } from "react-intersection-observer"

interface UseCountUpProps {
  end: number
  start?: number
  duration?: number
  delay?: number
  formatter?: (value: number) => string
}

export function useCountUp({
  end,
  start = 0,
  duration = 2000,
  delay = 0,
  formatter = (value) => value.toString(),
}: UseCountUpProps) {
  const [count, setCount] = useState(start)
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  })
  const countingRef = useRef(false)
  const startTimeRef = useRef<number | null>(null)
  const frameRef = useRef<number | null>(null)

  useEffect(() => {
    if (!inView || countingRef.current) return

    const startAnimation = () => {
      countingRef.current = true
      startTimeRef.current = Date.now()

      const step = () => {
        if (!startTimeRef.current) return

        const currentTime = Date.now()
        const elapsedTime = currentTime - startTimeRef.current

        if (elapsedTime < duration) {
          const progress = elapsedTime / duration
          const easedProgress = easeOutQuad(progress)
          const nextCount = Math.floor(start + easedProgress * (end - start))
          setCount(nextCount)
          frameRef.current = requestAnimationFrame(step)
        } else {
          setCount(end)
        }
      }

      frameRef.current = requestAnimationFrame(step)
    }

    // Easing function for smoother animation
    const easeOutQuad = (t: number) => t * (2 - t)

    const timer = setTimeout(startAnimation, delay)

    return () => {
      clearTimeout(timer)
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current)
      }
    }
  }, [inView, end, start, duration, delay])

  return { count: formatter(count), ref }
}
