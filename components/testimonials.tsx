import { Card, CardContent } from '@/components/ui/card'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Michael Anderson',
    role: 'Professional Musician',
    content: 'Guitar Studio helped me find my dream instrument. The staff\'s knowledge and passion is unmatched. Highly recommend!',
    rating: 5
  },
  {
    name: 'David Thompson',
    role: 'Beginner Student',
    content: 'Started lessons here 6 months ago. My instructor is patient, skilled, and makes learning fun. I\'ve progressed so much!',
    rating: 5
  },
  {
    name: 'Robert Williams',
    role: 'Intermediate Player',
    content: 'The quality of guitars and service here is exceptional. They truly care about every customer\'s musical journey.',
    rating: 5
  }
]

export function Testimonials() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            What Our Community Says
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Join thousands of satisfied musicians who trust Guitar Studio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">{testimonial.content}</p>
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
