'use client'

import { useEffect, useState } from 'react'
import { ExternalLink } from 'lucide-react'

type Experience = {
  title: string;
  date: string;
  description: string[];
  image: string;
  live: string;
};

export default function Experience() {
  const experience: Experience[] = [
    {
      title: 'Senior Software Engineer, Optum',
      date: 'Feb 2022 – Present',
      description: [
        'Spearheaded the migration of dental membership data to a modern portal (SBD), enabling users to seamlessly access benefits information and ensuring secure and efficient data handling.',
        'Designed and implemented robust microservices using Spring Boot, ensuring high scalability and fault tolerance, with advanced security protocols like OAuth2 and JWT for secure data exchange.',
        'Acted as a subject matter expert (SME) for legacy system enhancements and collaborated with stakeholders to align business goals with technical deliverables, ensuring high-quality project outcomes.',
        'Implemented continuous integration and delivery pipelines for efficient deployment, reducing manual intervention and deployment time by 30%.',
        'Led code reviews and mentored junior engineers, improving team productivity and code quality.',
      ],
      image: '/optum.png?height=100&width=100',
      live: 'https://www.myuhc.com'
    },
    {
      title: 'Software Engineer, Optum',
      date: 'Jul 2019 – Feb 2022',
      description: [
        'Developed and maintained production-grade code for the MyUHC.com platform, enhancing user experience and system performance.',
        'Collaborated with cross-functional teams to incorporate new features such as benefit coverage and provider lookup into the application.',
        'Participated in sprint planning and agile ceremonies, ensuring timely delivery of features and bug fixes.',
        'Reviewed and refactored legacy code to optimize performance, leading to a 20% reduction in system response time.',
        'Ensured compliance with best practices for code quality, security, and maintainability.',
      ],
      image: '/optum.png?height=200&width=300',
      live: 'https://www.myuhc.com'
    },
  ]

  const [visibleExperience, setVisibleExperience] = useState<number[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.getAttribute('data-index') || '0')
          setVisibleExperience((prev) => [...new Set([...prev, index])])
        }
      })
    }, { threshold: 0.1 })

    experience.forEach((_, index) => {
      const element = document.getElementById(`experience-${index}`)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="experience" className="py-20">
      <h2 className="text-4xl font-bold text-center mb-10 text-white">Work Experience</h2>
      <div className="flex flex-col gap-8">
        {experience.map((exp, index) => (
          <div 
            key={index} 
            id={`experience-${index}`}
            data-index={index}
            className={`bg-blue-800 bg-opacity-40 backdrop-blur-md shadow-md rounded-lg overflow-hidden transition-all duration-500 ${
              visibleExperience.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="p-6">
              <div className="flex flex-col md:flex-row items-center mb-4">
                <img src={exp.image} alt={exp.title} className="w-full md:w-1/4 h-32 md:h-48 object-contain mb-4 md:mb-0 md:mr-4" />
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-teal-300">{exp.title}</h3>
                  <p className="text-white font-semibold">{exp.date}</p>
                </div>
              </div>
              <ul className="text-white list-disc pl-5 mb-4">
                {exp.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
              {exp.live && (
                <div className="flex justify-between mt-4">
                  <a href={exp.live} target="_blank" rel="noopener noreferrer" className="text-white hover:text-teal-300 transition-colors">
                    <ExternalLink className="inline mr-1" size={18} /> Live Demo
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}