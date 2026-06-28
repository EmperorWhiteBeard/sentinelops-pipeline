"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Search, Download, FileText, X, Maximize2 } from "lucide-react"
import { docs } from "@/lib/data"
import { cn } from "@/lib/utils"

const categories = ["All", "CI/CD", "AWS", "Docker", "Terraform", "Kubernetes", "Linux", "Monitoring", "Ansible"]

export function DocumentationHubSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [search, setSearch] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [previewDoc, setPreviewDoc] = useState<typeof docs[0] | null>(null)

  const filtered = docs.filter((doc) => {
    const matchesSearch =
      doc.title.toLowerCase().includes(search.toLowerCase()) ||
      doc.description.toLowerCase().includes(search.toLowerCase())
    const matchesCategory = selectedCategory === "All" || doc.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <section id="documentation" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Project Documentation Hub</h2>
          <div className="w-16 h-1 bg-[#FF9900] mx-auto rounded-full mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technical deep-dives, architecture decisions, and implementation guides for all projects.
          </p>
        </motion.div>

        <div className="mb-8 space-y-4">
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search documentation..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-card border border-border focus:border-[#FF9900] focus:ring-1 focus:ring-[#FF9900] outline-none transition-all"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={cn(
                  "px-3 py-1.5 rounded-full text-sm font-medium transition-colors",
                  selectedCategory === cat
                    ? "bg-[#FF9900] text-white"
                    : "bg-secondary text-muted-foreground hover:bg-accent"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((doc, i) => (
            <motion.div
              key={doc.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass-card rounded-xl p-5 hover:border-[#FF9900]/30 transition-all group"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="p-2 rounded-lg bg-[#FF9900]/10">
                  <FileText className="w-5 h-5 text-[#FF9900]" />
                </div>
                <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-secondary text-muted-foreground">
                  {doc.category}
                </span>
              </div>
              <h3 className="font-semibold mb-1 group-hover:text-[#FF9900] transition-colors">{doc.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{doc.description}</p>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setPreviewDoc(doc)}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-[#FF9900] hover:underline"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  Preview
                </button>
                <a
                  href={doc.pdf}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  PDF
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-12 text-muted-foreground">No documentation found matching your criteria.</div>
        )}
      </div>

      {previewDoc && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-card border border-border rounded-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto shadow-2xl"
          >
            <div className="flex items-center justify-between p-5 border-b border-border">
              <h3 className="font-semibold">{previewDoc.title}</h3>
              <button
                onClick={() => setPreviewDoc(null)}
                className="p-1 rounded-lg hover:bg-accent transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-5">
              <p className="text-muted-foreground mb-4">{previewDoc.description}</p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                <span className="px-2 py-0.5 rounded-full bg-secondary">{previewDoc.category}</span>
                <span>{previewDoc.date}</span>
              </div>
              <div className="aspect-video rounded-lg bg-secondary/50 overflow-hidden flex items-center justify-center">
                {previewDoc.title.includes("THROW") ? (
                  <img 
                    src="/throw-cicd-architecture.png" 
                    alt="THROW Architecture"
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <p className="text-muted-foreground">PDF Preview Placeholder</p>
                )}
              </div>
              <div className="mt-4 flex justify-end gap-3">
                <button
                  onClick={() => setPreviewDoc(null)}
                  className="px-4 py-2 rounded-lg border border-border text-sm font-medium hover:bg-accent transition-colors"
                >
                  Close
                </button>
                <a
                  href={previewDoc.pdf}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#FF9900] text-white text-sm font-medium hover:bg-[#FF9900]/90 transition-colors"
                >
                  <Download className="w-4 h-4" />
                  Download PDF
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  )
}
