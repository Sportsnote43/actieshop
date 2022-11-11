import Link from 'next/link'

export function Header() {
  return (
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img
                    className="block h-12 w-auto lg:hidden"
                    src="https://svgshare.com/i/ntU.svg"
                    alt="Actieshop"
                  />
                  <img
                    className="hidden h-12 w-auto lg:block"
                    src="https://svgshare.com/i/ntU.svg"
                    alt="Actieshop"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                    <Link href="/" className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white">
                      Home
                    </Link>
                    <Link
                      href="/cecotec"
                      className="rounded-md px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-700 hover:text-white"
                    >
                      Cecotec
                    </Link>
                    <Link
                      href="/jumbo"
                      className="rounded-md px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-700 hover:text-white"
                    >
                      Jumbo
                    </Link>
                    <Link
                      href="/qware"
                      className="rounded-md px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-700 hover:text-white"
                    >
                      Qware
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
  )
}