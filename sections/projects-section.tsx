"use client"

import { useState, useRef } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { Github, BookOpen, Globe, ChevronDown, ChevronUp, Trophy, Wrench, Lightbulb, BarChart3 } from "lucide-react"
import { projects } from "@/lib/data"

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [expanded, setExpanded] = useState<Record<number, boolean>>({})

  const toggleProject = (i: number) => {
    setExpanded((prev) => ({ ...prev, [i]: !prev[i] }))
  }

  return (
    <section id="projects" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-16 h-1 bg-[#FF9900] mx-auto rounded-full mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Production-grade infrastructure and CI/CD projects demonstrating real-world DevOps problem-solving.
          </p>
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card rounded-xl overflow-hidden"
            >
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto overflow-hidden">
                  <img 
                    src={project.architecture} 
                    alt={`${project.title} architecture`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#232F3E]/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-center">
                    <h3 className="text-xl font-bold text-white mb-1">Architecture Diagram</h3>
                    <p className="text-sm text-white/70">GitHub → CodePipeline → CodeBuild → S3 → CloudFront</p>
                  </div>
                </div>

                <div className="p-6 lg:p-8">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-0.5 text-xs font-semibold rounded bg-[#FF9900]/10 text-[#FF9900]">
                      Featured
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-xs font-medium rounded-md bg-secondary text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3 mb-6">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#232F3E] text-white text-sm font-medium hover:bg-[#232F3E]/80 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      Repository
                    </a>
                    <a
                      href={project.docs}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-card text-sm font-medium hover:bg-accent transition-colors"
                    >
                      <BookOpen className="w-4 h-4" />
                      Documentation
                    </a>
                  </div>

                  <button
                    onClick={() => toggleProject(i)}
                    className="flex items-center gap-2 text-sm font-medium text-[#FF9900] hover:underline"
                  >
                    {expanded[i] ? (
                      <>
                        <ChevronUp className="w-4 h-4" />
                        Hide Technical Details
                      </>
                    ) : (
                      <>
                        <ChevronDown className="w-4 h-4" />
                        Show Technical Details
                      </>
                    )}
                  </button>

                  <AnimatePresence>
                    {expanded[i] && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-6 space-y-6">
                          <div className="grid sm:grid-cols-3 gap-4">
                            {project.metrics.map((m) => (
                              <div key={m.label} className="p-4 rounded-lg bg-secondary/50 text-center">
                                <div className="text-2xl font-bold text-[#FF9900]">{m.value}</div>
                                <div className="text-xs text-muted-foreground">{m.label}</div>
                              </div>
                            ))}
                          </div>

                          <div className="grid sm:grid-cols-3 gap-4">
                            <div className="p-4 rounded-lg border border-border">
                              <div className="flex items-center gap-2 mb-2">
                                <Wrench className="w-4 h-4 text-[#FF9900]" />
                                <h4 className="font-semibold text-sm">Challenges</h4>
                              </div>
                              <ul className="space-y-1.5">
                                {project.challenges.map((c) => (
                                  <li key={c} className="text-xs text-muted-foreground">• {c}</li>
                                ))}
                              </ul>
                            </div>
                            <div className="p-4 rounded-lg border border-border">
                              <div className="flex items-center gap-2 mb-2">
                                <Trophy className="w-4 h-4 text-[#FF9900]" />
                                <h4 className="font-semibold text-sm">Solutions</h4>
                              </div>
                              <ul className="space-y-1.5">
                                {project.solutions.map((s) => (
                                  <li key={s} className="text-xs text-muted-foreground">• {s}</li>
                                ))}
                              </ul>
                            </div>
                            <div className="p-4 rounded-lg border border-border">
                              <div className="flex items-center gap-2 mb-2">
                                <Lightbulb className="w-4 h-4 text-[#FF9900]" />
                                <h4 className="font-semibold text-sm">Key Learnings</h4>
                              </div>
                              <ul className="space-y-1.5">
                                {project.learnings.map((l) => (
                                  <li key={l} className="text-xs text-muted-foreground">• {l}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
