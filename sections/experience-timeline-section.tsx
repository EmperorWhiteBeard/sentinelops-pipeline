"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import {
  GraduationCap,
  Cloud,
  Network,
  GitBranch,
  Server,
  Target,
} from "lucide-react"
import { timeline } from "@/lib/data"

const iconMap: Record<string, React.ElementType> = {
  GraduationCap,
  Cloud,
  Network,
  GitBranch,
  Server,
  Target,
}

export function ExperienceTimelineSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience & Learning Journey</h2>
          <div className="w-16 h-1 bg-[#FF9900] mx-auto rounded-full mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My path from BCA graduation to becoming a DevOps & Cloud Engineer.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          {timeline.map((item, i) => {
            const Icon = iconMap[item.icon] || Target
            const isLeft = i % 2 === 0

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative mb-12 md:mb-8"
              >
                <div className="md:flex items-center">
                  <div
                    className={`md:w-1/2 ${isLeft ? "md:pr-12 md:text-right" : "md:order-last md:pl-12 md:text-left"}`}
                  >
                    <div className="glass-card rounded-xl p-5 ml-12 md:ml-0">
                      <span className="text-xs font-bold text-[#FF9900]">{item.year}</span>
                      <h3 className="font-semibold text-lg mt-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                    </div>
                  </div>

                  <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-8 h-8 rounded-full bg-[#FF9900] border-4 border-background flex items-center justify-center z-10">
                    <Icon className="w-3.5 h-3.5 text-white" />
                  </div>

                  <div className="md:w-1/2" />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
