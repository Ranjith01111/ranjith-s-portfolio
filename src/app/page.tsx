'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import {
  Mail, Phone, MapPin, Linkedin, Download, Github, ExternalLink, Brain, Rocket,
  Database, Code2, BarChart3, Layers, GraduationCap, Briefcase, Cpu, Zap,
  FileText, ChevronRight, Globe, ArrowRight, Sparkles, Terminal, Trophy,
  Target, Flame, Hexagon
} from 'lucide-react'

import { SubtleBackground } from '@/components/subtle-background'
import { TiltCard } from '@/components/tilt-card'
import { MagneticButton } from '@/components/magnetic-button'
import { ScrollProgress } from '@/components/scroll-progress'
import { GlowingText } from '@/components/glowing-text'

// Data Arrays - To be populated
const skills = [
  { name: 'Python', icon: Code2, color: 'from-blue-500 to-yellow-500' },
  { name: 'Java', icon: Code2, color: 'from-orange-500 to-red-500' },
  { name: 'C', icon: Code2, color: 'from-purple-500 to-pink-500' },
  { name: 'HTML & CSS', icon: Globe, color: 'from-orange-400 to-yellow-500' },
  { name: 'Machine Learning', icon: Brain, color: 'from-green-500 to-emerald-500' },
  { name: 'Power BI', icon: BarChart3, color: 'from-yellow-500 to-orange-500' },
  { name: 'Figma', icon: Layers, color: 'from-pink-500 to-rose-500' },
  { name: 'SQL', icon: Database, color: 'from-blue-500 to-orange-500' },
  { name: 'Canva', icon: Layers, color: 'from-purple-600 to-orange-500' },
  { name: 'Vibe Coding', icon: Sparkles, color: 'from-amber-500 to-fuchsia-500' },
]
const tools = [
  'Power BI', 'Figma', 'Excel', 'Canva', 'Blogger & Spreadsheets', 'Git', 'TensorFlow', 'Keras'
]
const languages = [
  { name: 'English', level: 'Professional', flag: '🇬🇧' },
  { name: 'Tamil', level: 'Native', flag: '🇮🇳' }
]
const experiences = [
  {
    title: 'Data Analyst Intern',
    company: 'Coimbatore, India',
    period: 'Internship',
    description: [
      'Converted raw datasets into meaningful formats by performing extensive pre-processing activities such as normalization and transformation.',
      'Enhanced data visualization capabilities for better decision-making with the use of advanced BI tools.'
    ],
    icon: '🏢'
  },
  {
    title: 'Bootcamp Participant',
    company: 'Ernakulam, India',
    period: 'Innovation Development Environment phase-II',
    description: [
      'Skilled at working independently and collaboratively in a team environment.',
      'Joined the IDE Bootcamp, learning entrepreneurship while developing an innovative solution.'
    ],
    icon: '🚀'
  }
]
const education = [
  {
    degree: 'Bachelor of Technology',
    field: 'Artificial Intelligence And Data Science',
    institution: 'Rathinam Technical Campus, Coimbatore',
    period: '2023 - 2027',
    details: 'Anna University Affiliated • 9.19 GPA/CGPA',
    icon: '🎓'
  }
]
const projects = [
  {
    title: 'AI Video Generator',
    role: 'For Education Content',
    subtitle: 'Text to Video Converter',
    description: 'Automates the creation of educational videos from text documents using AI. Features include LLM-powered scene generation, Manim animations, voice synchronization, and automated video rendering with error handling and retry mechanisms.',
    icon: Video,
    tech: ['Python', 'OpenAI API', 'Manim', 'FFmpeg', 'LaTeX', 'Gradio'],
    features: [
      'LLM-based Manim code generation',
      'Voice synchronization with animations',
      'Real-time video processing pipeline',
      'Support for multiple deployment strategies'
    ],
    deployment: ['Hugging Face Spaces', 'Render/Railway', 'YouTube Automation API'],
    gradient: 'from-purple-500 to-pink-500',
    featured: true
  },
  {
    title: 'AETHER',
    role: 'Lead AI & Data Science Engineer',
    subtitle: 'Autonomous Earth & Telemetry Heuristic Evaluation & Recognition',
    description: 'Full-stack Deep Learning Mission Control System for real-time aerospace telemetry monitoring. Simulates live spacecraft data streams and uses LSTM Neural Networks to predict engine failures before they occur.',
    icon: Rocket,
    tech: ['TensorFlow/Keras', 'LSTM Networks', 'AWS S3', 'Streamlit', 'Python'],
    features: [
      'Advanced LSTM Deep Learning model',
      'AWS Cloud Architecture with S3',
      'Real-time interactive dashboard',
      'Automated PDF incident reports',
      'Visual and audio alert system'
    ],
    domain: 'Aerospace / Predictive Maintenance / IoT',
    gradient: 'from-orange-500 to-red-500',
    featured: true
  },
  {
    title: 'Smart Tonometer',
    role: 'IoT Project',
    description: 'Built a Raspberry Pi-based tonometer with a force-sensitive sensor for accurate IOP measurement, featuring a real-time dashboard for patient data visualization.',
    icon: Cpu,
    tech: ['Python', 'Raspberry Pi', 'IoT', 'Sensors'],
    gradient: 'from-yellow-500 to-blue-500'
  },
  {
    title: 'Intelligence Document Summarizer',
    role: 'NLP Project',
    description: 'Developed a Python tool using NLTK and Sumy to generate concise document summaries, offering practical NLP experience and scalable potential.',
    icon: FileText,
    tech: ['Python', 'NLTK', 'Sumy', 'NLP'],
    gradient: 'from-green-500 to-teal-500'
  },
  {
    title: 'Mini AI Voice Agent',
    role: 'AI/ML Project',
    description: 'Created a functional AI voice agent with Python and LiveKit, providing an interactive beginner-friendly introduction to real-time AI applications.',
    icon: Zap,
    tech: ['Python', 'LiveKit', 'AI/ML', 'Real-time Communication'],
    gradient: 'from-yellow-500 to-orange-500'
  }
]

function Video({ size = 24 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m22 8-6 4 6 4V8Z" />
      <rect width="14" height="12" x="2" y="6" rx="2" ry="2" />
    </svg>
  )
}

export default function Portfolio() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white via-orange-50/5 to-white dark:from-[#1a1008] dark:via-[#1a1410] dark:to-[#1a1008] overflow-x-hidden">

      <ScrollProgress />
      <SubtleBackground />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-background/70 backdrop-blur-2xl border-b border-border/40">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="text-3xl font-black bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-500 dark:from-orange-500 dark:via-amber-500 dark:to-yellow-400 bg-clip-text text-transparent relative z-10">
              RV
            </div>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-orange-400 to-amber-400 blur-2xl opacity-30"
              animate={{
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex gap-3"
          >
            <MagneticButton asChild variant="ghost" size="sm" className="hover:bg-orange-50 dark:hover:bg-orange-950/20">
              <a href="https://www.linkedin.com/in/ranjithv1111" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4 sm:mr-2" />
                <span className="hidden sm:inline">LinkedIn</span>
              </a>
            </MagneticButton>
            <MagneticButton asChild variant="ghost" size="sm" className="hover:bg-orange-50 dark:hover:bg-orange-950/20">
              <a href="https://github.com/Ranjith01111" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 sm:mr-2" />
                <span className="hidden sm:inline">GitHub</span>
              </a>
            </MagneticButton>
            <MagneticButton asChild variant="outline" size="sm" className="border-orange-300 dark:border-orange-700 hover:bg-orange-50 dark:hover:bg-orange-950/20">
              <a href="/upload/Final%20resume.pdf" target="_blank" rel="noopener noreferrer">
                <Download className="h-4 w-4 sm:mr-2" />
                <span className="hidden sm:inline">Resume</span>
              </a>
            </MagneticButton>
          </motion.div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-orange-500/20 to-amber-500/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-yellow-500/15 to-orange-500/15 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0]
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16"
          >
            {/* Text Content - Left on desktop */}
            <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="space-y-4 md:space-y-6"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="inline-block"
                >
                  <Badge className="bg-gradient-to-r from-orange-500 to-amber-500 text-white border-0 px-4 py-1.5 text-sm font-medium shadow-lg shadow-orange-500/20">
                    <Sparkles className="w-3.5 h-3.5 mr-1.5" />
                    Welcome to my portfolio
                  </Badge>
                </motion.div>

                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-tight">
                  <span className="block bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-500 dark:from-orange-400 dark:via-amber-400 dark:to-yellow-400 bg-clip-text text-transparent">
                    Ranjith V
                  </span>
                  <motion.span
                    className="block text-xl sm:text-2xl lg:text-4xl font-bold text-muted-foreground mt-3"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                  >
                    AI & Data Science Engineer
                  </motion.span>
                </h1>

                <motion.p
                  className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  Transforming complex data into intelligent solutions. Passionate about{' '}
                  <span className="text-orange-600 dark:text-orange-400 font-semibold">AI/ML</span>,{' '}
                  <span className="text-amber-600 dark:text-amber-400 font-semibold">Deep Learning</span>, and{' '}
                  <span className="text-yellow-600 dark:text-yellow-400 font-semibold">Innovation</span>.
                </motion.p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mt-8"
              >
                <MagneticButton asChild size="lg" className="bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white border-0 shadow-lg shadow-orange-500/25 px-6 sm:px-8">
                  <a href="mailto:ranjithvasu499@gmail.com">
                    <Mail className="mr-2 h-5 w-5" />
                    Get In Touch
                  </a>
                </MagneticButton>
                <MagneticButton asChild size="lg" variant="outline" className="border-2 border-orange-300 dark:border-orange-700 hover:bg-orange-50 dark:hover:bg-orange-950/20 px-6 sm:px-8">
                  <a href="/upload/Final%20resume.pdf" download="Final_resume.pdf" target="_blank">
                    <Download className="mr-2 h-5 w-5" />
                    Download CV
                  </a>
                </MagneticButton>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mt-8 lg:mt-10 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start text-muted-foreground"
              >
                {[
                  { icon: Mail, text: 'ranjithvasu499@gmail.com', href: 'mailto:ranjithvasu499@gmail.com' },
                  { icon: Phone, text: '+91 9943865176', href: 'tel:+919943865176' },
                  { icon: MapPin, text: 'Coimbatore, TN, India', href: 'https://www.google.com/maps/search/?api=1&query=Coimbatore,+TN,+India' }
                ].map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 + index * 0.1 }}
                    className="flex items-center gap-2 px-3 py-2 rounded-full bg-background/50 backdrop-blur-sm border border-border/50 hover:border-orange-400/50 transition-all cursor-pointer hover:bg-orange-50 dark:hover:bg-orange-950/20 text-sm"
                  >
                    <item.icon className="h-4 w-4 text-orange-500 flex-shrink-0" />
                    <span className="font-medium">{item.text}</span>
                  </motion.a>
                ))}
              </motion.div>
            </div>

            {/* Photo - Right on desktop, top on mobile */}
            <div className="order-1 lg:order-2 flex-shrink-0">
              <TiltCard className="relative inline-block group cursor-pointer">
                <div className="relative w-44 h-44 sm:w-56 sm:h-56 lg:w-72 lg:h-72 transition-all duration-500 transform group-hover:scale-105">
                  {/* Image Container with Cutting Edges (Clip Path) */}
                  <div
                    className="absolute inset-0 z-20 overflow-hidden shadow-2xl"
                    style={{
                      clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
                    }}
                  >
                    <img
                      src="/hero-image.jpg"
                      alt="Ranjith V"
                      className="w-full h-full object-cover"
                    />

                    {/* Light Curve / Shine Effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/30 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" style={{ transform: 'translateZ(10px)' }} />
                  </div>

                  {/* Animated Border/Glow behind */}
                  <motion.div
                    className="absolute -inset-1 z-10 bg-gradient-to-r from-orange-500 to-amber-500 blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-500"
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    style={{
                      clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
                    }}
                  />

                  {/* Dynamic Attraction Elements */}
                  <motion.div
                    className="absolute -top-6 -right-6 lg:-top-10 lg:-right-10 w-14 h-14 lg:w-20 lg:h-20 bg-orange-400/30 rounded-full blur-2xl"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </div>
              </TiltCard>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              className="text-orange-400"
            >
              <ChevronRight className="w-8 h-8 rotate-90" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Separator className="bg-gradient-to-r from-transparent via-orange-300 dark:via-orange-700 to-transparent" />

      {/* Skills Section */}
      <section className="py-16 md:py-24 lg:py-32 px-4 relative z-10 transform-none">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 md:mb-16"
          >
            <Badge className="bg-gradient-to-r from-orange-500/20 to-amber-500/20 text-orange-600 dark:text-orange-400 border-orange-300 dark:border-orange-700 mb-4">
              <Brain className="w-3.5 h-3.5 mr-1.5" />
              My Arsenal
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-500 dark:from-orange-500 dark:via-amber-500 dark:to-yellow-400 bg-clip-text text-transparent">
              Skills & Technologies
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Equipped with cutting-edge tools to build intelligent solutions
            </p>
          </motion.div>

          {/* Technical Skills - Draggable Grid */}
          <div className="mb-8 md:mb-12">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 mb-4 md:mb-6"
            >
              <div className="p-2 rounded-lg bg-gradient-to-br from-orange-500 to-amber-500 shadow-md">
                <Brain className="h-4 w-4 text-white" />
              </div>
              <h3 className="text-lg md:text-xl font-bold">Technical Skills</h3>

            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                  whileHover={{ y: -4, boxShadow: '0 8px 25px rgba(99, 102, 241, 0.15)' }}
                  className="cursor-pointer"
                >
                  <div className="p-4 rounded-xl border border-border/50 bg-background/80 backdrop-blur-sm hover:border-orange-300/60 dark:hover:border-orange-700/60 transition-all duration-200 flex flex-col items-center justify-center gap-3 text-center select-none h-full min-h-[120px]">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${skill.color} shadow-md`}>
                      <skill.icon className="h-6 w-6 text-white" />
                    </div>
                    <span className="font-semibold text-sm">{skill.name}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Tools & Languages - Side by Side */}
          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            {/* Tools Stack */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="h-full border border-border/50 bg-background/60 backdrop-blur-sm overflow-hidden">
                <div className="h-0.5 w-full bg-gradient-to-r from-purple-500 to-pink-500" />
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 shadow-md">
                      <Layers className="h-4 w-4 text-white" />
                    </div>
                    <CardTitle className="text-lg md:text-xl">Tools Stack</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {tools.map((tool, index) => (
                      <motion.div
                        key={tool}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.04 }}
                        whileHover={{ scale: 1.08, y: -3 }}
                        className="cursor-pointer"
                      >
                        <Badge className="px-3 py-1.5 text-sm font-medium bg-gradient-to-r from-purple-500/10 to-pink-500/10 border-purple-300/50 dark:border-purple-700/50 hover:border-purple-400 dark:hover:border-purple-600 transition-all text-foreground select-none">
                          {tool}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Languages */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="h-full border border-border/50 bg-background/60 backdrop-blur-sm overflow-hidden">
                <div className="h-0.5 w-full bg-gradient-to-r from-yellow-500 to-blue-500" />
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-yellow-500 to-blue-500 shadow-md">
                      <Globe className="h-4 w-4 text-white" />
                    </div>
                    <CardTitle className="text-lg md:text-xl">Languages</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {languages.map((lang, index) => (
                      <motion.div
                        key={lang.name}
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center justify-between p-3 rounded-xl bg-gradient-to-r from-yellow-500/5 to-blue-500/5 border border-yellow-200/50 dark:border-yellow-800/50 hover:border-yellow-400/60 dark:hover:border-yellow-600/60 transition-all cursor-default select-none"
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{lang.flag}</span>
                          <div>
                            <div className="font-bold text-sm md:text-base">{lang.name}</div>
                            <div className="text-xs text-muted-foreground">{lang.level}</div>
                          </div>
                        </div>
                        <Hexagon className="h-6 w-6 text-yellow-500/30" />
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <Separator className="bg-gradient-to-r from-transparent via-orange-300 dark:via-orange-700 to-transparent" />

      {/* Projects Section - Bento Grid */}
      <section className="py-16 md:py-24 lg:py-32 px-4 relative">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 md:mb-16"
          >
            <Badge className="bg-gradient-to-r from-orange-500/20 to-amber-500/20 text-orange-600 dark:text-orange-400 border-orange-300 dark:border-orange-700 mb-4">
              <Rocket className="w-3.5 h-3.5 mr-1.5" />
              Featured Work
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-500 dark:from-orange-500 dark:via-amber-500 dark:to-yellow-400 bg-clip-text text-transparent">
              Projects & Achievements
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Building innovative solutions that push the boundaries of technology
            </p>
          </motion.div>

          {/* Featured Projects - Full-Width Cards */}
          <div className="space-y-6 md:space-y-8 mb-8 md:mb-12">
            {projects.filter(p => p.featured).map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
              >
                <Card className="border-2 border-orange-200/40 dark:border-orange-900/40 bg-gradient-to-br from-white to-orange-50/20 dark:from-slate-900 dark:to-slate-950 overflow-hidden group hover:shadow-2xl hover:border-orange-300 dark:hover:border-orange-700 transition-all duration-300 relative">
                  {/* Top accent gradient bar */}
                  <div className={`h-1 w-full bg-gradient-to-r ${project.gradient}`} />

                  <div className="relative flex flex-col lg:flex-row">
                    {/* Left - Icon + Title block */}
                    <div className="p-5 md:p-8 lg:w-2/5 lg:border-r border-border/30 flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-3">
                        <motion.div
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                          className={`p-3 md:p-4 rounded-xl bg-gradient-to-br ${project.gradient} shadow-lg flex-shrink-0`}
                        >
                          <project.icon className="h-6 w-6 md:h-8 md:w-8 text-white" />
                        </motion.div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <Badge className={`bg-gradient-to-r ${project.gradient} text-white border-0 text-xs`}>
                              <Trophy className="w-3 h-3 mr-1" />
                              Featured
                            </Badge>
                          </div>
                          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold">{project.title}</h3>
                        </div>
                      </div>

                      <p className={`text-sm md:text-base font-semibold mb-1 ${project.gradient.includes('purple') ? 'text-purple-600 dark:text-purple-400' : 'text-orange-600 dark:text-orange-400'}`}>
                        {project.role}
                      </p>
                      {project.subtitle && (
                        <p className="text-xs md:text-sm text-muted-foreground">{project.subtitle}</p>
                      )}
                      {project.domain && (
                        <Badge variant="outline" className="mt-2 w-fit border-orange-300 dark:border-orange-700 text-xs">
                          {project.domain}
                        </Badge>
                      )}

                      {/* Tech stack */}
                      <div className="flex flex-wrap gap-1.5 mt-4">
                        {project.tech.map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-950/30 dark:to-violet-950/30">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Right - Description + Features */}
                    <div className="p-5 md:p-8 lg:w-3/5 flex flex-col justify-center">
                      <p className="text-sm md:text-base text-muted-foreground mb-4 leading-relaxed">
                        {project.description}
                      </p>

                      {project.features && (
                        <div className="mb-4">
                          <h4 className="font-bold text-sm md:text-base mb-2 flex items-center gap-2">
                            <Flame className="h-4 w-4 text-orange-500" />
                            Key Highlights
                          </h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {project.features.map((feature, idx) => (
                              <div
                                key={idx}
                                className="flex items-start gap-2 p-2 md:p-2.5 rounded-lg bg-background/60 border border-border/30"
                              >
                                <ChevronRight className={`h-4 w-4 flex-shrink-0 mt-0.5 ${project.gradient.includes('purple') ? 'text-purple-500' : 'text-orange-500'}`} />
                                <span className="text-xs md:text-sm">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {project.deployment && (
                        <div>
                          <h4 className="font-bold text-sm md:text-base mb-2 flex items-center gap-2">
                            <Target className="h-4 w-4 text-orange-500" />
                            Deployment
                          </h4>
                          <div className="flex flex-wrap gap-1.5">
                            {project.deployment.map((dep, idx) => (
                              <Badge key={idx} variant="outline" className="px-2.5 py-1 text-xs">
                                {dep}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Other Projects - Clean Grid */}
          <div>
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-lg md:text-xl font-bold text-muted-foreground mb-4 md:mb-6 flex items-center gap-2"
            >
              <Terminal className="h-5 w-5 text-orange-500" />
              More Projects
            </motion.h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {projects.filter(p => !p.featured).map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Card className="h-full border border-border/60 hover:border-orange-300/60 dark:hover:border-orange-700/60 bg-background/80 backdrop-blur-sm overflow-hidden group hover:shadow-xl transition-all duration-300 relative">
                    {/* Top accent */}
                    <div className={`h-0.5 w-full bg-gradient-to-r ${project.gradient}`} />

                    <div className="relative h-full flex flex-col p-4 md:p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`p-2.5 rounded-xl bg-gradient-to-br ${project.gradient} shadow-md flex-shrink-0 group-hover:scale-110 transition-transform`}>
                          <project.icon className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <h4 className="text-base md:text-lg font-bold leading-tight">{project.title}</h4>
                          <p className={`text-xs font-medium ${project.gradient.includes('purple') ? 'text-purple-600 dark:text-purple-400' : 'text-orange-600 dark:text-orange-400'}`}>
                            {project.role}
                          </p>
                        </div>
                      </div>

                      <p className="text-xs md:text-sm text-muted-foreground mb-4 leading-relaxed flex-1">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5">
                        {project.tech.map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-violet-950/20">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Separator className="bg-gradient-to-r from-transparent via-orange-300 dark:via-orange-700 to-transparent" />

      {/* Experience Section */}
      <section className="py-16 md:py-24 lg:py-32 px-4 relative overflow-hidden">
        {/* Ambient glow background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-orange-500/[0.04] rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-violet-500/[0.03] rounded-full blur-[100px]" />
        </div>

        <div className="container mx-auto max-w-5xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 md:mb-16"
          >
            <Badge className="bg-gradient-to-r from-orange-500/20 to-amber-500/20 text-orange-600 dark:text-orange-400 border-orange-300 dark:border-orange-700 mb-4">
              <Briefcase className="w-3.5 h-3.5 mr-1.5" />
              Journey So Far
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-500 dark:from-orange-500 dark:via-amber-500 dark:to-yellow-400 bg-clip-text text-transparent">
              Experience
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional milestones and career highlights
            </p>
          </motion.div>

          {/* Experience Cards */}
          <div className="space-y-6 md:space-y-8">
            {experiences.map((exp, index) => {
              const isSpecial = exp.icon === '\u{1F680}'
              const accentGradient = isSpecial ? 'from-purple-500 to-pink-500' : 'from-orange-500 to-amber-500'
              const accentText = isSpecial ? 'text-purple-600 dark:text-purple-400' : 'text-orange-600 dark:text-orange-400'
              const glowColor = isSpecial ? 'rgba(168,85,247,0.15)' : 'rgba(99,102,241,0.15)'
              const dotGlow = isSpecial ? 'shadow-[0_0_8px_rgba(168,85,247,0.5)]' : 'shadow-[0_0_8px_rgba(99,102,241,0.5)]'
              const bulletBg = isSpecial ? 'bg-purple-500' : 'bg-orange-500'
              const bulletShadow = isSpecial ? 'shadow-[0_0_6px_rgba(168,85,247,0.5)]' : 'shadow-[0_0_6px_rgba(99,102,241,0.5)]'

              return (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                >
                  <motion.div
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  >
                    <Card
                      className="relative border border-border/30 bg-gradient-to-br from-background/95 to-background/80 dark:from-slate-900/95 dark:to-slate-950/90 backdrop-blur-sm overflow-hidden group transition-all duration-500"
                      style={{ boxShadow: `0 4px 25px ${glowColor}` }}
                    >
                      {/* Accent gradient bar */}
                      <div className={`h-1 w-full bg-gradient-to-r ${accentGradient}`} />

                      {/* Hover glow overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/[0.03] to-amber-500/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                      <div className="relative flex flex-col md:flex-row">
                        {/* Left Column - Step Number + Role Info */}
                        <div className="p-6 md:p-8 md:w-2/5 md:border-r border-border/20 flex flex-col justify-center">
                          {/* Large step number */}
                          <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 + 0.15, type: 'spring', stiffness: 200 }}
                            className="mb-4"
                          >
                            <span className={`text-6xl md:text-7xl font-black bg-gradient-to-br ${accentGradient} bg-clip-text text-transparent opacity-25 select-none leading-none`}>
                              {String(index + 1).padStart(2, '0')}
                            </span>
                          </motion.div>

                          {/* Icon + Title */}
                          <div className="flex items-center gap-3 mb-3">
                            <motion.div
                              whileHover={{ rotate: 15, scale: 1.1 }}
                              transition={{ type: 'spring', stiffness: 300 }}
                              className={`p-3 rounded-xl bg-gradient-to-br ${accentGradient} shadow-lg`}
                            >
                              <span className="text-2xl">{exp.icon}</span>
                            </motion.div>
                            <div>
                              <h3 className="text-xl md:text-2xl font-bold">{exp.title}</h3>
                              <p className={`text-sm md:text-base font-semibold ${accentText}`}>
                                {exp.company}
                              </p>
                            </div>
                          </div>

                          {/* Period badge */}
                          <Badge className={`w-fit mt-2 bg-gradient-to-r ${accentGradient}/10 ${accentText} border-0 text-xs md:text-sm px-3 py-1 ${dotGlow}`}>
                            <Briefcase className="w-3 h-3 mr-1.5" />
                            {exp.period}
                          </Badge>
                        </div>

                        {/* Right Column - Description */}
                        <div className="p-6 md:p-8 md:w-3/5 flex flex-col justify-center">
                          <h4 className="font-bold text-sm md:text-base text-muted-foreground mb-4 flex items-center gap-2">
                            <Flame className="h-4 w-4 text-orange-500" />
                            Key Contributions
                          </h4>

                          <ul className="space-y-4">
                            {exp.description.map((item, idx) => (
                              <motion.li
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.2 }}
                                className="flex items-start gap-3 group/item"
                              >
                                <div className="mt-1.5 flex-shrink-0">
                                  <motion.div
                                    whileHover={{ scale: 1.4 }}
                                    className={`w-2.5 h-2.5 rounded-full ${bulletBg} ${bulletShadow}`}
                                  />
                                </div>
                                <p className="text-sm md:text-base text-muted-foreground leading-relaxed group-hover/item:text-foreground transition-colors duration-300">
                                  {item}
                                </p>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <Separator className="bg-gradient-to-r from-transparent via-orange-300 dark:via-orange-700 to-transparent" />

      {/* Education Section */}
      <section className="py-16 md:py-24 lg:py-32 px-4 relative">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 md:mb-16"
          >
            <Badge className="bg-gradient-to-r from-orange-500/20 to-amber-500/20 text-orange-600 dark:text-orange-400 border-orange-300 dark:border-orange-700 mb-4">
              <GraduationCap className="w-3.5 h-3.5 mr-1.5" />
              Academic Background
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-400 bg-clip-text text-transparent">
              Education
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Foundations of knowledge and continuous learning
            </p>
          </motion.div>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <TiltCard>
                  <Card className="border-2 border-orange-200 dark:border-orange-900 bg-gradient-to-br from-orange-50/40 to-white dark:from-orange-950/20 dark:to-slate-950/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 overflow-hidden">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-amber-500/5"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />

                    <div className="relative">
                      <CardHeader>
                        <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
                          <motion.div
                            whileHover={{ rotate: 360, scale: 1.1 }}
                            transition={{ duration: 0.6 }}
                            className="p-3 sm:p-4 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 shadow-xl"
                          >
                            <span className="text-2xl sm:text-4xl">{edu.icon}</span>
                          </motion.div>
                          <div className="flex-1">
                            <CardTitle className="text-lg sm:text-xl md:text-3xl font-bold mb-2">{edu.degree}</CardTitle>
                            <CardDescription className="text-sm sm:text-lg text-orange-600 dark:text-orange-400 font-semibold mb-2">
                              {edu.field}
                            </CardDescription>
                            <div className="flex flex-wrap gap-2">
                              <Badge variant="outline" className="text-xs sm:text-base">
                                {edu.period}
                              </Badge>
                              <Badge className="bg-gradient-to-r from-orange-500 to-amber-500 text-white border-0 text-xs sm:text-base">
                                {edu.details}
                              </Badge>
                            </div>
                          </div>
                        </div>
                      </CardHeader>

                      <CardContent>
                        <div className="flex items-center gap-3 text-lg text-muted-foreground p-4 rounded-xl bg-background/50 border border-border/30">
                          <MapPin className="h-5 w-5 text-orange-500" />
                          <span className="font-medium text-sm sm:text-lg flex-wrap">{edu.institution}</span>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Separator className="bg-gradient-to-r from-transparent via-orange-300 dark:via-orange-700 to-transparent" />

      {/* Contact Section */}
      <section className="py-16 md:py-24 lg:py-32 px-4 relative">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="bg-gradient-to-r from-orange-500/20 to-amber-500/20 text-orange-600 dark:text-orange-400 border-orange-300 dark:border-orange-700 mb-4">
              <Mail className="w-3.5 h-3.5 mr-1.5" />
              Get In Touch
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-400 bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 md:mb-12">
              Always open to discussing new opportunities, collaborations, and innovative projects.
              Let's create something amazing together!
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 md:mb-12">
              <MagneticButton asChild size="lg" className="bg-gradient-to-r from-orange-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white border-0 shadow-xl shadow-orange-500/30 px-6 sm:px-10 text-base md:text-lg">
                <a href="mailto:ranjithvasu499@gmail.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Email Me
                </a>
              </MagneticButton>
              <MagneticButton asChild size="lg" variant="outline" className="border-2 border-orange-300 dark:border-orange-700 hover:bg-orange-50 dark:hover:bg-orange-950/20 px-6 sm:px-10 text-base md:text-lg">
                <a href="https://www.linkedin.com/in/ranjith-v-b368952b7" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-5 w-5" />
                  LinkedIn
                </a>
              </MagneticButton>
              <MagneticButton asChild size="lg" variant="outline" className="border-2 border-orange-300 dark:border-orange-700 hover:bg-orange-50 dark:hover:bg-orange-950/20 px-6 sm:px-10 text-base md:text-lg">
                <a href="https://github.com/Ranjith01111" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-5 w-5" />
                  GitHub
                </a>
              </MagneticButton>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 text-muted-foreground mb-10 md:mb-16">
              {[
                { icon: Mail, text: 'ranjithvasu499@gmail.com', label: 'Email' },
                { icon: Phone, text: '+91 9943865176', label: 'Phone' },
                { icon: MapPin, text: 'Coimbatore, TN, India', label: 'Location' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col items-center gap-2 p-4 md:p-6 rounded-2xl bg-gradient-to-br from-orange-50/40 to-white dark:from-orange-950/20 dark:to-slate-950 backdrop-blur-sm border border-orange-200 dark:border-orange-900 hover:border-orange-400 dark:hover:border-orange-700 transition-all group hover:shadow-xl"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <item.icon className="h-5 w-5 md:h-6 md:w-6 text-orange-500 mb-1 md:mb-2" />
                  </motion.div>
                  <span className="font-semibold text-base md:text-lg">{item.label}</span>
                  <span className="text-xs md:text-sm break-all sm:break-normal">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto py-12 px-4 border-t border-border bg-gradient-to-r from-orange-50/40 via-white to-amber-50/40 dark:from-slate-950/80 dark:via-slate-900 dark:to-orange-950/20 backdrop-blur-xl">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-between gap-8"
          >
            <div className="text-center md:text-left">
              <div className="text-2xl md:text-4xl font-black bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-400 bg-clip-text text-transparent mb-2">
                Ranjith V
              </div>
              <p className="text-muted-foreground text-sm md:text-lg">
                AI & Data Science Engineer
              </p>
            </div>

            <div className="flex flex-col items-center gap-4">
              <p className="text-muted-foreground text-center">
                Building the future with technology and innovation
              </p>
              <div className="flex gap-4">
                <MagneticButton asChild variant="ghost" size="sm" className="hover:bg-orange-50 dark:hover:bg-orange-950/20">
                  <a href="https://www.linkedin.com/in/ranjith-v-b368952b7" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </MagneticButton>
                <MagneticButton asChild variant="ghost" size="sm" className="hover:bg-orange-50 dark:hover:bg-orange-950/20">
                  <a href="https://github.com/Ranjith01111" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                  </a>
                </MagneticButton>
                <MagneticButton asChild variant="ghost" size="sm" className="hover:bg-orange-50 dark:hover:bg-orange-950/20">
                  <a href="/upload/Ranjith%20resume1.pdf" target="_blank" rel="noopener noreferrer">
                    <Download className="h-5 w-5" />
                  </a>
                </MagneticButton>
              </div>
            </div>

            <div className="text-center md:text-right">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Ranjith V
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                All rights reserved. Made with ❤️
              </p>
            </div>
          </motion.div>
        </div>
      </footer>
    </div >
  )
}
