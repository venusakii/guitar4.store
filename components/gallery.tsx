export function Gallery() {
  const images = [
    '/guitar-studio-interior-with-guitars-on-wall.jpg',
    '/musician-playing-acoustic-guitar-in-studio.jpg',
    '/close-up-electric-guitar-details.jpg',
    '/guitar-lesson-teacher-and-student.jpg',
    '/vintage-guitars-collection-display.jpg',
    '/modern-recording-studio-for-guitar.jpg'
  ]

  return (
    <section className="py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Inside the Studio
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Explore our space where music comes to life
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {images.map((image, index) => (
            <div key={index} className="aspect-[4/3] overflow-hidden rounded-lg group cursor-pointer">
              <img 
                src={image || "/placeholder.svg"} 
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
