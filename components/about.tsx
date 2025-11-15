import { Music2, Award, Users } from 'lucide-react'

export function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Where Passion Meets Precision
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            For over 15 years, Guitar Studio has been the premier destination for guitarists seeking exceptional instruments, world-class instruction, and professional services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-6">
              <Music2 className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-xl font-bold mb-3">Premium Guitars</h3>
            <p className="text-muted-foreground leading-relaxed">
              Curated collection of acoustic, electric, and bass guitars from legendary brands
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-6">
              <Award className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-xl font-bold mb-3">Expert Instruction</h3>
            <p className="text-muted-foreground leading-relaxed">
              Professional musicians offering personalized lessons for all skill levels
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-xl font-bold mb-3">Community</h3>
            <p className="text-muted-foreground leading-relaxed">
              Join a vibrant community of musicians and guitar enthusiasts
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
