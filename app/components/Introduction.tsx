'use client'

import { useEffect, useState } from 'react'
import { GitlabIcon as GitHub, Linkedin, Mail } from 'lucide-react'

export default function Introduction() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="about" className="py-20 text-center min-h-screen flex flex-col justify-center items-center">
      <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <img src="/rajlaxmi-portfolio/profile.JPG?height=150&width=150" alt="Rajlaxmi" className="mx-auto rounded-full mb-6 border-4 border-teal-300 shadow-lg w-40 h-60" />
        <h1 className="text-5xl font-bold mb-4 text-white">Rajlaxmi</h1>
        <h2 className="text-3xl text-teal-300 mb-6">Full Stack Developer</h2>
        <p className="max-w-2xl mx-auto text-white mb-8 text-lg">
          Passionate full stack developer with expertise in both frontend and backend technologies. 
          I love creating scalable, efficient, and user-friendly web applications. 
          Always excited to learn new technologies and solve complex problems.
        </p>
        <div className="flex justify-center space-x-4">
          <a href="https://github.com/rajlaxmi35" target="_blank" rel="noopener noreferrer" className="text-white hover:text-teal-300 transition-colors">
            <GitHub size={32} />
          </a>
          <a href="https://www.linkedin.com/in/raj-laxmi/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-teal-300 transition-colors">
            <Linkedin size={32} />
          </a>
          <a href="mailto:rajlaxmig27@gmail.com" className="text-white hover:text-teal-300 transition-colors">
            <Mail size={32} />
          </a>
        </div>
      </div>
    </section>
  )
}