"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Github, Star, GitCommit, GitFork, Folder } from "lucide-react"
import { githubStats } from "@/lib/data"

function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return
    let start = 0
    const end = value
    const duration = 1500
    const increment = end / (duration / 16)
    const timer = setInterval(() => {
      start += increment
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [isInView, value])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

export function GitHubDashboardSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const days = Array.from({ length: 35 }, (_, i) => ({
    day: i,
    intensity: Math.random() > 0.3 ? Math.floor(Math.random() * 4) + 1 : 0,
  }))

  return (
    <section id="github" className="relative py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">GitHub Activity</h2>
          <div className="w-16 h-1 bg-[#FF9900] mx-auto rounded-full mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Open source contributions and repository activity for @{githubStats.username}.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2 glass-card rounded-xl p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold">Contribution Graph</h3>
              <a
                href={`https://github.com/${githubStats.username}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-[#FF9900] transition-colors"
              >
                <Github className="w-4 h-4" />
                @{githubStats.username}
              </a>
            </div>
            <div className="grid grid-cols-7 gap-1.5">
              {days.map((d, i) => (
                <div
                  key={i}
                  className="aspect-square rounded-sm transition-colors"
                  style={{
                    backgroundColor:
                      d.intensity === 0
                        ? "rgba(255,255,255,0.05)"
                        : d.intensity === 1
                        ? "rgba(255,153,0,0.2)"
                        : d.intensity === 2
                        ? "rgba(255,153,0,0.4)"
                        : d.intensity === 3
                        ? "rgba(255,153,0,0.6)"
                        : "rgba(255,153,0,0.8)",
                  }}
                  title={`Level ${d.intensity}`}
                />
              ))}
            </div>
            <div className="flex items-center justify-end gap-2 mt-3 text-xs text-muted-foreground">
              <span>Less</span>
              {[0, 1, 2, 3, 4].map((l) => (
                <div
                  key={l}
                  className="w-3 h-3 rounded-sm"
                  style={{
                    backgroundColor:
                      l === 0
                        ? "rgba(255,255,255,0.05)"
                        : l === 1
                        ? "rgba(255,153,0,0.2)"
                        : l === 2
                        ? "rgba(255,153,0,0.4)"
                        : l === 3
                        ? "rgba(255,153,0,0.6)"
                        : "rgba(255,153,0,0.8)",
                  }}
                />
              ))}
              <span>More</span>
            </div>
          </motion.div>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass-card rounded-xl p-6"
            >
              <h3 className="font-semibold mb-4">Repository Stats</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 rounded-lg bg-secondary/50 text-center">
                  <Folder className="w-5 h-5 text-[#FF9900] mx-auto mb-1" />
                  <div className="text-2xl font-bold">
                    <AnimatedCounter value={githubStats.repos} />
                  </div>
                  <div className="text-xs text-muted-foreground">Repositories</div>
                </div>
                <div className="p-3 rounded-lg bg-secondary/50 text-center">
                  <Star className="w-5 h-5 text-[#FF9900] mx-auto mb-1" />
                  <div className="text-2xl font-bold">
                    <AnimatedCounter value={githubStats.stars} />
                  </div>
                  <div className="text-xs text-muted-foreground">Stars</div>
                </div>
                <div className="p-3 rounded-lg bg-secondary/50 text-center">
                  <GitCommit className="w-5 h-5 text-[#FF9900] mx-auto mb-1" />
                  <div className="text-2xl font-bold">
                    <AnimatedCounter value={githubStats.commits} />
                  </div>
                  <div className="text-xs text-muted-foreground">Commits</div>
                </div>
                <div className="p-3 rounded-lg bg-secondary/50 text-center">
                  <GitFork className="w-5 h-5 text-[#FF9900] mx-auto mb-1" />
                  <div className="text-2xl font-bold">-</div>
                  <div className="text-xs text-muted-foreground">Forks</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="glass-card rounded-xl p-6"
            >
              <h3 className="font-semibold mb-4">Top Languages</h3>
              <div className="space-y-3">
                {githubStats.languages.map((lang) => (
                  <div key={lang.name}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-medium">{lang.name}</span>
                      <span className="text-muted-foreground">{lang.percent}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-secondary overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${lang.percent}%` } : {}}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="h-full rounded-full"
                        style={{ backgroundColor: lang.color }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
