const products = [
    {
      id: 1,
      name: 'Jumbo',
      color: 'Jumbo ik leer Coderen',
      href: 'https://shop.seescanyours.com/e/Z9hMB',
      imageSrc: 'https://i.imgur.com/oDoEhC1.png',
      imageAlt: 'Jumbo ik leer Coderen',
      price: '€26,99',
    },
    {
      id: 2,
      name: 'Jumbo',
      color: 'Jumbo Stratego Junior',
      href: 'https://shop.seescanyours.com/e/1dh6m',
      imageSrc: 'https://i.imgur.com/hQbkVYR.png',
      imageAlt: 'Jumbo Stratego Junior',
      price: '€21,99',
    },
    {
      id: 3,
      name: 'Jumbo',
      color: 'Jumbo Ik leer Lezen',
      href: 'https://shop.seescanyours.com/e/oJhZ6',
      imageSrc: 'https://i.imgur.com/TI6tmd3.png',
      imageAlt: 'Jumbo Ik leer Lezen',
      price: '€26,99',
    },
    {
      id: 4,
      name: 'Jumbo',
      color: 'Jumbo ik leer Rekenen',
      href: 'https://shop.seescanyours.com/e/Neh1y',
      imageSrc: 'https://i.imgur.com/6H9sfwW.png',
      imageAlt: 'Jumbo ik leer Rekenen',
      price: '€26,99',
    },  
  ]
  
  export function Products2() {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900">Jumbo spellen</h2>
  
          <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id}>
                <div className="relative">
                  <div className="relative h-72 w-full overflow-hidden rounded-lg">
                    <img
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div className="relative mt-4">
                    <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                  </div>
                  <div className="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
                    <div
                      aria-hidden="true"
                      className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                    />
                    <p className="relative text-3xl font-semibold text-white">{product.price}</p>
                  </div>
                </div>
                <div className="mt-6">
                  <a
                    href={product.href}
                    className="relative flex items-center justify-center rounded-md border border-transparent bg-gray-900 py-2 px-8 text-sm font-medium text-gray-200 hover:bg-gray-200 hover:text-gray-900"
                  >
                    Bestellen<span className="sr-only">, {product.name}</span>
                  </a>
                </div>
              </div>
              
            ))}
          </div>
        </div>
      </div>
    )
  }