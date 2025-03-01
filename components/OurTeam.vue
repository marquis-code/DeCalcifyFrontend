<script setup lang="ts">
import { ref, computed } from 'vue';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  quote: string;
  image: string;
}

// Sample testimonial data
const testimonials = ref<Testimonial[]>([
  {
    id: 1,
    name: "Ema Watson",
    position: "Marketing Manager at Stech",
    quote: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam ducimus libero ad tempora doloribus expedita laborum saepe voluptas perferendis delectus assumenda.",
    image: "https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: 2,
    name: "John Doe",
    position: "CTO at TechGiant",
    quote: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
  },
  {
    id: 3,
    name: "Sarah Johnson",
    position: "Product Designer at Creatives",
    quote: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1376&q=80"
  }
]);

const currentIndex = ref(0);
const isAnimating = ref(false);
const direction = ref<'next' | 'prev'>('next');

const currentTestimonial = computed(() => {
  return testimonials.value[currentIndex.value];
});

const goToNext = () => {
  if (isAnimating.value) return;
  
  direction.value = 'next';
  isAnimating.value = true;
  
  setTimeout(() => {
    currentIndex.value = (currentIndex.value + 1) % testimonials.value.length;
    isAnimating.value = false;
  }, 300); // Match this with the CSS transition duration
};

const goToPrev = () => {
  if (isAnimating.value) return;
  
  direction.value = 'prev';
  isAnimating.value = true;
  
  setTimeout(() => {
    currentIndex.value = (currentIndex.value - 1 + testimonials.value.length) % testimonials.value.length;
    isAnimating.value = false;
  }, 300); // Match this with the CSS transition duration
};
</script>

<template>
  <section class="bg-white">
    <div class="max-w-6xl px-6 py-10 mx-auto">
      <p class="text-xl font-medium text-blue-500">Testimonials</p>

      <h1 class="mt-2 text-2xl font-semibold text-gray-800 capitalize lg:text-3xl">
        What clients saying
      </h1>

      <main class="relative z-20 w-full mt-8 md:flex md:items-center xl:mt-12">
        <div class="absolute w-full bg-blue-600 -z-10 md:h-96 rounded-2xl"></div>
        
        <div class="w-full p-6 bg-blue-600 md:flex md:items-center rounded-2xl md:bg-transparent md:p-0 lg:px-12 md:justify-evenly">
          <transition 
            :name="direction === 'next' ? 'slide-next' : 'slide-prev'"
            mode="out-in"
          >
            <img 
              :key="currentTestimonial.id"
              class="h-24 w-24 md:mx-6 rounded-full object-cover shadow-md md:h-[32rem] md:w-80 lg:h-[36rem] lg:w-[26rem] md:rounded-2xl" 
              :src="currentTestimonial.image" 
              :alt="`${currentTestimonial.name} photo`" 
            />
          </transition>
          
          <div class="mt-2 md:mx-6">
            <transition 
              :name="direction === 'next' ? 'fade-next' : 'fade-prev'"
              mode="out-in"
            >
              <div :key="currentTestimonial.id">
                <div>
                  <p class="text-xl font-medium tracking-tight text-white">{{ currentTestimonial.name }}</p>
                  <p class="text-blue-200">{{ currentTestimonial.position }}</p>
                </div>

                <p class="mt-4 text-lg leading-relaxed text-white md:text-xl">
                  "{{ currentTestimonial.quote }}"
                </p>
              </div>
            </transition>
            
            <div class="flex items-center justify-between mt-6 md:justify-start">
              <button 
                @click="goToPrev"
                title="Previous testimonial" 
                class="p-2 text-white transition-colors duration-300 border rounded-full rtl:-scale-x-100 hover:bg-blue-400"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button 
                @click="goToNext"
                title="Next testimonial" 
                class="p-2 text-white transition-colors duration-300 border rounded-full rtl:-scale-x-100 md:mx-6 hover:bg-blue-400"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  </section>
</template>

<style scoped>
/* Slide animations for images */
.slide-next-enter-active,
.slide-next-leave-active,
.slide-prev-enter-active,
.slide-prev-leave-active {
  transition: all 0.3s ease;
}

.slide-next-enter-from {
  transform: translateX(100%);
  opacity: 0;
}

.slide-next-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}

.slide-prev-enter-from {
  transform: translateX(-100%);
  opacity: 0;
}

.slide-prev-leave-to {
  transform: translateX(100%);
  opacity: 0;
}

/* Fade animations for text */
.fade-next-enter-active,
.fade-next-leave-active,
.fade-prev-enter-active,
.fade-prev-leave-active {
  transition: all 0.3s ease;
}

.fade-next-enter-from,
.fade-prev-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.fade-next-leave-to,
.fade-prev-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>

