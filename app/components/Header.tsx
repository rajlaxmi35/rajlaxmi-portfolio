'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-blue-900 bg-opacity-20 backdrop-blur-md shadow-md fixed w-full z-10">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-white hover:text-teal-300 transition-colors">
            Rajlaxmi
          </Link>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
          <ul className={`md:flex md:space-x-6 ${isOpen ? 'block' : 'hidden'} md:block absolute md:relative top-full left-0 right-0 bg-blue-900 bg-opacity-20 md:bg-transparent backdrop-blur-md md:backdrop-blur-none p-4 md:p-0 rounded-b-lg md:rounded-none`}>
            {['About', 'Skills', 'Experience', 'Contact'].map((item) => (
              <li key={item} className="my-2 md:my-0">
                <Link 
                  href={`#${item.toLowerCase()}`} 
                  className="text-white hover:text-teal-300 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  )
}