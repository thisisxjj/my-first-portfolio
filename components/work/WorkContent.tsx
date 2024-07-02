'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'
import { BsArrowUpRight, BsGithub } from 'react-icons/bs'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import type { Swiper as SwiperType } from 'swiper/types'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../ui/tooltip'
import WorkSliderBtns from './WorkSliderBtns'
import { useMessages } from 'next-intl'

interface ProjectStackItem {
  name: string
}

export interface Project {
  num: string
  category: string
  title: string
  description: string
  stack: ProjectStackItem[]
  image: string
  live: string
  github: string
}

interface WorkContentProps {
  projects: Project[]
}

const WorkContent = ({ projects }: WorkContentProps) => {
  const [project, setProject] = useState(projects[0])
  const messages = useMessages()
  const workMessages = messages.Work as Record<string, string>

  const handleSlideChange = (swiper: SwiperType) => {
    const currentIndex = swiper.realIndex

    setProject(projects[currentIndex])
  }

  return (
    <div className="flex flex-col xl:flex-row xl:gap-[30px]">
      <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
        <div className="flex flex-col gap-[30px] h-[50%]">
          <div className="flex gap-4 items-center">
            <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
              {project.num}
            </div>
            <h2 className="text-[42px] font-bold leading-none text-white capitalize">
              {project.title}
            </h2>
          </div>
          <h3 className="text-[22px] font-bold leading-none text-white/80 capitalize">
            {project.category}
          </h3>
          <p className="text-white/60">{project.description}</p>
          <ul className="flex flex-wrap gap-4">
            {project.stack.map((stack, index) => (
              <li key={stack.name} className="text-xl text-accent">
                {stack.name}
                {index !== project.stack.length - 1 && <span>,</span>}
              </li>
            ))}
          </ul>
          {/* border */}
          <div className="border border-white/20"></div>
          {/* buttons */}
          <div className="flex items-center gap-4">
            <Link href={project.live}>
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                    <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>
                      {project.live
                        ? workMessages['liveProject']
                        : workMessages['noLivePro']}
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </Link>
            <Link href={project.github}>
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                    <BsGithub className="text-white text-3xl group-hover:text-accent" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>
                      {
                        workMessages[
                          project.github ? 'githubRepo' : 'noGithubRepo'
                        ]
                      }
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full xl:w-[50%]">
        <Swiper
          loop
          spaceBetween={30}
          slidesPerView={1}
          className="h-full xl:h-[520px] mb-12"
          onSlideChange={handleSlideChange}
        >
          {projects.map((project) => (
            <SwiperSlide
              key={project.num}
              style={{ height: '460px' }}
              className=" relative group flex justify-center items-center bg-pink-50/20"
            >
              <div className="absolute inset-0 bg-black/10 z-10"></div>

              <div className="relative w-full h-full">
                <Image
                  src={project.image}
                  fill
                  className="object-cover xl:object-contain"
                  alt=""
                />
              </div>
            </SwiperSlide>
          ))}
          <WorkSliderBtns
            containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
            btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex items-center justify-center transition-all duration-500"
          />
        </Swiper>
      </div>
    </div>
  )
}

export default WorkContent
