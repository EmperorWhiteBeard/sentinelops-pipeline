"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import {
  Container,
  Boxes,
  Workflow,
  GitBranch,
  Terminal,
  Cloud,
  FileCode,
  Hexagon,
  Github,
  BookOpen,
} from "lucide-react"
import { devOpsLabs } from "@/lib/data"

const iconMap: Record<string, React.ElementType> = {
  Container,
  Boxes,
  Workflow,
  GitBranch,
  Terminal,
  Cloud,
  FileCode,
  Hexagon,
}

export function DevOpsLabsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="labs" className="relative py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">DevOps Labs</h2>
          <div className="w-16 h-1 bg-[#FF9900] mx-auto rounded-full mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hands-on labs and experiments across Docker, Terraform, CI/CD, Kubernetes, and more.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {devOpsLabs.map((lab, i) => {
            const Icon = iconMap[lab.icon] || Terminal
            return (
              <motion.div
                key={lab.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="glass-card rounded-xl p-5 hover:border-[#FF9900]/30 transition-all group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-lg bg-[#FF9900]/10">
                    <Icon className="w-5 h-5 text-[#FF9900]" />
                  </div>
                  <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-secondary text-muted-foreground">
                    {lab.category}
                  </span>
                </div>
                <h3 className="font-semibold mb-2 group-hover:text-[#FF9900] transition-colors">
                  {lab.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">{lab.description}</p>
                <div className="flex items-center gap-3">
                  <a
                    href={lab.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-medium text-muted-foreground hover:text-[#FF9900] transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    Repo
                  </a>
                  <a
                    href={lab.docs}
                    className="inline-flex items-center gap-1 text-xs font-medium text-muted-foreground hover:text-[#FF9900] transition-colors"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    Docs
                  </a>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
