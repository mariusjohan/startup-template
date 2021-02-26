<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="bg-gradient-to-r from-primary-600 to-secondary-500">
    <div class="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
      <div class="sm:flex items-center justify-between flex-wrap">
        <div class="flex-1 flex items-center">
          <span class="flex p-2 rounded-lg bg-primary-700">
            <!-- Heroicon name: outline/speakerphone -->
            <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
            </svg>
          </span>
          <p class="ml-3 font-medium text-white">
            <span class="md:hidden">
              We announced a new product!
            </span>
            <span class="hidden md:inline">
              Big news! We're excited to announce a brand new product.
            </span>
          </p>
        </div>
        <div class="block order-3 mt-2 sm:flex-shrink-0 sm:order-2 sm:mt-0">
          <a href="#" class="flex items-center justify-center px-4 py-2 rounded font-medium bg-white hover:bg-primary-100 text-primary-500 hover:text-primary-700">
            Learn more
          </a>
        </div>
      </div>
    </div>
  </div>

  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="bg-gradient-to-t from-secondary-100">
    <div class="bg-gradient-to-l from-white">
      <div class="relative">
        <div class="max-w-7xl mx-auto px-4 sm:px-6">
          <div class="flex items-center py-3 space-x-6">
            <div class="justify-start lg:w-0 md:flex-1">
              <a href="#">
                <span class="sr-only">Workflow</span>
                <img class="hidden lg:block h-8 w-auto sm:h-8" src="https://raw.githubusercontent.com/sorcely/app/b9a12629bfbd8e0d7b6f41d624d5c22dfbf547a7/static/img/large/logo-dark.svg" alt="">
                <img class="block lg:hidden h-8 w-auto sm:h-8"
                  src="https://raw.githubusercontent.com/sorcely/app/b9a12629bfbd8e0d7b6f41d624d5c22dfbf547a7/static/img/logo-dark.svg"
                  alt="">
              </a>
            </div>
            <nav class="hidden md:flex justify-end md:space-x-0 lg:space-x-6">
              <a href="#" class="text-base font-medium px-3 py-1 rounded-lg hover:bg-gray-100 text-gray-500">
                Feautures
              </a>
              <a href="#" class="text-base font-medium px-3 py-1 rounded-lg hover:bg-gray-100 text-gray-500">
                Pricing
              </a>
              <a href="#" class="text-base font-medium px-3 py-1 rounded-lg hover:bg-gray-100 text-gray-500">
                Docs
              </a>
              <a href="#" class="text-base font-medium px-3 py-1 rounded-lg hover:bg-gray-100 text-gray-500">
                Company
              </a>
            </nav>
            <div class="flex items-center justify-end flex-1 lg:w-0 space-x-3">
              <a href="#" class="whitespace-nowrap text-base font-medium px-6 py-2 rounded text-secondary-500 hover:text-secondary-600 bg-gradient-to-t from-secondary-100 hover:from-secondary-200 hover:to-secondary-50 border border-secondary-500">
                Log in
              </a>
              <span class="text-gray-400">or</span>
              <a href="#" class="whitespace-nowrap text-base font-medium px-6 py-2 rounded text-primary-500 hover:text-primary-600 bg-gradient-to-t from-primary-100 hover:from-primary-200 hover:to-primary-50 border border-primary-500">
                Sign up
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="flex md:hidden justify-start max-w-7xl mx-auto px-4 py-2 sm:px-6 space-x-3">
        <a href="#" class="text-base font-medium text-gray-500 hover:text-gray-900">
          Feautures
        </a>
        <a href="#" class="text-base font-medium text-gray-500 hover:text-gray-900">
          Pricing
        </a>
        <a href="#" class="text-base font-medium text-gray-500 hover:text-gray-900">
          Docs
        </a>
        <a href="#" class="text-base font-medium text-gray-500 hover:text-gray-900">
          Company
        </a>
      </div>

      <main class="py-10 mx-auto max-w-7xl px-4 sm:pt-12 sm:px-6 md:pt-16 lg:py-28 lg:px-8 xl:pt-28">
        <div class="md:text-center">
          <h1 class="text-6xl tracking-tight font-extrabold text-gray-900 md:text-6xl xl:text-7xl">
            <span class="block sm:inline">Awesome </span>
            <span class="block font-mono font-light lg:inline">tech</span>
            <span class="block sm:inline"> company</span>
          </h1>
          <p class="mt-3 text-base text-gray-600 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl">
            Our revolutionary algorithms helps you improve your life in a order of magnitude
          </p>
        </div>
        <div class="flex md:justify-center mt-5">
          <div class="inline-flex rounded-l-md text-primary-500 hover:text-primary-500 bg-gradient-to-t from-primary-100 hover:to-primary-50 hover:from-primary-200 border-l border-t border-b border-primary-500 hover:border-primary-600">
            <a href="#" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium">
              Get started
            </a>
          </div>
          <div class="inline-flex rounded-r-md text-secondary-500 hover:text-secondary-500 bg-gradient-to-t from-secondary-100 hover:to-secondary-50 hover:from-secondary-200 border-r border-t border-b border-secondary-500 hover:border-secondary-600">
            <a href="#" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium">
            Learn more
            </a>
          </div>
        </div>
      </main>
    </div>
  </div>

  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="py-12 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="lg:text-center">
        <h2 class="text-base text-primary-600 font-semibold tracking-wide uppercase">Features</h2>
        <h3 class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          A better way to do X
        </h3>
        <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
          Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.
        </p>
      </div>

      <div class="mt-10">
        <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
          <div class="flex">
            <div class="flex-shrink-0">
              <div class="flex items-center justify-center h-12 w-12 rounded-md text-primary-500 bg-gradient-to-t from-primary-100 border border-primary-500">
                <!-- Heroicon name: outline/globe-alt -->
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
            </div>
            <div class="ml-4">
              <h4 class="text-lg leading-6 font-medium text-gray-900">
                Competitive exchange rates
              </h4>
              <p class="mt-2 text-base text-gray-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
              </p>
            </div>
          </div>

          <div class="flex">
            <div class="flex-shrink-0">
              <div class="flex items-center justify-center h-12 w-12 rounded-md text-primary-500 bg-gradient-to-t from-primary-100 border border-primary-500">
                <!-- Heroicon name: outline/scale -->
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
            </div>
            <div class="ml-4">
              <h4 class="text-lg leading-6 font-medium text-gray-900">
                No hidden fees
              </h4>
              <p class="mt-2 text-base text-gray-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
              </p>
            </div>
          </div>

          <div class="flex">
            <div class="flex-shrink-0">
              <div class="flex items-center justify-center h-12 w-12 rounded-md text-primary-500 bg-gradient-to-t from-primary-100 border border-primary-500">
                <!-- Heroicon name: outline/lightning-bolt -->
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
            <div class="ml-4">
              <h4 class="text-lg leading-6 font-medium text-gray-900">
                Transfers are instant
              </h4>
              <p class="mt-2 text-base text-gray-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
              </p>
            </div>
          </div>

          <div class="flex">
            <div class="flex-shrink-0">
              <div class="flex items-center justify-center h-12 w-12 rounded-md text-primary-500 bg-gradient-to-t from-primary-100 border border-primary-500">
                <!-- Heroicon name: outline/annotation -->
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
              </div>
            </div>
            <div class="ml-4">
              <h4 class="text-lg leading-6 font-medium text-gray-900">
                Mobile notifications
              </h4>
              <p class="mt-2 text-base text-gray-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
              </p>
            </div>
          </div>
        </dl>
      </div>
    </div>
  </div>

  <div class="py-12 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="lg:text-center">
        <h2 class="text-base text-secondary-600 font-semibold tracking-wide uppercase">Pricing</h2>
        <h3 class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Get started for FREE
        </h3>
        <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
          Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in
          accusamus quisquam.
        </p>
      </div>

      <div class="mt-10">
        <dl class="space-y-10 md:space-y-0 md:grid sm:grid-cols-2 lg:grid-cols-3 md:gap-x-8 md:gap-y-10">
          <div class="p-3 rounded-lg bg-white border border-gray-200">
            <h3 class="text-2xl text-gray-800 text-center font-semibold">Free</h3>
            <p class="block my-4 text-md text-gray-500">All the basic features for starting a new business</p>
            <h3 class="text-4xl mt-4 mb-8 text-gray-800 font-bold">
              $0<span class="text-xl font-medium">/mo</span>
            </h3>
            <hr class="mb-5 border-gray-200">
            <div class="space-y-3">
              <div class="flex">
                <svg class="h-6 w-6 text-primary-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                  aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
                <p class="ml-2">Feature 1</p>
              </div>
              <div class="flex">
                <svg class="h-6 w-6 text-primary-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
                <p class="ml-2">Choose whatever icon you want</p>
              </div>
              <div class="flex">
                <svg class="h-6 w-6 text-primary-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
                <p class="ml-2">Feature 3</p>
              </div>
            </div>
          </div>

          <div class="p-3 rounded-lg bg-gradient-to-t from-secondary-50 border border-secondary-200">
            <h3 class="text-2xl text-secondary-700 text-center font-semibold">Hobby</h3>
            <p class="block my-4 text-md text-secondary-600">All the basic features for starting a new business</p>
            <h3 class="text-4xl mt-4 mb-8 text-secondary-700 font-bold">
              $50<span class="text-xl font-medium">/mo</span>
            </h3>
            <hr class="mb-5 border-secondary-200">
            <div class="space-y-3 text-secondary-600">
              <div class="flex">
                <svg class="h-6 w-6 text-secondary-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
                </svg>
                <p class="ml-2 font-semibold">Everything from Free</p>
              </div>
              <div class="flex">
                <svg class="h-6 w-6 text-secondary-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
                <p class="ml-2">Feature 1</p>
              </div>
              <div class="flex">
                <svg class="h-6 w-6 text-secondary-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
                <p class="ml-2">Choose whatever icon you want</p>
              </div>
              <div class="flex">
                <svg class="h-6 w-6 text-secondary-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
                <p class="ml-2">Feature 3</p>
              </div>
            </div>
          </div>

          <div class="p-3 rounded-lg bg-white border border-gray-200">
            <h3 class="text-2xl text-gray-800 text-center font-semibold">Enterprise</h3>
            <p class="block my-4 text-md text-gray-500">All the basic features for starting a new business</p>
            <h3 class="text-4xl mt-4 mb-8 text-gray-800 font-bold">
              $250<span class="text-xl font-medium">/mo</span>
            </h3>
            <hr class="mb-5 border-gray-200">
            <div class="space-y-3">
              <div class="flex">
                <svg class="h-6 w-6 text-primary-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
                </svg>
                <p class="ml-2 font-semibold">Everything from Hobby</p>
              </div>
              <div class="flex">
                <svg class="h-6 w-6 text-primary-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
                <p class="ml-2">Feature 1</p>
              </div>
              <div class="flex">
                <svg class="h-6 w-6 text-primary-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
                <p class="ml-2">Choose whatever icon you want</p>
              </div>
              <div class="flex">
                <svg class="h-6 w-6 text-primary-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
                <p class="ml-2">Feature 3</p>
              </div>
              <div class="flex">
                <svg class="h-6 w-6 text-primary-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
                <p class="ml-2">Feature 4</p>
              </div>
            </div>
          </div>
        </dl>
      </div>
    </div>
  </div>

  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="bg-gradient-to-r from-primary-800 to-secondary-600">
    <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
      <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        <span class="block text-primary-300">Ready to dive in?</span>
        <span class="block text-white">Start your free trial today.</span>
      </h2>
      <div class="flex mt-5">
        <div class="inline-flex sm:px-5 rounded-md bg-white hover:bg-primary-100 text-primary-500 hover:text-primary-700">
          <a href="#" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium ">
            Get started
          </a>
        </div>
        <div class="ml-5 inline-flex sm:px-5 sm:py-1 rounded-md bg-transparent text-white border hover:text-secondary-300 hover:border-secondary-300">
          <a href="#" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium ">
            Learn more
          </a>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
// import index from './components/index.vue'

// export default {
//   name: 'App',
//   components: {
//     index
//   }
// }
</script>

<style src="./assets/dist.css"></style>
