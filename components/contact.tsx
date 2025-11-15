'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export function Contact() {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Visit Our Studio
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Stop by for a visit or get in touch with our team
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-bold mb-2">Location</h3>
                <p className="text-muted-foreground">473 Oak Drive<br />Hartford, NY 12838</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-bold mb-2">Phone</h3>
                <p className="text-muted-foreground">+1 (518) 632-8187</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-bold mb-2">Email</h3>
                <p className="text-muted-foreground">hello@guitar4.store</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                <Clock className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-bold mb-2">Hours</h3>
                <p className="text-muted-foreground">
                  Mon-Fri: 10am - 8pm<br />
                  Sat-Sun: 11am - 6pm
                </p>
              </div>
            </div>
          </div>

          <form className="space-y-6">
            <div>
              <Input placeholder="Your Name" className="h-12" />
            </div>
            <div>
              <Input type="email" placeholder="Email Address" className="h-12" />
            </div>
            <div>
              <Input placeholder="Subject" className="h-12" />
            </div>
            <div>
              <Textarea placeholder="Your Message" rows={6} />
            </div>
            <Button size="lg" className="w-full">Send Message</Button>
          </form>
        </div>
      </div>
    </section>
  )
}
