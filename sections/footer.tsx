"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold text-gradient mb-1">Mizhab.dev</h3>
            <p className="text-sm text-muted-foreground">
              Automate Everything. Monitor Everything. Improve Continuously.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/EmperorWhiteBeard/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-[#FF9900] transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/mizhabnp"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-[#FF9900] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p className="flex items-center gap-1">
            Built with <Heart className="w-3.5 h-3.5 text-[#FF9900]" /> by Mizhab Mujeeb NP
          </p>
          <p> DevOps & Cloud Engineer</p>
        </div>
      </div>
    </footer>
  )
}
