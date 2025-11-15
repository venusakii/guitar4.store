import { Wrench, Zap, Music, Package } from 'lucide-react'

const services = [
  {
    icon: Wrench,
    title: 'Setup & Repairs',
    description: 'Professional guitar setup, maintenance, and repair services to keep your instrument in perfect condition'
  },
  {
    icon: Zap,
    title: 'Custom Electronics',
    description: 'Pickup installation, wiring upgrades, and custom electronics modifications'
  },
  {
    icon: Music,
    title: 'Recording Studio',
    description: 'State-of-the-art recording facilities available for practice and professional recording sessions'
  },
  {
    icon: Package,
    title: 'Trade-In Program',
    description: 'Fair market value for your guitars with our hassle-free trade-in program'
  }
]

export function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Professional Services
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Complete care for your instruments with our expert technical services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div key={index} className="flex gap-6">
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center shrink-0">
                  <Icon className="w-7 h-7 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
