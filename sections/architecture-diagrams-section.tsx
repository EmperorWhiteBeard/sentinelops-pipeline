"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { X, ZoomIn, ZoomOut, Layers } from "lucide-react"
import { architectureDiagrams } from "@/lib/data"

export function ArchitectureDiagramsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selected, setSelected] = useState<typeof architectureDiagrams[0] | null>(null)
  const [zoom, setZoom] = useState(1)

  return (
    <section id="architecture" className="relative py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Architecture Diagrams</h2>
          <div className="w-16 h-1 bg-[#FF9900] mx-auto rounded-full mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Visual blueprints of cloud infrastructure, CI/CD pipelines, and containerized architectures.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {architectureDiagrams.map((diagram, i) => (
            <motion.div
              key={diagram.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              onClick={() => {
                setSelected(diagram)
                setZoom(1)
              }}
              className="glass-card rounded-xl overflow-hidden cursor-pointer hover:border-[#FF9900]/30 transition-all group"
            >
              <div className="aspect-video bg-gradient-to-br from-[#232F3E] to-[#161E2D] flex items-center justify-center relative overflow-hidden">
                <img 
                  src={diagram.image} 
                  alt={diagram.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                  loading="lazy"
                />
                <div className="absolute bottom-2 right-2 p-1.5 rounded-md bg-black/40 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn className="w-4 h-4" />
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold group-hover:text-[#FF9900] transition-colors">{diagram.title}</h3>
                  <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-secondary text-muted-foreground">
                    {diagram.category}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative max-w-4xl w-full bg-card border border-border rounded-xl overflow-hidden shadow-2xl"
          >
            <div className="flex items-center justify-between p-4 border-b border-border">
              <h3 className="font-semibold">{selected.title}</h3>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setZoom((z) => Math.min(z + 0.2, 2))}
                  className="p-2 rounded-lg hover:bg-accent transition-colors"
                  aria-label="Zoom in"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setZoom((z) => Math.max(z - 0.2, 0.5))}
                  className="p-2 rounded-lg hover:bg-accent transition-colors"
                  aria-label="Zoom out"
                >
                  <ZoomOut className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setSelected(null)}
                  className="p-2 rounded-lg hover:bg-accent transition-colors"
                  aria-label="Close"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div className="p-4 overflow-auto flex items-center justify-center min-h-[300px]">
              <div
                className="w-full rounded-lg flex items-center justify-center transition-transform duration-200 overflow-hidden"
                style={{ transform: `scale(${zoom})` }}
              >
                <img 
                  src={selected.image} 
                  alt={selected.title}
                  className="w-full h-auto object-contain rounded-lg"
                />
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  )
}
