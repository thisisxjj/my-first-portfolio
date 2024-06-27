'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

const MotionContainer = ({ children }: { children: ReactNode }) => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.4, duration: 0.4, ease: 'easeIn' }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">{children}</div>
    </motion.section>
  )
}

export default MotionContainer
