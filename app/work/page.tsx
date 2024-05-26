"use client";

import {
  FaJava,
  FaJs,
  FaHtml5,
  FaCss3,
  FaReact,
  FaFigma,
  FaAws,
  FaJenkins,
  FaJira,
  FaGithub,
  FaGitlab,
  FaGit,
} from "react-icons/fa";
import { BiLogoSpringBoot } from "react-icons/bi";
import { SiStrapi, SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const about = {
  title: "About me",
  description:
    "Crafting secure solutions is my passion, With 2 years of immersive experience as a Software Engineer and a Bachelor's degree in Computer Science and Engineering. With a developer's mindset, I architect systems with both functionality and security in mind. I delve into the realms of 3D design and UI/UX, blending technical prowess with artistic flair.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Vaibhav Gaur",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+91)-935-471-9627",
    },
    {
      fieldName: "Experience",
      fieldValue: "2 years",
    },
    {
      fieldName: "Email",
      fieldValue: "vaibhavgaur518@gmail.com",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indian",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Hindi",
    },
  ],
};

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  items: [
    {
      company: "Monocept Consulting Pvt. Ltd.",
      position: "Software Engineer",
      duration: "January 2023 - Present",
      description: [
        "Key contributor in developing the Max Life Insurance Super App (mSpace) application, improving operational efficiency by 30% and reducing processing time by 25%.",
        "Engineered a scalable microservices architecture, boosting system efficiency by 50% and handling 10,000+ concurrent users, with a 25% improvement in API response time and 30% reduction in server load, Streamlined Jenkins Pipeline deployment, cutting CMS deployment time on AWS ECS by 50%.",
        "Applied Spring Security in a Java(Spring Boot) project, incorporating JWT tokens and refresh tokens to enhance authentication, securing 50+ endpoints.",
        "Implemented role-based SSO login, device-ID tracking, location-based attendance, and optimized PostgreSQL queries, reducing load time by 15%.",
        "Supported creation of key project documents (HLD, LLD, TSD, FSD), reducing project delivery time by 40%, improving documentation accuracy by 20%.",
        "Assisted in provisioning infrastructure for a secure application, handling 150,000 user data load with 15% concurrent usage.",
      ],
    },
    {
      company: "NITI Aayog Government of India",
      position: "Research & Development Intern",
      duration: "July 2022 - September 2022",
      description: [
        "Prepared Reports on 2 Different Research Topics, leading to a 15% increase in knowledge sharing within the team.",
        "Analyzed and reported on Innovation Ecosystem and Policies promoting systemic socio-economic transformative change, resulting in a 10% increase in awareness and application of these policies.",
        "Prepared a document for Fundraising using Blockchain and implemented a basic contract to showcase the working, which led to a 20% increase in understanding of blockchain applications.",
      ],
    },
    {
      company: "CISCO Networking Academy",
      position: "Cyber Security Trainee",
      duration: "April 2021 - July 2021",
      description: [
        "Designed a secure network to link various networks, labs using packet tracer, increasing network efficiency by 25%, reducing downtime by 15%.",
        "Remodeled the network to ensure maximum security, utilizing industry best practices, resulting in a 30% reduction in security breaches.",
        "Assisted in identifying and mitigating potential network vulnerabilities by conducting penetration tests using Kali Linux, Nmap, Wireshark, and Burp Suite, enhancing cyber defense strategy and reducing potential vulnerabilities by 35%.",
      ],
    },
  ],
};

const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  items: [
    {
      institution: "Manav Rachna University",
      degree: "Bachelor's degree in Computer Science and Engineering",
      duration: "2019 - 2023",
      description: "• Awarded 50% Scholarship for 4 years due to grades.",
    },
    {
      institution: "EC-Council - (Result Pending)",
      degree: "Certified Ethical Hacker (CEH)",
      duration: "2024",
    },
    {
      institution: "Web Pentesting Training",
      degree: "Ignite Technologies",
      duration: "2023",
    },
    {
      institution: "Ethical Hacking Training",
      degree: "Ignite Technologies",
      duration: "2023",
    },
    {
      institution: "Cybersecurity Essentials",
      degree: "CISCO Networking Academy",
      duration: "2021",
    },
    {
      institution: "Introduction to Packet Tracer",
      degree: "CISCO Networking Academy",
      duration: "2021",
    },
    {
      institution: "Introduction to Cyber Security",
      degree: "CISCO Networking Academy",
      duration: "2021",
    },
  ],
};

const skills = {
  title: "My skills",
  skillList: [
    {
      icon: <BiLogoSpringBoot />,
      name: "Spring Boot",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
    {
      icon: <FaReact />,
      name: "React.js",
    },
    {
      icon: <FaJava />,
      name: "Java",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <FaAws />,
      name: "Amazon AWS",
    },
    {
      icon: <FaJenkins />,
      name: "Jenkins",
    },
    {
      icon: <FaJira />,
      name: "Jira",
    },
    {
      icon: <FaGithub />,
      name: "GitHub",
    },
    {
      icon: <FaGitlab />,
      name: "GitLab",
    },
    {
      icon: <FaGit />,
      name: "Git",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
    },
    {
      icon: <FaHtml5 />,
      name: "HTML5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS3",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
    },
    {
      icon: <SiStrapi />,
      name: "Strapi CMS",
    },
  ],
};

const Work = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.1, duration: 0.2, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="flex-1 w-full h-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 gap-[30px]">
                    {experience.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-center gap-1"
                      >
                        <span className="font-medium text-accent">
                          {item.duration}
                        </span>
                        <h3 className="text-xl font-semibold">
                          {item.position}
                        </h3>
                        <div className="text-center">
                          <p className="font-medium mb-2 text-white/60">
                            {item.company}
                          </p>
                          <ul className="list-disc list-inside text-left">
                            {item.description.map((desc, i) => (
                              <li key={i}>{desc}</li>
                            ))}
                          </ul>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 xl:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-center gap-1"
                      >
                        <span className="font-medium text-accent">
                          {item.duration}
                        </span>
                        <h3 className="text-xl font-semibold">{item.degree}</h3>
                        <div className="text-center">
                          <p className="font-medium mb-2 text-white/60">
                            {item.institution}
                          </p>
                          <p>{item.description}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{skills.title}</h3>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-4 gap-4">
                    {skills.skillList.map((skill, index) => (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                <ul className="grid grid-col-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((info, index) => (
                    <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                      <span className="font-semibold text-white/60">{info.fieldName}: </span>
                      <span className="text-xl">{info.fieldValue}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Work;
