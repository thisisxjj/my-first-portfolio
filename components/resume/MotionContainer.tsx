'use client'
import React from 'react'
import { motion } from 'framer-motion'

const MotionContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.4, duration: 0.4, ease: 'easeIn' }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">{children}</div>
    </motion.div>
  )
}

export default MotionContainer
