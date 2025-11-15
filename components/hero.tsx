import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      <div className="absolute inset-0 bg-[url(/placeholder.svg?height=1080&width=1920&query=elegant+electric+guitar+on+dark+stage+with+dramatic+lighting)] bg-cover bg-center">
        <div className="absolute inset-0 bg-background/90" />
      </div>
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold tracking-tight text-balance mb-6">
            Master Your
            <span className="block text-accent mt-2">Guitar Journey</span>
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 text-pretty leading-relaxed">
            Premium guitars, expert lessons, and professional services for musicians who demand excellence
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-base group">
              Explore Collection
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="text-base">
              Book a Lesson
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
