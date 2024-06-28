'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

const MotionContainer = ({ children }: { children: ReactNode }) => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.4, ease: 'easeIn' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {children}
        </motion.div>
      </div>
    </section>
  )
}

export default MotionContainer
