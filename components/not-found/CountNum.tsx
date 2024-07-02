'use client'

import CountUp from 'react-countup'

const CountNum = ({
  start = 0,
  end = 404,
  duration = 2,
  delay = 0.4,
}: {
  start?: number
  end?: number
  duration?: number
  delay?: number
}) => {
  return (
    <CountUp
      start={start}
      end={end}
      duration={duration}
      delay={delay}
      className="text-[64px] font-medium"
    />
  )
}

export default CountNum
