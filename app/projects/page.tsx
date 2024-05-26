"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from 'swiper/types';
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "Web Application",
    title: "Dynamic Youtube-clone",
    description:
      "Fully Dynamic web-app similar to Youtube using React JS and Rapid API in which users can watch videos of specific YouTubers, see subscriber counts, and likes. Deployed on Netlify.",
    stack: [
      "React.js",
      "SCSS",
      "Material UI",
      "Youtube API from RapidAPI",
      "Framer-motion",
      "Netlify",
    ],
    image: "/assets/work/thumb1.png",
    live: "https://vgmedia.netlify.app/",
    github: "https://github.com/vaibhav-gaur-518",
  },
  {
    num: "02",
    category: "Frontend",
    title: "Admin Dashboard",
    description:
      "Fully dynamic React admin dashboard UI prototype featuring Nivo charts and Full-Calendar, designed for effective system monitoring and management. Deployed on Netlify.",
    stack: [
      "React.js",
      "SCSS",
      "Material UI",
      "Nivo",
      "Full-Calendar",
      "Netlify",
    ],
    image: "/assets/work/thumb2.png",
    live: "https://master--dashadmins.netlify.app/",
    github: "https://github.com/vaibhav-gaur-518",
  },
  {
    num: "03",
    category: "Fullstack",
    title: "E-Insurance Web App",
    description:
      "Web App using React.js for the frontend and Spring Boot with Hibernate for the backend to automate the insurance process. Features role-based login with JWT, allowing customers to manage policies and agents to earn commissions.",
    stack: [
      "React.js",
      "Spring Boot",
      "Hibernate",
      "JPA",
      "SCSS",
      "Material UI",
      "Framer-motion",
      "Axios",
    ],
    image: "/assets/work/thumb3.png",
    live: "https://github.com/vaibhav-gaur-518",
    github: "https://github.com/vaibhav-gaur-518",
  },
];

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper: SwiperType) => {
    const currentIndex = swiper.activeIndex;
    setActiveIndex(currentIndex);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.1, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {projects[activeIndex].num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {projects[activeIndex].category} project
              </h2>
              <p className="text-white/60">
                {projects[activeIndex].description}
              </p>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                <Link href={projects[activeIndex].live} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={projects[activeIndex].github} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                    <div className="relative w-full h-full">
                      <Image
                        src={project.image}
                        fill
                        className="object-cover w-full h-full"
                        alt=""
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}

              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
