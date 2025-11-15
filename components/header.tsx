'use client'

import Link from 'next/link'
import { Music } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="flex items-center gap-2 text-foreground hover:text-accent transition-colors">
            <Music className="w-7 h-7 lg:w-8 lg:h-8" />
            <span className="text-xl lg:text-2xl font-bold tracking-tight">GUITAR STUDIO</span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            <Link href="#about" className="text-sm font-medium hover:text-accent transition-colors">About</Link>
            <Link href="#collection" className="text-sm font-medium hover:text-accent transition-colors">Collection</Link>
            <Link href="#lessons" className="text-sm font-medium hover:text-accent transition-colors">Lessons</Link>
            <Link href="#services" className="text-sm font-medium hover:text-accent transition-colors">Services</Link>
            <Link href="#contact" className="text-sm font-medium hover:text-accent transition-colors">Contact</Link>
          </nav>

          <Button className="hidden md:flex">Book Now</Button>
        </div>
      </div>
    </header>
  )
}
