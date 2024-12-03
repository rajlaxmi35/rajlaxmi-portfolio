'use client'

import { useEffect, useState } from 'react'

export default function Skills() {
  const skills = [
    'React', 'Node.js', 'TypeScript', 'Java',
    'GraphQL', 'Docker', 'AWS', 'Next.js', 'Git',
    'C++', 'Splunk', 'Grafana',
    'Agile', 'Jira'
  ]

  const [visibleSkills, setVisibleSkills] = useState<number[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.getAttribute('data-index') || '0')
          setVisibleSkills((prev) => [...new Set([...prev, index])])
        }
      })
    }, { threshold: 0.1 })

    skills.forEach((_, index) => {
      const element = document.getElementById(`skill-${index}`)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" className="py-20">
      <h2 className="text-4xl font-bold text-center mb-10 text-white">Skills</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, index) => (
          <span 
            key={index} 
            id={`skill-${index}`}
            data-index={index}
            className={`bg-teal-700 bg-opacity-40 backdrop-blur-md shadow-md rounded-full px-4 py-2 text-white text-lg transition-all duration-500 ${
              visibleSkills.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  )
}