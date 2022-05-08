import React, { useEffect, useState } from 'react'
import './ScrollDown.css'

const ScrollDown = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () =>
      window.pageYOffset < 200  ? setIsVisible(true) : setIsVisible(false)

    window.addEventListener('mousemove', toggleVisibility) || window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility) || window.removeEventListener('mousemove', toggleVisibility)
  }, [])

  return isVisible ? (
    <div className='scroll-down'>
      <svg class="arrows">
							<path class="a1" d="M0 0 L30 32 L60 0"></path>
							<path class="a2" d="M0 20 L30 52 L60 20"></path>
							<path class="a3" d="M0 40 L30 72 L60 40"></path>
						</svg>
    </div>
  ) : null
}


export default ScrollDown
