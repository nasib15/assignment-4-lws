import { heroImageData } from "../data/hero-image-data";

const HeroSection = () => {
  return (
    <>
      <div className="relative overflow-hidden bg-white">
        <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-lg">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Summer styles are finally here
              </h1>
              <p className="mt-4 text-xl text-gray-500">
                This year, our new summer collection will shelter you from the
                harsh elements of a world that doesn&apos;t care if you live or
                die.
              </p>
            </div>
            <div>
              <div className="mt-10">
                <a
                  href="#"
                  className="inline-block rounded-md border border-transparent bg-teal-600 px-8 py-3 text-center font-medium text-white hover:bg-teal-700"
                >
                  Shop Collection
                </a>
              </div>

              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
              >
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                        <img
                          src="https://plus.unsplash.com/premium_photo-1669688174622-0393f5c6baa2?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://plus.unsplash.com/premium_photo-1687989650785-7edeaaddc7a7?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      {heroImageData.slice(2, 5).map((image) => (
                        <div
                          className="h-64 w-44 overflow-hidden rounded-lg"
                          key={image.id}
                        >
                          <img
                            src={image.url}
                            alt={`hero-image-${image.id}`}
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      ))}
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      {heroImageData.slice(5, 8).map((image) => (
                        <div
                          className="h-64 w-44 overflow-hidden rounded-lg"
                          key={image.id}
                        >
                          <img
                            src={image.url}
                            alt={`hero-image-${image.id}`}
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default HeroSection;
