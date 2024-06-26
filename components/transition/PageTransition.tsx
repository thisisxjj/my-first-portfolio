'use client'

import type { ReactNode } from 'react'
import { usePathname } from '@/navigation'
import { AnimatePresence, motion } from 'framer-motion'

const PageTransition = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname()
  return (
    <AnimatePresence>
      <div key={pathname}>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: { delay: 0.5, duration: 0.4, ease: 'easeInOut' },
          }}
          className="h-screen w-screen fixed bg-primary top-0 pointer-events-none"
        ></motion.div>
      </div>
      {children}
    </AnimatePresence>
  )
}

export default PageTransition
