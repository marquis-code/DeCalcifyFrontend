<template>
  <div class="font-sans text-gray-800">
    <!-- Navigation -->
    <nav 
      class="fixed w-full z-50 transition-all duration-300"
      :class="{ 'bg-white shadow-md': scrolled, 'bg-transparent': !scrolled }"
    >
      <div class="container mx-auto px-4 py-3 flex justify-between items-center">
        <div class="flex items-center">
          <div class="w-10 h-10 mr-2">
            <SingleLottie :animation="logoAnimation" />
          </div>
          <span class="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-blue-600">DeCalcify</span>
        </div>
        
        <div class="hidden md:flex space-x-8">
          <a v-for="(item, index) in navItems" :key="index" 
             :href="item.link" 
             class="relative text-gray-700 hover:text-teal-500 transition-colors duration-300 group">
            {{ item.name }}
            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>
        
        <div class="flex items-center space-x-4">
          <button class="hidden md:block px-4 py-2 rounded-full border border-teal-500 text-teal-500 hover:bg-teal-50 transition-colors duration-300">
            Login
          </button>
          <button class="px-4 py-2 hidden md:block rounded-full bg-gradient-to-r from-teal-500 to-blue-600 text-white hover:shadow-lg transition-all duration-300 transform hover:scale-105">
            Get Started
          </button>
          <button @click="mobileMenuOpen = !mobileMenuOpen" class="md:hidden pr-6">
            <div class="w-6 h-6">
              <!-- openeee -->
              <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#4a4a4a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 9.5H7M21 4.5H3M21 14.5H3M21 19.5H7"/></svg>
            </div>
          </button>
        </div>
      </div>
      
      <!-- Mobile menu -->
      <div 
        v-show="mobileMenuOpen" 
        class="md:hidden absolute z-50 w-full bg-white shadow-lg py-4 px-4 transition-all duration-300"
        :class="{ 'opacity-100 translate-y-0': mobileMenuOpen, 'opacity-0 -translate-y-10 pointer-events-none': !mobileMenuOpen }"
      >
        <div class="flex flex-col space-y-4">
          <a @click="mobileMenuOpen = false" v-for="(item, index) in navItems" :key="index" 
             :href="item.link" 
             class="text-gray-700 z-50 hover:text-teal-500 transition-colors duration-300 py-2 border-b border-gray-100">
            {{ item.name }}
          </a>
          <button class="px-4 py-2 rounded-full border border-teal-500 text-teal-500 hover:bg-teal-50 transition-colors duration-300 w-full">
            Login
          </button>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
  
    <section class="min-h-screen flex items-center pt-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden relative">
      <div class="absolute w-full h-full">
        <div class="absolute top-20 right-0 w-64 h-64 bg-teal-100 rounded-full filter blur-3xl opacity-20"></div>
        <div class="absolute bottom-20 left-10 w-72 h-72 bg-blue-100 rounded-full filter blur-3xl opacity-20"></div>
      </div>
      
      <div class="container mx-auto px-4 lg:py-20 flex flex-col-reverse md:flex-row items-center justify-between relative z-10">
        <div class="md:w-1/2 lg:order-1 order-2 mt-10 md:mt-0" v-motion :initial="{ opacity: 0, x: -100 }" :visible="{ opacity: 1, x: 0, transition: { duration: 1000 } }">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Automate Your <span class="bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-blue-600">Decalcification</span> Process
          </h1>
          <p class="text-lg text-gray-600 mb-8">
            Transform your medical laboratory workflow with our intelligent automation solution. Save time, reduce errors, and improve efficiency.
          </p>
          <div class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button class="px-8 py-3 rounded-full bg-gradient-to-r from-teal-500 to-blue-600 text-white hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              Start Free Trial
            </button>
            <button class="px-8 py-3 rounded-full border border-gray-300 hover:border-teal-500 hover:text-teal-500 transition-colors duration-300 flex items-center justify-center">
              <span class="mr-2">Watch Demo</span>
              <div class="w-5 h-5">
                <lottie-player
                  :src="playAnimation"
                  background="transparent"
                  speed="1"
                  class="w-full h-full"
                  loop
                  autoplay
                ></lottie-player>
              </div>
            </button>
          </div>
          <div class="mt-10 flex items-center">
            <div class="flex -space-x-2">
              <img v-for="i in ['https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80', 'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80', 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80', 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80']" :key="i" :src="i" alt="User" class="w-10 h-10 rounded-full border-2 border-white" />
            </div>
            <div class="ml-4">
              <div class="flex items-center">
                <div class="flex">
                  <span v-for="i in 5" :key="i" class="text-yellow-400">★</span>
                </div>
                <span class="ml-1 text-gray-600">5.0</span>
              </div>
              <p class="text-sm text-gray-500">From 200+ reviews</p>
            </div>
          </div>
        </div>
        
        <div class="md:w-1/2 flex lg:order-2 order-1 pt-20 lg:pt-0 justify-center" v-motion :initial="{ opacity: 0, scale: 0.8 }" :visible="{ opacity: 1, scale: 1, transition: { duration: 1000 } }">
          <div class="w-full max-w-lg">
            <Widget />
            <!-- <SingleLottie :animation="heroAnimation" width="300px" height="200px" /> -->
            <!-- <lottie-player
              :src="heroAnimation"
              background="transparent"
              speed="1"
              class="w-full"
              loop
              autoplay
            ></lottie-player> -->
          </div>
        </div>
      </div>
      
      <!-- <div class="absolute bottom-0 left-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#f3f4f6" fill-opacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,224C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div> -->
     <div>
      <!-- <DeCalcifyWidget /> -->
     </div>
    </section>

    <!-- Features Section -->
       <!-- Features Section -->
       <section id="features" class="py-20 bg-gray-50">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16" v-motion :initial="{ opacity: 0, y: 50 }" :visible="{ opacity: 1, y: 0, transition: { duration: 800 } }">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">Powerful Features</h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Our comprehensive solution streamlines the entire decalcification process in your laboratory
        </p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(feature, index) in features"
          :key="index"
          class="bg-white rounded-xl shadow-lg p-6 transition-all duration-500 hover:shadow-xl hover:-translate-y-2"
          v-motion
          :initial="{ opacity: 0, y: 100 }"
          :visible="{ opacity: 1, y: 0, transition: { delay: 100 * index, duration: 800 } }"
        >
        <div class="w-20 h-20 mb-6 mx-auto">
          <ClientOnly>
            <LottieAnimation :animation="feature.animation" />
            <template #fallback>
              <div class="w-full h-full bg-gray-200 animate-pulse rounded-full"></div>
            </template>
          </ClientOnly>
        </div>
  <h3 class="text-xl font-bold mb-3">{{ feature.title }}</h3>
  <p class="text-gray-600">{{ feature.description }}</p>
        </div>
      </div>
      
      <div class="mt-16 text-center">
        <button class="px-8 py-3 rounded-full bg-gradient-to-r from-teal-500 to-blue-600 text-white hover:shadow-lg transition-all duration-300 transform hover:scale-105">
          Explore All Features
        </button>
      </div>
    </div>
  </section>

    <!-- About Us Section -->
    <section id="about" class="py-20">
      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row items-center">
          <div class="md:w-1/2 mb-10 md:mb-0" v-motion :initial="{ opacity: 0, x: -100 }" :visible="{ opacity: 1, x: 0, transition: { duration: 1000 } }">
            <div class="w-full max-w-lg mx-auto">
              <ClientOnly>
                  <SingleLottie :animation="aboutAnimation" />
                  <template #fallback>
                    <div class="w-full h-full bg-gray-200 animate-pulse rounded-full"></div>
                  </template>
                </ClientOnly>
            </div>
          </div>
          
          <div class="md:w-1/2 md:pl-10" v-motion :initial="{ opacity: 0, x: 100 }" :visible="{ opacity: 1, x: 0, transition: { duration: 1000 } }">
            <h2 class="text-3xl md:text-4xl font-bold mb-6">About DeCalcify</h2>
            <p class="text-lg text-gray-600 mb-6">
              Founded by a team of Medical Laboratory Scientists and Software Engineers, DeCalcify was born from the need to modernize and streamline laboratory processes.
            </p>
            <p class="text-lg text-gray-600 mb-6">
              Our mission is to revolutionize medical laboratories by automating time-consuming manual processes, allowing professionals to focus on what matters most: accurate diagnostics and patient care.
            </p>
            <div class="grid grid-cols-2 gap-6 mt-10">
              <div class="text-center">
                <div class="text-4xl font-bold text-teal-500 mb-2 counter" data-target="500">0</div>
                <p class="text-gray-600">Labs Using DeCalcify</p>
              </div>
              <div class="text-center">
                <div class="text-4xl font-bold text-blue-600 mb-2 counter" data-target="10000">0</div>
                <p class="text-gray-600">Samples Processed Daily</p>
              </div>
              <div class="text-center">
                <div class="text-4xl font-bold text-teal-500 mb-2 counter" data-target="98">0</div>
                <p class="text-gray-600">Accuracy Rate (%)</p>
              </div>
              <div class="text-center">
                <div class="text-4xl font-bold text-blue-600 mb-2 counter" data-target="65">0</div>
                <p class="text-gray-600">Time Saved (%)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <TeamCarousel id="team" />

    <!-- How to Use Section -->
    <section id="how-it-works" class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16" v-motion :initial="{ opacity: 0, y: 50 }" :visible="{ opacity: 1, y: 0, transition: { duration: 800 } }">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">How DeCalcify Works</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Our intuitive platform makes decalcification automation simple and efficient
          </p>
        </div>
        
        <div class="relative">
          <!-- Progress line -->
          <div class="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200 hidden md:block"></div>
          
          <div class="space-y-20">
            <div 
              v-for="(step, index) in steps" 
              :key="index"
              class="flex flex-col md:flex-row items-center"
              :class="{ 'md:flex-row-reverse': index % 2 !== 0 }"
              v-motion
              :initial="{ opacity: 0, y: 100 }"
              :visible="{ opacity: 1, y: 0, transition: { delay: 200 * index, duration: 800 } }"
            >
              <div class="md:w-1/2 mb-6 md:mb-0 flex justify-center">
                <div class="w-full max-w-md">
                  <ClientOnly>
                      <SingleLottie :animation="step.animation" />
                      <template #fallback>
                        <div class="w-full h-full bg-gray-200 animate-pulse rounded-full"></div>
                      </template>
                    </ClientOnly>
                  <!-- <lottie-player
                    :src="step.animation"
                    background="transparent"
                    speed="1"
                    class="w-full"
                    loop
                    autoplay
                  ></lottie-player> -->
                </div>
              </div>
              
              <div class="md:w-1/2 md:px-10 relative">
                <!-- Step number circle -->
                <div class="absolute top-0 left-1/2 md:left-auto md:top-1/2 transform -translate-x-1/2 md:-translate-x-0 md:-translate-y-1/2 w-10 h-10 rounded-full bg-gradient-to-r from-teal-500 to-blue-600 text-white flex items-center justify-center font-bold z-10"
                  :class="{ 'md:left-0 md:-left-5': index % 2 === 0, 'md:right-0 md:-right-5 md:left-auto': index % 2 !== 0 }">
                  {{ index + 1 }}
                </div>
                
                <div class="text-center md:text-left" :class="{ 'md:text-right': index % 2 !== 0 }">
                  <h3 class="text-2xl font-bold mb-4">{{ step.title }}</h3>
                  <p class="text-gray-600">{{ step.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing Section -->
    <section id="pricing" class="py-20">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16" v-motion :initial="{ opacity: 0, y: 50 }" :visible="{ opacity: 1, y: 0, transition: { duration: 800 } }">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the plan that fits your laboratory's needs
          </p>
          
          <div class="flex justify-center mt-8">
            <div class="flex items-center bg-gray-100 p-1 rounded-full">
              <button 
                @click="billingInterval = 'monthly'" 
                class="px-4 py-2 rounded-full text-sm transition-all duration-300"
                :class="billingInterval === 'monthly' ? 'bg-white shadow-md text-teal-600' : 'text-gray-600'"
              >
                Monthly
              </button>
              <button 
                @click="billingInterval = 'annual'" 
                class="px-4 py-2 rounded-full text-sm transition-all duration-300"
                :class="billingInterval === 'annual' ? 'bg-white shadow-md text-teal-600' : 'text-gray-600'"
              >
                Annual <span class="text-xs text-teal-500 font-medium">Save 20%</span>
              </button>
            </div>
          </div>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div 
            v-for="(plan, index) in plans" 
            :key="index"
            class="bg-white rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-xl group"
            :class="{ 'border-2 border-teal-500 shadow-lg transform md:scale-105': plan.popular, 'border border-gray-200': !plan.popular }"
            v-motion
            :initial="{ opacity: 0, y: 100 }"
            :visible="{ opacity: 1, y: 0, transition: { delay: 100 * index, duration: 800 } }"
          >
            <div v-if="plan.popular" class="bg-teal-500 text-white text-center py-2 text-sm font-medium">
              Most Popular
            </div>
            
            <div class="p-8">
              <h3 class="text-2xl font-bold mb-4">{{ plan.name }}</h3>
              <div class="flex items-end mb-6">
                <span class="text-4xl font-bold">{{ billingInterval === 'monthly' ? plan.monthlyPrice : plan.annualPrice }}</span>
                <span class="text-gray-500 ml-2">/ month</span>
              </div>
              <p class="text-gray-600 mb-6">{{ plan.description }}</p>
              
              <ul class="space-y-3 mb-8">
                <li v-for="(feature, i) in plan.features" :key="i" class="flex items-start">
                  <svg class="w-5 h-5 text-teal-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>{{ feature }}</span>
                </li>
              </ul>
              
              <button 
                class="w-full py-3 rounded-lg text-center transition-all duration-300 font-medium"
                :class="plan.popular ? 'bg-gradient-to-r from-teal-500 to-blue-600 text-white hover:shadow-lg' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'"
              >
                {{ plan.popular ? 'Get Started' : 'Choose Plan' }}
              </button>
            </div>
          </div>
        </div>
        
        <div class="mt-12 text-center text-gray-600">
          Need a custom plan for your enterprise? <a href="#" class="text-teal-500 font-medium hover:underline">Contact us</a>
        </div>
      </div>
    </section>

    <!-- Trial Section -->
    <section id="contact-us" class="py-20 bg-gradient-to-br from-teal-500 to-blue-600 text-white">
      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row items-center justify-between">
          <div class="md:w-1/2 mb-10 md:mb-0" v-motion :initial="{ opacity: 0, x: -100 }" :visible="{ opacity: 1, x: 0, transition: { duration: 1000 } }">
            <h2 class="text-3xl md:text-4xl font-bold mb-6">Start Your Free Trial Today</h2>
            <p class="text-xl opacity-90 mb-8">
              Experience the power of DeCalcify with a 14-day free trial. No credit card required.
            </p>
            <div class="bg-white/10 backdrop-blur-md rounded-lg p-6 max-w-md">
              <div class="space-y-4">
                <div>
                  <label class="block text-sm font-medium mb-1">Full Name</label>
                  <input type="text" class="w-full px-4 py-3.5 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-white/50" placeholder="John Doe" />
                </div>
                <div>
                  <label class="block text-sm font-medium mb-1">Email Address</label>
                  <input type="email" class="w-full px-4 py-3.5 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-white/50" placeholder="john@example.com" />
                </div>
                <div>
                  <label class="block text-sm font-medium mb-1">Password</label>
                  <input type="password" class="w-full px-4 py-3.5 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-white/50" placeholder="••••••••" />
                </div>
                <div>
                  <label class="block text-sm font-medium mb-1">Laboratory Name</label>
                  <input type="text" class="w-full px-4 py-3.5 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-white/50" placeholder="Medical Lab Inc." />
                </div>
                <button class="w-full py-3 rounded-lg bg-white text-teal-600 font-medium hover:shadow-lg transition-all duration-300">
                  Create Free Account
                </button>
              </div>
              <div class="mt-4 text-sm text-center opacity-80">
                Already have an account? <a href="#" class="underline hover:text-white">Log in</a>
              </div>
            </div>
          </div>


             <div class="flex items-center mb-4">
                <SingleLottie animation="https://assets5.lottiefiles.com/packages/lf20_nw19osms.json" />
            </div>
        
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white py-12">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <p class="text-gray-400 mb-4">
              Automating decalcification processes for Medical Laboratories Worldwide.
            </p>
            <div class="flex space-x-4">
              <a href="#" class="text-gray-400 hover:text-white transition-colors duration-300">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 5.16c-.94.42-1.95.7-3 .82 1.08-.65 1.9-1.68 2.3-2.9-1.03.61-2.17 1.06-3.38 1.3C16.95 3.37 15.8 3 14.5 3c-2.45 0-4.44 1.99-4.44 4.44 0 .35.04.69.12 1.02-3.7-.19-6.97-1.96-9.16-4.65-.38.66-.6 1.42-.6 2.23 0 1.54.78 2.9 1.97 3.7-.73-.02-1.42-.22-2.02-.55v.06c0 2.15 1.53 3.94 3.56 4.35-.37.1-.76.15-1.16.15-.28 0-.56-.03-.83-.08.57 1.76 2.21 3.04 4.15 3.08-1.52 1.19-3.44 1.9-5.52 1.9-.36 0-.71-.02-1.06-.06 1.97 1.26 4.3 2 6.8 2 8.16 0 12.63-6.76 12.63-12.63 0-.19 0-.38-.01-.57 1.03-.74 1.92-1.67 2.63-2.72z"></path>
                </svg>
              </a>
              <a href="#" class="text-gray-400 hover:text-white transition-colors duration-300">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17h-2v-2h2v2zm2.07-7.75l-.9.92c-.5.51-.86.97-1.04 1.69-.08.32-.13.68-.13 1.14h-2v-.5c0-.46.08-.9.22-1.31.2-.58.53-1.1.95-1.52l1.24-1.26c.46-.44.68-1.1.55-1.8-.13-.72-.69-1.33-1.39-1.53-1.11-.31-2.14.32-2.47 1.27-.12.35-.36.63-.69.63-.18 0-.34-.09-.44-.24-.13-.19-.14-.49-.03-.68.45-1.24 1.7-2.03 2.96-2.03 1.03 0 2.03.51 2.61 1.43.36.58.51 1.24.42 1.89-.09.63-.37 1.12-.77 1.52z"></path>
                </svg>
              </a>
              <a href="#" class="text-gray-400 hover:text-white transition-colors duration-300">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm-5 14h-2v-4h2v4zm0-6h-2V7h2v4z"></path>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 class="text-lg font-semibold mb-4">Product</h3>
            <ul class="space-y-2">
              <li><a href="#" class="text-gray-400 hover:text-white transition-colors duration-300">Features</a></li>
              <li><a href="#" class="text-gray-400 hover:text-white transition-colors duration-300">Pricing</a></li>
              <li><a href="#" class="text-gray-400 hover:text-white transition-colors duration-300">Case Studies</a></li>
              <li><a href="#" class="text-gray-400 hover:text-white transition-colors duration-300">Documentation</a></li>
              <li><a href="#" class="text-gray-400 hover:text-white transition-colors duration-300">API Reference</a></li>
            </ul>
          </div>
          
          <div>
            <h3 class="text-lg font-semibold mb-4">Company</h3>
            <ul class="space-y-2">
              <li><a href="#" class="text-gray-400 hover:text-white transition-colors duration-300">About Us</a></li>
              <li><a href="#" class="text-gray-400 hover:text-white transition-colors duration-300">Careers</a></li>
              <li><a href="#" class="text-gray-400 hover:text-white transition-colors duration-300">Blog</a></li>
              <li><a href="#" class="text-gray-400 hover:text-white transition-colors duration-300">Press</a></li>
              <li><a href="#" class="text-gray-400 hover:text-white transition-colors duration-300">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 class="text-lg font-semibold mb-4">Stay Updated</h3>
            <p class="text-gray-400 mb-4">Subscribe to our newsletter for the latest updates.</p>
            <div class="flex">
              <input type="email" placeholder="Your email" class="px-4 py-3.5 rounded-l-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500 text-white placeholder-gray-500 flex-1" />
              <button class="px-4 py-2 rounded-r-lg bg-teal-500 text-white hover:bg-teal-600 transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div class="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p class="text-gray-400 text-sm">© {{ new Date().getFullYear() }} DeCalcify. All rights reserved.</p>
          <div class="flex space-x-6 mt-4 md:mt-0">
            <a href="#" class="text-gray-400 hover:text-white transition-colors duration-300 text-sm">Privacy Policy</a>
            <a href="#" class="text-gray-400 hover:text-white transition-colors duration-300 text-sm">Terms of Service</a>
            <a href="#" class="text-gray-400 hover:text-white transition-colors duration-300 text-sm">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'
// import { LottiePlayer } from '@lottiefiles/vue-lottie-player'
import { useMouse } from '@vueuse/core'

// Import Lottie animation data
const calculationAnimationData = ref(null)
const infoAnimationData = ref(null)
const fluidAnimationData = ref(null)
const percentageAnimationData = ref(null)
const calendarAnimationData = ref(null)
const loadingAnimationData = ref(null)
const successAnimationData = ref(null)
const timerAnimationData = ref(null)

// Navigation items
const navItems = [
  { name: 'Features', link: '#features' },
  { name: 'How It Works', link: '#how-it-works' },
  { name: 'Pricing', link: '#pricing' },
  { name: 'About', link: '#about' },
  { name: 'Team', link: '#team' },
  { name: 'Contact Us', link: '#contact-us' }
]

// Mobile menu state
const mobileMenuOpen = ref(false)
const menuAnimationRef = ref<any>(null)

watch(mobileMenuOpen, (newVal) => {
  if (menuAnimationRef.value) {
    if (newVal) {
      menuAnimationRef.value.setDirection(1)
      menuAnimationRef.value.play()
    } else {
      menuAnimationRef.value.setDirection(-1)
      menuAnimationRef.value.play()
    }
  }
})

// Scroll state
const scrolled = ref(false)

const handleScroll = () => {
  scrolled.value = window.scrollY > 50
}

// Features data with colorful and illustrative animations
const features = [
  {
    title: 'Automated Workflow',
    description: 'Streamline your decalcification process with intelligent automation that adapts to your laboratory needs.',
    animation: 'https://assets5.lottiefiles.com/packages/lf20_qdbb21wb.json'
  },
  {
    title: 'Real-time Monitoring',
    description: 'Track the progress of your samples in real-time with detailed analytics and notifications.',
    animation: 'https://assets2.lottiefiles.com/packages/lf20_ydo1amjm.json'
  },
  {
    title: 'Smart Scheduling',
    description: 'Optimize your laboratory resources with AI-powered scheduling that maximizes efficiency.',
    animation: 'https://assets7.lottiefiles.com/packages/lf20_Cc8Bpg.json'
  },
  {
    title: 'Quality Control',
    description: 'Ensure consistent results with built-in quality control measures and validation protocols.',
    animation: 'https://assets3.lottiefiles.com/private_files/lf30_qgah66oi.json'
  },
  {
    title: 'Comprehensive Reporting',
    description: 'Generate detailed reports with just a few clicks, perfect for audits and compliance requirements.',
    animation: 'https://assets10.lottiefiles.com/packages/lf20_49rdyysj.json'
  },
  {
    title: 'Seamless Integration',
    description: 'Easily integrate with your existing laboratory information systems and equipment.',
     animation: 'https://assets5.lottiefiles.com/packages/lf20_qdbb21wb.json'
  }
]

// const features = [
//   {
//     title: 'Automated Workflow',
//     description: 'Streamline your decalcification process with intelligent automation that adapts to your laboratory needs.',
//     animation: 'https://assets5.lottiefiles.com/packages/lf20_qdbb21wb.json' // Colorful automation/robot animation
//   },
//   {
//     title: 'Real-time Monitoring',
//     description: 'Track the progress of your samples in real-time with detailed analytics and notifications.',
//     animation: 'https://assets2.lottiefiles.com/packages/lf20_ydo1amjm.json' // Animated monitoring dashboard
//   },
//   {
//     title: 'Smart Scheduling',
//     description: 'Optimize your laboratory resources with AI-powered scheduling that maximizes efficiency.',
//     animation: 'https://assets7.lottiefiles.com/packages/lf20_Cc8Bpg.json' // Calendar/scheduling animation
//   },
//   {
//     title: 'Quality Control',
//     description: 'Ensure consistent results with built-in quality control measures and validation protocols.',
//     animation: 'https://assets3.lottiefiles.com/private_files/lf30_qgah66oi.json' // Quality check/verification animation
//   },
//   {
//     title: 'Comprehensive Reporting',
//     description: 'Generate detailed reports with just a few clicks, perfect for audits and compliance requirements.',
//     animation: 'https://assets10.lottiefiles.com/packages/lf20_49rdyysj.json' // Reports/analytics animation
//   },
//   {
//     title: 'Seamless Integration',
//     description: 'Easily integrate with your existing laboratory information systems and equipment.',
//     animation: 'https://assets5.lottiefiles.com/packages/lf20_kszbwgxt.json' // Connection/integration animation
//   }
// ]

// // Features data
// const features = [
//   {
//     title: 'Automated Workflow',
//     description: 'Streamline your decalcification process with intelligent automation that adapts to your laboratory needs.',
//     animation: 'https://assets10.lottiefiles.com/packages/lf20_yvkzunr1.json'
//   },
//   {
//     title: 'Real-time Monitoring',
//     description: 'Track the progress of your samples in real-time with detailed analytics and notifications.',
//     animation: 'https://assets5.lottiefiles.com/packages/lf20_qp1q7mct.json'
//   },
//   {
//     title: 'Smart Scheduling',
//     description: 'Optimize your laboratory resources with AI-powered scheduling that maximizes efficiency.',
//     animation: 'https://assets9.lottiefiles.com/packages/lf20_5ngs2ksb.json'
//   },
//   {
//     title: 'Quality Control',
//     description: 'Ensure consistent results with built-in quality control measures and validation protocols.',
//     animation: 'https://assets6.lottiefiles.com/packages/lf20_vxnelydc.json'
//   },
//   {
//     title: 'Comprehensive Reporting',
//     description: 'Generate detailed reports with just a few clicks, perfect for audits and compliance requirements.',
//     animation: 'https://assets3.lottiefiles.com/packages/lf20_qmfs6c3i.json'
//   },
//   {
//     title: 'Seamless Integration',
//     description: 'Easily integrate with your existing laboratory information systems and equipment.',
//     animation: 'https://assets8.lottiefiles.com/packages/lf20_3vbOcw.json'
//   }
// ]

// How it works steps
const steps = [
  {
    title: 'Connect Your Equipment',
    description: 'Easily connect DeCalcify to your existing laboratory equipment with our plug-and-play adapters.',
    animation: 'https://assets6.lottiefiles.com/packages/lf20_kkflmtur.json'
  },
  {
    title: 'Configure Your Workflow',
    description: 'Set up your custom decalcification protocols and workflows through our intuitive interface.',
    animation: 'https://assets5.lottiefiles.com/packages/lf20_yd8fbnml.json'
  },
  {
    title: 'Load Your Samples',
    description: 'Place your samples in the system and let DeCalcify handle the rest with precision and care.',
    animation: 'https://assets9.lottiefiles.com/packages/lf20_wdqlqkhq.json'
  },
  {
    title: 'Monitor Progress',
    description: 'Track the decalcification process in real-time through our dashboard or mobile app.',
    animation: 'https://assets3.lottiefiles.com/packages/lf20_qdkbuist.json'
  }
]

// Fetch Lottie animations
const fetchLottieAnimations = async () => {
try {
  const [
    calculationData,
    infoData,
    fluidData,
    percentageData,
    calendarData,
    loadingData,
    successData,
    timerData
  ] = await Promise.all([
    fetch('https://assets5.lottiefiles.com/packages/lf20_qp1q7mct.json').then(res => res.json()),
    fetch('https://assets9.lottiefiles.com/packages/lf20_nw19osms.json').then(res => res.json()),
    fetch('https://assets5.lottiefiles.com/packages/lf20_jzpjbmvd.json').then(res => res.json()),
    fetch('https://assets7.lottiefiles.com/packages/lf20_b0olen7o.json').then(res => res.json()),
    fetch('https://assets9.lottiefiles.com/packages/lf20_5e7wgehs.json').then(res => res.json()),
    fetch('https://assets5.lottiefiles.com/packages/lf20_p8bfn5to.json').then(res => res.json()),
    fetch('https://assets1.lottiefiles.com/packages/lf20_jmejybvu.json').then(res => res.json()),
    fetch('https://assets2.lottiefiles.com/packages/lf20_kcsr6fcp.json').then(res => res.json())
  ])

  calculationAnimationData.value = calculationData
  infoAnimationData.value = infoData
  fluidAnimationData.value = fluidData
  percentageAnimationData.value = percentageData
  calendarAnimationData.value = calendarData
  loadingAnimationData.value = loadingData
  successAnimationData.value = successData
  timerAnimationData.value = timerData
} catch (error) {
  console.error('Error loading Lottie animations:', error)
}
}

// Rest of the script remains the same...

// Call fetchLottieAnimations on mount
onMounted(() => {
fetchLottieAnimations()
})

// Pricing plans
const billingInterval = ref('monthly')
const plans = [
  {
    name: 'Starter',
    monthlyPrice: '₦299',
    annualPrice: '₦239',
    description: 'Perfect for small laboratories processing up to 50 samples per day.',
    features: [
      'Up to 50 samples per day',
      'Basic workflow automation',
      'Email support',
      'Standard reporting',
      '1 user license'
    ],
    popular: false
  },
  {
    name: 'Professional',
    monthlyPrice: '₦599',
    annualPrice: '₦479',
    description: 'Ideal for medium-sized labs with advanced automation needs.',
    features: [
      'Up to 200 samples per day',
      'Advanced workflow automation',
      'Priority email & phone support',
      'Advanced analytics & reporting',
      '5 user licenses',
      'API access'
    ],
    popular: true
  },
  {
    name: 'Enterprise',
    monthlyPrice: '₦999',
    annualPrice: '₦799',
    description: 'Comprehensive solution for large laboratories with complex requirements.',
    features: [
      'Unlimited samples',
      'Custom workflow automation',
      '24/7 dedicated support',
      'Custom reporting & analytics',
      'Unlimited user licenses',
      'Full API access',
      'On-site training & setup'
    ],
    popular: false
  }
]

// Animation JSON sources
const logoAnimation = 'https://assets9.lottiefiles.com/packages/lf20_jtbfg2nb.json'
const menuAnimation = 'https://assets2.lottiefiles.com/packages/lf20_po3shagv.json'
const heroAnimation = 'https://assets8.lottiefiles.com/packages/lf20_wkebwzpz.json'
const playAnimation = 'https://assets9.lottiefiles.com/private_files/lf30_p9aibxmi.json'
const aboutAnimation = 'https://assets4.lottiefiles.com/packages/lf20_bpqri9y8.json'
const trialAnimation = 'https://assets7.lottiefiles.com/packages/lf20_kor7ghio.json'

// Mouse parallax effect
const { x, y } = useMouse()
const parallaxElements = ref<HTMLElement[]>([])

const updateParallaxEffect = () => {
  if (!parallaxElements.value.length) return
  
  const windowWidth = window.innerWidth
  const windowHeight = window.innerHeight
  
  parallaxElements.value.forEach((el) => {
    const speed = parseFloat(el.dataset.speed || '0.05')
    const xPos = (x.value - windowWidth / 2) * speed
    const yPos = (y.value - windowHeight / 2) * speed
    
    el.style.transform = `translate(${xPos}px, ${yPos}px)`
  })
}

// Counter animation
const animateCounters = () => {
  const counters = document.querySelectorAll('.counter')
  const speed = 200
  
  counters.forEach(counter => {
    const target = parseInt(counter.getAttribute('data-target') || '0')
    const count = 0
    const inc = target / speed
    
    const updateCount = () => {
      const currentCount = parseInt(counter.textContent || '0')
      if (currentCount < target) {
        counter.textContent = Math.ceil(currentCount + inc).toString()
        setTimeout(updateCount, 1)
      } else {
        counter.textContent = target.toString()
      }
    }
    
    updateCount()
  })
}

// Intersection Observer for animations
const setupIntersectionObserver = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (entry.target.classList.contains('counter')) {
          animateCounters()
        }
      }
    })
  }, { threshold: 0.1 })
  
  document.querySelectorAll('.counter').forEach(el => {
    observer.observe(el)
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll()
  
  parallaxElements.value = Array.from(document.querySelectorAll('[data-speed]'))
  window.addEventListener('mousemove', updateParallaxEffect)
  
  setupIntersectionObserver()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('mousemove', updateParallaxEffect)
})
</script>

<style>
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';

/* Custom animations */
@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}

/* Motion directive (for Vue Motion) */
[v-motion] {
  position: relative;
}

/* Optional: Add hover effects for the Lottie animations */
.lottie-player:hover {
  transform: scale(1.1);
  transition: transform 0.3s ease;
}
</style>