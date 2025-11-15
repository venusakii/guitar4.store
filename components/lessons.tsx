import { Card, CardContent } from '@/components/ui/card'
import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'

const lessonPlans = [
  {
    name: 'Beginner',
    price: '$49',
    duration: 'per session',
    features: [
      'One-on-one instruction',
      '45-minute sessions',
      'Basic technique & theory',
      'Beginner song repertoire',
      'Practice materials included'
    ]
  },
  {
    name: 'Intermediate',
    price: '$69',
    duration: 'per session',
    features: [
      'One-on-one instruction',
      '60-minute sessions',
      'Advanced techniques',
      'Genre specialization',
      'Performance coaching',
      'Recording studio access'
    ],
    popular: true
  },
  {
    name: 'Professional',
    price: '$99',
    duration: 'per session',
    features: [
      'One-on-one instruction',
      '90-minute sessions',
      'Master-level techniques',
      'Professional development',
      'Industry networking',
      'Unlimited studio access',
      'Career mentorship'
    ]
  }
]

export function Lessons() {
  return (
    <section id="lessons" className="py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Learn from the Masters
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Personalized guitar lessons tailored to your skill level and musical goals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {lessonPlans.map((plan, index) => (
            <Card key={index} className={`relative ${plan.popular ? 'border-accent shadow-xl scale-105' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-bold">
                  Most Popular
                </div>
              )}
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full" variant={plan.popular ? 'default' : 'outline'}>
                  Book Lesson
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
