const features = [
    {
      name: 'Cecotec',
      imageSrc: 'https://i.imgur.com/u91oK70.png',
      imageAlt: 'Green cardstock box containing white, beige, and brown cards.',
    },
    {
      name: 'Jumbo',
      imageSrc: 'https://i.imgur.com/5WNDGD4.png',
      imageAlt: 'Green cardstock box open with 50 cards inside.',
    },
    {
      name: 'Ridd',
      imageSrc: 'https://i.imgur.com/P19sU6z.png',
      imageAlt: 'Detail of white today card, beige next card, and brown someday card with dot grid.',
    },
    {
      name: 'Qware',
      imageSrc: 'https://i.imgur.com/cOtJ3QP.png',
      imageAlt: 'Stack of three green cardstock boxes with 3 hole cutouts showing cards inside.',
    },
  ]
  
  export function Brands() {
    return (
      <div className="bg-gray-900">
        <div className="mx-auto max-w-2xl py-24 px-4 sm:py-32 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="max-w-3xl">
            <h2 id="features-heading" className="font-medium text-white">
              Onze Merken
            </h2>
            <p className="mt-4 text-white">
              Hier onder een aantal van onze merken die wij verkopen.
            </p>
          </div>
  
          <div className="mt-11 grid grid-cols-1 items-start gap-y-16 gap-x-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col-reverse">
                <div className="mt-6">
                  <h3 className="text-3xl font-medium text-white">{feature.name}</h3>
                </div>
                <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-100">
                  <img src={feature.imageSrc} alt={feature.imageAlt} className="object-cover object-center" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }