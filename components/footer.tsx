import Link from 'next/link'
import { Music, Facebook, Instagram, Youtube, Twitter } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t border-border py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Music className="w-6 h-6" />
              <span className="text-lg font-bold">GUITAR STUDIO</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Your premier destination for guitars, lessons, and professional services.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4">Shop</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="#" className="hover:text-accent transition-colors">Acoustic Guitars</Link></li>
              <li><Link href="#" className="hover:text-accent transition-colors">Electric Guitars</Link></li>
              <li><Link href="#" className="hover:text-accent transition-colors">Bass Guitars</Link></li>
              <li><Link href="#" className="hover:text-accent transition-colors">Accessories</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="#" className="hover:text-accent transition-colors">Guitar Lessons</Link></li>
              <li><Link href="#" className="hover:text-accent transition-colors">Repairs & Setup</Link></li>
              <li><Link href="#" className="hover:text-accent transition-colors">Recording Studio</Link></li>
              <li><Link href="#" className="hover:text-accent transition-colors">Trade-In Program</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <Link href="#" className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center hover:bg-accent/20 transition-colors">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center hover:bg-accent/20 transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center hover:bg-accent/20 transition-colors">
                <Youtube className="w-5 h-5" />
              </Link>
              <Link href="#" className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center hover:bg-accent/20 transition-colors">
                <Twitter className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 Guitar Studio. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link href="#" className="hover:text-accent transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-accent transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-accent transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
