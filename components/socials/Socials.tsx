'use client'

import Link from 'next/link'
import { FaGithub } from 'react-icons/fa'
import { AiFillWechat } from 'react-icons/ai'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { QRCodeSVG } from '@rc-component/qrcode'

const Socials = ({
  containerStyles,
  iconStyles,
}: {
  containerStyles?: string
  iconStyles?: string
}) => {
  return (
    <div className={containerStyles}>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              target="_blank"
              href="https://github.com/thisisxjj"
              className={iconStyles}
            >
              <FaGithub />
            </Link>
          </TooltipTrigger>
          <TooltipContent>Github</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link href="" className={iconStyles}>
              <AiFillWechat />
            </Link>
          </TooltipTrigger>
          <TooltipContent className="border-white/10 dark:border-white/10 bg-[#27272c] dark:bg-[#27272c] p-2">
            <QRCodeSVG
              value="https://u.wechat.com/EFrFqgEGRo_7_JV81H-xwcM"
              size={160}
            />
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  )
}

export default Socials
