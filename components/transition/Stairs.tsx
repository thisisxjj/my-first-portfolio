'use client'

import { motion } from 'framer-motion'

const totalSteps = 6

const startAnimation = {
  initial: {
    top: '0%',
  },
  animate: {
    top: '100%',
  },
  exit: {
    top: ['100%', '0%'],
  },
}

const reverseIndex = (index: number) => {
  return totalSteps - index - 1
}

const Stairs = () => {
  return (
    <>
      {[...Array(totalSteps)].map((_, i) => (
        <motion.div
          key={i}
          variants={startAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            duration: 0.4,
            ease: 'easeInOut',
            delay: reverseIndex(i) * 0.05,
          }}
          className="h-full w-full bg-white relative"
        ></motion.div>
      ))}
    </>
  )
}

export default Stairs
