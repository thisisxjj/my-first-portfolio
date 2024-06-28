'use client'

import CountUp from 'react-countup'

const CountNum = () => {
  return (
    <CountUp
      start={0}
      end={404}
      duration={2}
      delay={0.4}
      className="text-[64px] font-medium"
    />
  )
}

export default CountNum
