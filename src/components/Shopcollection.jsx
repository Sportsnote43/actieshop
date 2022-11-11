export function Shopcollection() {
    return (
      <div className="relative bg-gray-800 py-32 px-6 sm:py-40 sm:px-12 lg:px-16">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://tailwindui.com/img/ecommerce-images/home-page-03-feature-section-full-width.jpg"
            alt=""
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div aria-hidden="true" className="absolute inset-0 bg-gray-900 bg-opacity-50" />
        <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
          <h1 className="text-7xl font-bold tracking-tight text-white">Actieshop</h1>
          <p className="mt-3 text-xl text-white">
              Voor al je leuke aanbiedingen</p>
          <a
            href="#"
            className="mt-8 block w-full rounded-md border border-transparent bg-white py-3 px-8 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto"
          >
            Read our story
          </a>
        </div>
      </div>
    )
  }