import { HeroSection } from "@/sections/hero-section"
import { AboutSection } from "@/sections/about-section"
import { TechStackSection } from "@/sections/tech-stack-section"
import { CertificationsSection } from "@/sections/certifications-section"
import { ProjectsSection } from "@/sections/projects-section"
import { DevOpsLabsSection } from "@/sections/devops-labs-section"
import { DocumentationHubSection } from "@/sections/documentation-hub-section"
import { ArchitectureDiagramsSection } from "@/sections/architecture-diagrams-section"
import { ExperienceTimelineSection } from "@/sections/experience-timeline-section"
import { GitHubDashboardSection } from "@/sections/github-dashboard-section"
import { ContactSection } from "@/sections/contact-section"
import { Footer } from "@/sections/footer"

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <TechStackSection />
      <CertificationsSection />
      <ProjectsSection />
      <DevOpsLabsSection />
      <DocumentationHubSection />
      <ArchitectureDiagramsSection />
      <ExperienceTimelineSection />
      <GitHubDashboardSection />
      <ContactSection />
      <Footer />
    </>
  )
}
