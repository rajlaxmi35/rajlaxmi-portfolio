'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

export default function Contact() {
  const [status, setStatus] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setStatus('')

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch('https://formspree.io/f/mldezwen', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })

      if (response.ok) {
        setStatus('Message sent successfully!')
        form.reset()
      } else {
        setStatus('Error sending message. Please try again.')
      }
    } catch (error) {
      console.error('Error:', error)
      setStatus('Error sending message. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="contact" className="py-20">
      <h2 className="text-4xl font-bold text-center mb-10 text-white">Contact Me</h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-blue-800 bg-opacity-40 backdrop-blur-md shadow-md rounded-lg p-6">
          <h3 className="text-2xl font-semibold mb-4 text-teal-300">Get in Touch</h3>
          <div className="flex items-center mb-4">
            <Mail className="mr-4 text-teal-300" />
            <a href="mailto:rajlaxmig27@example.com" className="text-white hover:text-teal-300 transition-colors">rajlaxmig27@example.com</a>
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
              required
              className="w-full px-3 py-2 bg-blue-700 bg-opacity-40 rounded-md text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-300 h-32 resize-none"
              placeholder="Your message here..."
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-teal-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-teal-600 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-300 focus:ring-opacity-50 disabled:opacity-50"
          >
            {isLoading ? (
              <>
                <span className="animate-spin inline-block mr-2">⏳</span>
                Sending...
              </>
            ) : (
              <>
                <Send className="inline mr-2" size={18} />
                Send Message
              </>
            )}
          </button>
          {status && <p className="mt-4 text-center text-white">{status}</p>}
        </form>
      </div>
    </section>
  )
}