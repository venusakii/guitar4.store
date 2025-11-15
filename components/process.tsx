export function Process() {
  const steps = [
    {
      number: '01',
      title: 'Discover',
      description: 'Browse our collection or book a consultation with our expert staff'
    },
    {
      number: '02',
      title: 'Experience',
      description: 'Try guitars in our soundproof rooms or attend a trial lesson'
    },
    {
      number: '03',
      title: 'Choose',
      description: 'Select the perfect guitar or lesson plan for your needs'
    },
    {
      number: '04',
      title: 'Create',
      description: 'Begin your musical journey with expert guidance and support'
    }
  ]

  return (
    <section className="py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Your Journey Starts Here
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            A simple process that begins and ends with your passion for music
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="text-6xl font-bold text-accent/20 mb-4">{step.number}</div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
