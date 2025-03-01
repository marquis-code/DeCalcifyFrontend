<template>
    <div class="max-w-6xl mx-auto px-6 py-16">
      <!-- Team heading -->
      <div class="mb-16">
        <h1 class="font-serif">
          <span class="text-6xl md:text-8xl font-bold text-black">MEET</span>
          <br />
          <span class="text-6xl md:text-8xl font-light text-gray-300">OUR</span>
          <br />
          <span class="text-6xl md:text-8xl font-bold text-black">TEAM</span>
        </h1>
      </div>
  
      <!-- Team carousel -->
      <div class="relative h-[500px] w-full">
        <TransitionGroup 
          name="card-transition" 
          tag="div" 
          class="relative h-full w-full"
        >
          <div 
            v-for="(member, index) in visibleTeamMembers" 
            :key="member.id"
            :style="{
              zIndex: teamMembers.length - index,
              transform: `translateX(${index * 60}px) scale(${1 - index * 0.12}) translateY(${index * 20}px)`,
              opacity: 1 - (index * 0.2),
            }"
            class="absolute top-0 left-0 w-full md:w-3/4 h-full transition-all duration-500 ease-in-out shadow-md bg-white"
          >
            <div class="flex flex-col md:flex-row h-full">
              <!-- Member info -->
              <div class="w-full md:w-1/2 p-6 flex flex-col justify-end md:justify-center">
                <h2 class="text-3xl md:text-4xl font-serif font-medium text-center md:text-left mb-4">
                  {{ member.name }}
                </h2>
                <div class="flex gap-2 justify-center md:justify-start mb-6">
                  <span 
                    v-for="specialty in member.specialties" 
                    :key="specialty"
                    class="px-4 py-2 rounded-full border border-gray-300 text-sm"
                  >
                    {{ specialty }}
                  </span>
                </div>
              </div>
              
              <!-- Member image -->
              <div class="w-full md:w-1/2 h-64 md:h-full">
                <img 
                  :src="member.image" 
                  :alt="member.name" 
                  class="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </TransitionGroup>
  
        <!-- Navigation buttons -->
        <div class="absolute bottom-4 right-4 flex gap-3 z-50">
          <button 
            @click="prevMember" 
            class="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center"
            :disabled="isTransitioning"
          >
            <span class="transform rotate-180">➝</span>
          </button>
          <button 
            @click="nextMember"
            class="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center"
            :disabled="isTransitioning"
          >
            <span>➝</span>
          </button>
        </div>
  
        <!-- Navigation indicator -->
        <!-- <div class="absolute -bottom-16 left-0 flex gap-2">
          <div 
            v-for="(_, index) in teamMembers" 
            :key="index"
            @click="goToMember(index)"
            :class="[
              'w-8 h-1 cursor-pointer transition-all duration-300',
              currentIndex === index ? 'bg-black' : 'bg-gray-300'
            ]"
          ></div>
        </div> -->
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
  
  interface TeamMember {
    id: number;
    name: string;
    specialties: string[];
    image: string;
  }
  
  // Sample team members data
  const teamMembers = ref<TeamMember[]>([
    {
      id: 1,
      name: 'PT. Debbie Orina',
      specialties: ['OB/GYN', 'PREVENTIVE CARE'],
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=2874&auto=format&fit=crop'
    },
    {
      id: 2,
      name: 'MLS. Daniel Odiete',
      specialties: ['PEDIATRICS', 'PRIMARY CARE'],
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=2864&auto=format&fit=crop'
    },
    {
      id: 3,
      name: 'MLS. Oyindamola',
      specialties: ['CARDIOLOGY', 'INTERNAL MEDICINE'],
      image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=2787&auto=format&fit=crop'
    },
    {
      id: 4,
      name: 'MLS. Agbomma',
      specialties: ['NURSING', 'PATIENT CARE'],
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: 5,
      name: 'MD. Daniel Osiagwu',
      specialties: ['SURGERY', 'ONCOLOGY'],
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=2874&auto=format&fit=crop'
    }
  ]);
  
  // Control variables
  const currentIndex = ref(0);
  const maxVisibleCards = 3;
  const isTransitioning = ref(false);
  const autoplayInterval = ref<number | null>(null);
  
  // Compute visible team members based on current index
  const visibleTeamMembers = computed(() => {
    const visible = [];
    for (let i = 0; i < maxVisibleCards; i++) {
      const index = (currentIndex.value + i) % teamMembers.value.length;
      visible.push(teamMembers.value[index]);
    }
    return visible;
  });
  
  // Navigation functions
  const nextMember = () => {
    if (isTransitioning.value) return;
    
    isTransitioning.value = true;
    currentIndex.value = (currentIndex.value + 1) % teamMembers.value.length;
    
    setTimeout(() => {
      isTransitioning.value = false;
    }, 500); // Match the transition duration
  };
  
  const prevMember = () => {
    if (isTransitioning.value) return;
    
    isTransitioning.value = true;
    currentIndex.value = (currentIndex.value - 1 + teamMembers.value.length) % teamMembers.value.length;
    
    setTimeout(() => {
      isTransitioning.value = false;
    }, 500); // Match the transition duration
  };
  
  const goToMember = (index: number) => {
    if (isTransitioning.value || index === currentIndex.value) return;
    
    isTransitioning.value = true;
    currentIndex.value = index;
    
    setTimeout(() => {
      isTransitioning.value = false;
    }, 500);
  };
  
  // Auto rotation
  const startAutoplay = () => {
    autoplayInterval.value = setInterval(() => {
      nextMember();
    }, 5000) as unknown as number;
  };
  
  const stopAutoplay = () => {
    if (autoplayInterval.value) {
      clearInterval(autoplayInterval.value);
      autoplayInterval.value = null;
    }
  };
  
  // Lifecycle hooks
  onMounted(() => {
    startAutoplay();
  });
  
  onBeforeUnmount(() => {
    stopAutoplay();
  });
  </script>
  
  <style scoped>
  .card-transition-move,
  .card-transition-enter-active,
  .card-transition-leave-active {
    transition: all 0.5s ease;
  }
  
  .card-transition-enter-from {
    opacity: 0;
    transform: translateX(100px) scale(0.8);
  }
  
  .card-transition-leave-to {
    opacity: 0;
    transform: translateX(-100px) scale(0.8);
  }
  
  /* Custom serif font styling similar to the reference image */
  .font-serif {
    font-family: 'Times New Roman', Times, serif;
    line-height: 0.9;
  }
  </style>