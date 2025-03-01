<template>
    <div class="relative overflow-hidden bg-gray-50">
      <!-- Header section -->
      <div class="container mx-auto px-4 py-16 text-center max-w-3xl">
        <h1 class="text-5xl md:text-6xl font-bold mb-6">We are the people who make up Untitled UI</h1>
        <p class="text-xl text-gray-600">
          Our philosophy is simple; hire great people and give them the resources and support to do their best work.
        </p>
      </div>
  
      <!-- Team carousel -->
      <div class="relative">
        <div ref="carouselRef" class="flex overflow-x-hidden" @mousedown="startDrag" @mousemove="onDrag" @mouseup="endDrag"  @touchstart="startTouch" @touchmove="onTouch" @touchend="endTouch">
          <div 
            class="team-carousel flex transition-transform duration-300"
            :style="{ transform: `translateX(${translateX}px)` }"
          >
            <div v-for="(member, index) in allTeamMembers" :key="index" class="team-member flex-shrink-0 px-2 w-64 md:w-72 lg:w-80">
              <div class="bg-member rounded-lg overflow-hidden">
                <div class="h-64 md:h-72 lg:h-80 bg-member-color overflow-hidden relative">
                  <img :src="member.image" :alt="member.name" class="w-full h-full object-cover">
                </div>
                <div class="p-4 bg-white">
                  <h3 class="text-xl font-semibold">{{ member.name }}</h3>
                  <p class="text-gray-600">{{ member.position }}</p>
                  <p class="text-sm text-gray-500 mt-2">{{ member.bio }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Navigation buttons -->
        <button @click="scroll(-1)" class="absolute top-1/2 left-4 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg z-10">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button @click="scroll(1)" class="absolute top-1/2 right-4 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg z-10">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted, computed } from 'vue'
  
  interface TeamMember {
    name: string
    position: string
    bio: string
    image: string
    color: string
  }
  
  // Team members data
  const teamMembers = ref<TeamMember[]>([
    {
      name: 'Owen Garcia',
      position: 'Frontend Developer',
      bio: 'Former frontend dev for Linear, Coinbase, and Postscript.',
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=2874&auto=format&fit=crop',
      color: 'bg-amber-100'
    },
    {
      name: 'Caitlyn King',
      position: 'Product Designer',
      bio: 'Founding design team at Figma. Former Pleo, Stripe, and Tile.',
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=2874&auto=format&fit=crop',
      color: 'bg-green-100'
    },
    {
      name: 'Ashwin Santiago',
      position: 'Engineering Manager',
      bio: 'Lead engineering teams at Netflix, Pitch, and Protocol Labs',
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=2874&auto=format&fit=crop',
      color: 'bg-blue-100'
    },
    {
      name: 'Sienna Hewitt',
      position: 'Founder & CEO',
      bio: 'Former co-founder of Opendoor. Early staff at Spotify and Clearbit.',
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=2874&auto=format&fit=crop',
      color: 'bg-amber-100'
    },
    {
      name: 'Kyla Clay',
      position: 'UX Researcher',
      bio: 'Lead user research at Contentful. Former contractor at Figma.',
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=2874&auto=format&fit=crop',
      color: 'bg-purple-100'
    }
  ])
  
  // Create duplicated array for infinite scrolling effect
  const allTeamMembers = computed(() => {
    return [...teamMembers.value, ...teamMembers.value, ...teamMembers.value]
  })
  
  const carouselRef = ref<HTMLElement | null>(null)
  const translateX = ref(0)
  const isDragging = ref(false)
  const startX = ref(0)
  const currentTranslate = ref(0)
  const itemWidth = ref(320) // Default item width, will be calculated on mount
  const autoScrollSpeed = ref(0.5) // pixels per frame
  const autoScrollActive = ref(true)
  const autoScrollDirection = ref(1) // 1 for right, -1 for left
  let animationFrame: number | null = null
  
  // Calculate the total width and update item width on mount
  onMounted(() => {
    if (carouselRef.value) {
      // Get the actual width of a team member element
      const teamMemberEl = carouselRef.value.querySelector('.team-member')
      if (teamMemberEl) {
        itemWidth.value = teamMemberEl.clientWidth
      }
      
      // Start the auto-scroll animation
      startAutoScroll()
    }
  
    // Add resize listener
    window.addEventListener('resize', handleResize)
  })
  
  // Handle window resize
  const handleResize = () => {
    if (carouselRef.value) {
      const teamMemberEl = carouselRef.value.querySelector('.team-member')
      if (teamMemberEl) {
        itemWidth.value = teamMemberEl.clientWidth
      }
    }
  }
  
  // Auto scroll function
  const startAutoScroll = () => {
    if (!autoScrollActive.value) return
    
    const animate = () => {
      translateX.value -= autoScrollSpeed.value * autoScrollDirection.value
      
      // Reset position for infinite loop effect
      const containerWidth = itemWidth.value * teamMembers.value.length
      if (Math.abs(translateX.value) >= containerWidth) {
        translateX.value += containerWidth
      } else if (translateX.value > 0) {
        translateX.value -= containerWidth
      }
      
      animationFrame = requestAnimationFrame(animate)
    }
    
    animationFrame = requestAnimationFrame(animate)
  }
  
  // Stop auto scroll
  const stopAutoScroll = () => {
    if (animationFrame !== null) {
      cancelAnimationFrame(animationFrame)
      animationFrame = null
    }
  }
  
  // Mouse events for dragging
  const startDrag = (e: MouseEvent) => {
    stopAutoScroll()
    isDragging.value = true
    startX.value = e.clientX
    currentTranslate.value = translateX.value
  }
  
  const onDrag = (e: MouseEvent) => {
    if (!isDragging.value) return
    
    const diffX = e.clientX - startX.value
    translateX.value = currentTranslate.value + diffX
  }
  
  const endDrag = () => {
    isDragging.value = false
    startAutoScroll()
  }
  
  // Touch events for swiping on mobile
  const startTouch = (e: TouchEvent) => {
    stopAutoScroll()
    isDragging.value = true
    startX.value = e.touches[0].clientX
    currentTranslate.value = translateX.value
  }
  
  const onTouch = (e: TouchEvent) => {
    if (!isDragging.value) return
    
    const diffX = e.touches[0].clientX - startX.value
    translateX.value = currentTranslate.value + diffX
    
    // Prevent page scrolling when swiping the carousel
    e.preventDefault()
  }
  
  const endTouch = () => {
    isDragging.value = false
    startAutoScroll()
  }
  
  // Manual scroll with buttons
  const scroll = (direction: number) => {
    stopAutoScroll()
    translateX.value += direction * itemWidth.value
    
    // After a brief pause, restart auto scroll
    setTimeout(() => {
      startAutoScroll()
    }, 1000)
  }
  </script>
  
  <style scoped>
  .bg-member-color {
    @apply bg-gradient-to-br from-amber-50 to-amber-100;
  }
  
  /* Apply smooth scrolling */
  .team-carousel {
    will-change: transform;
  }
  </style>