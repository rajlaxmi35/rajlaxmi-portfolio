'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData)
    alert('Thank you for your message! I will get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="py-20">
      <h2 className="text-4xl font-bold text-center mb-10 text-white">Contact Me</h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-blue-800 bg-opacity-40 backdrop-blur-md shadow-md rounded-lg p-6">
          <h3 className="text-2xl font-semibold mb-4 text-teal-300">Get in Touch</h3>
          <div className="flex items-center mb-4">
            <Mail className="mr-4 text-teal-300" />
            <a href="mailto:rajlaxmig27@gmail.com" className="text-white hover:text-teal-300 transition-colors">rajlaxmig27@gmail.com</a>
          </div>
          <div className="flex items-center mb-4">
            <Phone className="mr-4 text-teal-300" />
            <a href="tel:+919523764002" className="text-white hover:text-teal-300 transition-colors">+919523764002</a>
          </div>
          <div className="flex items-center">
            <MapPin className="mr-4 text-teal-300" />
            <span className="text-white">Hyderabad, India</span>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="bg-blue-800 bg-opacity-40 backdrop-blur-md shadow-md rounded-lg p-6">
          <div className="mb-4">
            <label htmlFor="name" className="block text-white mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 bg-blue-700 bg-opacity-40 rounded-md text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-300"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-white mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 bg-blue-700 bg-opacity-40 rounded-md text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-300"
              placeholder="your@email.com"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-white mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 bg-blue-700 bg-opacity-40 rounded-md text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-300 h-32 resize-none"
              placeholder="Your message here..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-teal-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-teal-600 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-300 focus:ring-opacity-50"
          >
            <Send className="inline mr-2" size={18} />
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}