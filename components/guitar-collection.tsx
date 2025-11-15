import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const guitars = [
  {
    name: 'Acoustic Dreadnought',
    brand: 'Premium Collection',
    price: '$2,499',
    image: '/acoustic-guitar-dreadnought-wood-natural.jpg'
  },
  {
    name: 'Electric Stratocaster',
    brand: 'Premium Collection',
    price: '$3,299',
    image: '/electric-stratocaster-guitar-sunburst.jpg'
  },
  {
    name: 'Classical Guitar',
    brand: 'Premium Collection',
    price: '$1,899',
    image: '/classical-nylon-string-guitar-wood.jpg'
  },
  {
    name: 'Electric Les Paul',
    brand: 'Premium Collection',
    price: '$4,499',
    image: '/les-paul-electric-guitar-black.jpg'
  }
]

export function GuitarCollection() {
  return (
    <section id="collection" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Our Guitar Collection
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Discover handpicked instruments from the world's most respected guitar makers
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {guitars.map((guitar, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
              <div className="aspect-[3/4] overflow-hidden">
                <img 
                  src={guitar.image || "/placeholder.svg"} 
                  alt={guitar.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <p className="text-xs text-muted-foreground mb-2 uppercase tracking-wide">{guitar.brand}</p>
                <h3 className="text-lg font-bold mb-2">{guitar.name}</h3>
                
                <Button variant="outline" className="w-full">View Details</Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg">View Full Collection</Button>
        </div>
      </div>
    </section>
  )
}
