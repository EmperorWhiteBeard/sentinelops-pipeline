"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Award, Download, ExternalLink } from "lucide-react"
import { certifications } from "@/lib/data"

export function CertificationsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="certifications" className="relative py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Certifications</h2>
          <div className="w-16 h-1 bg-[#FF9900] mx-auto rounded-full mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Industry-recognized certifications validating cloud, networking, and AI expertise.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card rounded-xl p-6 hover:border-[#FF9900]/30 transition-all group"
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold text-sm"
                  style={{ backgroundColor: cert.color }}
                >
                  <Award className="w-6 h-6" />
                </div>
                <span className="text-xs font-medium px-2 py-1 rounded-full bg-secondary text-muted-foreground">
                  {cert.date}
                </span>
              </div>

              <h3 className="font-semibold text-lg mb-1 group-hover:text-[#FF9900] transition-colors">
                {cert.name}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">{cert.issuer}</p>

              <div className="flex gap-3">
                <a
                  href={cert.pdf}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-[#FF9900] hover:underline"
                >
                  <Download className="w-3.5 h-3.5" />
                  PDF
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Verify
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
