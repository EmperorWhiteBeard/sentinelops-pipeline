"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Award, BookOpen, Cloud, Cpu, Terminal, Zap } from "lucide-react"

const highlights = [
  { icon: BookOpen, title: "BCA Graduate", desc: "Strong foundation in computer applications and software engineering." },
  { icon: Cloud, title: "Cloud Enthusiast", desc: "Deep focus on AWS services, serverless, and scalable architectures." },
  { icon: Zap, title: "Automation First", desc: "Passionate about CI/CD, IaC, and eliminating manual processes." },
  { icon: Cpu, title: "Containerization", desc: "Hands-on with Docker, Kubernetes, and cloud-native workloads." },
  { icon: Terminal, title: "Linux & Scripting", desc: "Proficient in Bash, Python, and Linux system administration." },
  { icon: Award, title: "Certified", desc: "AWS and Cisco certified, continuously learning and upskilling." },
]

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="relative py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-16 h-1 bg-[#FF9900] mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I am a <span className="text-[#FF9900] font-medium">BCA Graduate</span> and aspiring{" "}
              <span className="text-[#FF9900] font-medium">DevOps & Cloud Engineer</span> with a strong
              passion for automation and cloud-native technologies. I believe in building robust,
              scalable infrastructure that enables teams to deliver faster and more reliably.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              My journey into DevOps has been driven by hands-on experience with{" "}
              <span className="text-foreground font-medium">AWS, CI/CD, Docker, Terraform, Kubernetes,</span>{" "}
              and <span className="text-foreground font-medium">Linux</span>. I am a continuous learner
              with AWS and Cisco certifications, always exploring new tools and best practices
              in the cloud ecosystem.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I specialize in bridging the gap between development and operations, ensuring
              seamless deployments, automated testing, and reliable production systems through
              Infrastructure as Code and modern DevOps practices.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                className="glass-card p-5 rounded-xl hover:border-[#FF9900]/30 transition-colors"
              >
                <item.icon className="w-8 h-8 text-[#FF9900] mb-3" />
                <h3 className="font-semibold mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
