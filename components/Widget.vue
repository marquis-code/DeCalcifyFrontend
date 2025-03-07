<template>
  <div class="widget-container bg-white rounded-2xl shadow-xl overflow-hidden">
    <div class="relative overflow-hidden">
      <!-- Background animation elements -->
      <div class="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div class="absolute top-10 right-10 w-64 h-64 bg-teal-100 rounded-full filter blur-3xl opacity-20 animate-pulse-slow"></div>
        <div class="absolute bottom-10 left-10 w-72 h-72 bg-blue-100 rounded-full filter blur-3xl opacity-20 animate-pulse-slow animation-delay-1000"></div>
      </div>

      <!-- Widget header -->
      <div class="relative z-10 bg-gradient-to-r from-teal-500 to-blue-600 p-6 text-white">
        <h2 class="text-2xl font-bold flex items-center">
          <div class="w-8 h-8 mr-3">
            <!-- <lottie-player
              :src="calculationAnimation"
              background="transparent"
              speed="1"
              class="w-full h-full"
              loop
              autoplay
            ></lottie-player> -->
            <SingleLottie background="transparent"
              speed="1"
              class="w-full h-full"
              loop
              autoplay 
              :animation="calculationAnimation" />

          </div>
          Decalcification Predictor
        </h2>
        <p class="mt-2 opacity-90">Get accurate predictions for your decalcification process</p>
      </div>

      <!-- Widget content -->
      <div class="relative z-10 p-6">
        <!-- Form -->
        <div v-if="currentStep === 'form'" class="space-y-6">
          <!-- Sample Type -->
          <div 
            class="form-group"
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 100 } }"
          >
            <label class="block text-sm font-medium text-gray-700 mb-2">Sample Type</label>
            <div class="relative">
              <select 
                v-model="formData.sampleType" 
                class="form-select"
                @focus="showInfoFor = 'sampleType'"
                @blur="showInfoFor = null"
              >
                <option value="" disabled>Select sample type</option>
                <option v-for="(sample, index) in sampleTypes" :key="index" :value="sample.value">
                  {{ sample.label }}
                </option>
              </select>
              <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </div>
            </div>
            <transition name="fade">
              <div v-if="showInfoFor === 'sampleType'" class="info-tooltip">
                <div class="flex items-start">
                  <div class="w-8 h-8 mr-2 flex-shrink-0">
                    <!-- <lottie-player
                      :src="infoAnimation"
                      background="transparent"
                      speed="1"
                      class="w-full h-full"
                      loop
                      autoplay
                    ></lottie-player> -->
                    <SingleLottie background="transparent"
                      speed="1"
                      class="w-full h-full"
                      loop
                      autoplay :animation="infoAnimation"   />
                  </div>
                  <div>
                    <p class="font-medium">Sample Type</p>
                    <p class="text-sm">Different tissue samples require different decalcification times. Bone samples typically take longer than cartilage or teeth.</p>
                  </div>
                </div>
                <div v-if="formData.sampleType" class="mt-2 text-sm">
                  <p><span class="font-medium">Selected:</span> {{ getSampleTypeLabel(formData.sampleType) }}</p>
                  <p class="mt-1">{{ getSampleTypeDescription(formData.sampleType) }}</p>
                </div>
              </div>
            </transition>
          </div>

          <!-- Decalcifying Fluid -->
          <div 
            class="form-group"
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 200 } }"
          >
            <label class="block text-sm font-medium text-gray-700 mb-2">Decalcifying Fluid</label>
            <div class="relative">
              <select 
                v-model="formData.fluidType" 
                class="form-select"
                @focus="showInfoFor = 'fluidType'"
                @blur="showInfoFor = null"
              >
                <option value="" disabled>Select decalcifying fluid</option>
                <option v-for="(fluid, index) in fluidTypes" :key="index" :value="fluid.value">
                  {{ fluid.label }}
                </option>
              </select>
              <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </div>
            </div>
            <transition name="fade">
              <div v-if="showInfoFor === 'fluidType'" class="info-tooltip">
                <div class="flex items-start">
                  <div class="w-8 h-8 mr-2 flex-shrink-0">
                    <!-- <lottie-player
                      :src="fluidAnimation"
                      background="transparent"
                      speed="1"
                      class="w-full h-full"
                      loop
                      autoplay
                    ></lottie-player> -->
                    <SingleLottie background="transparent"
                      speed="1"
                      class="w-full h-full"
                      loop
                      autoplay 
                      :animation="fluidAnimation"   />

                  </div>
                  <div>
                    <p class="font-medium">Decalcifying Fluid</p>
                    <p class="text-sm">The choice of decalcifying agent affects both the speed and quality of decalcification.</p>
                  </div>
                </div>
                <div v-if="formData.fluidType" class="mt-2 text-sm">
                  <p><span class="font-medium">Selected:</span> {{ getFluidTypeLabel(formData.fluidType) }}</p>
                  <p class="mt-1">{{ getFluidTypeDescription(formData.fluidType) }}</p>
                </div>
              </div>
            </transition>
          </div>

          <!-- Decalcifying Percentage -->
          <div 
            class="form-group"
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 300 } }"
          >
            <label class="block text-sm font-medium text-gray-700 mb-2">
              Decalcifying Percentage: {{ formData.percentage }}%
            </label>
            <div 
              class="relative pt-1" 
              @mouseenter="showInfoFor = 'percentage'"
              @mouseleave="showInfoFor = null"
            >
              <input
                v-model="formData.percentage"
                type="range"
                min="1"
                max="100"
                class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-teal-500"
              />
              <div class="flex justify-between text-xs text-gray-500 mt-1">
                <span>1%</span>
                <span>25%</span>
                <span>50%</span>
                <span>75%</span>
                <span>100%</span>
              </div>
            </div>
            <transition name="fade">
              <div v-if="showInfoFor === 'percentage'" class="info-tooltip">
                <div class="flex items-start">
                  <div class="w-8 h-8 mr-2 flex-shrink-0">
                    <!-- <lottie-player
                      :src="percentageAnimation"
                      background="transparent"
                      speed="1"
                      class="w-full h-full"
                      loop
                      autoplay
                    ></lottie-player> -->
                    <SingleLottie  background="transparent"
                      speed="1"
                      class="w-full h-full"
                      loop
                      autoplay :animation="percentageAnimation" />
                  </div>
                  <div>
                    <p class="font-medium">Decalcifying Percentage</p>
                    <p class="text-sm">Higher percentages typically result in faster decalcification but may affect tissue morphology.</p>
                    <p class="text-sm mt-1">Current selection: <span class="font-medium">{{ formData.percentage }}%</span></p>
                    <p class="text-sm mt-1">
                      <span v-if="formData.percentage < 25">Low concentration - gentle but slower process</span>
                      <span v-else-if="formData.percentage < 75">Medium concentration - balanced approach</span>
                      <span v-else>High concentration - faster but may affect tissue integrity</span>
                    </p>
                  </div>
                </div>
              </div>
            </transition>
          </div>

          <!-- Start Date -->
          <div 
            class="form-group"
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 400 } }"
          >
            <label class="block text-sm font-medium text-gray-700 mb-2">Start Date</label>
            <div class="relative">
              <input 
                v-model="formData.startDate" 
                type="date" 
                class="form-input"
                :min="minDate"
                @focus="showInfoFor = 'startDate'"
                @blur="showInfoFor = null"
              />
              <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
                </svg>
              </div>
            </div>
            <transition name="fade">
              <div v-if="showInfoFor === 'startDate'" class="info-tooltip">
                <div class="flex items-start">
                  <div class="w-8 h-8 mr-2 flex-shrink-0">
                    <!-- <lottie-player
                      :src="calendarAnimation"
                      background="transparent"
                      speed="1"
                      class="w-full h-full"
                      loop
                      autoplay
                    ></lottie-player> -->
                    <SingleLottie
                      background="transparent"
                      :animation="calendarAnimation"
                      speed="1"
                      class="w-full h-full"
                      loop
                      autoplay:animation="calendarAnimation"   />
                  </div>
                  <div>
                    <p class="font-medium">Start Date</p>
                    <p class="text-sm">Select when you plan to begin the decalcification process.</p>
                    <p class="text-sm mt-1">This will be used to calculate the expected completion date and set up reminders.</p>
                  </div>
                </div>
              </div>
            </transition>
          </div>

          <!-- Submit Button -->
          <button 
            @click="submitForm" 
            class="w-full py-3 px-4 bg-gradient-to-r from-teal-500 to-blue-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transform transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed"
            :disabled="!isFormValid"
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 500 } }"
          >
            <span class="flex items-center justify-center">
              <span>Predict Decalcification Time</span>
              <svg class="ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </span>
          </button>
        </div>

        <!-- Loading State -->
        <div v-else-if="currentStep === 'loading'" class="py-10 flex flex-col items-center justify-center">
          <div class="w-40 h-40 mb-6">
            <!-- <lottie-player
              :src="loadingAnimation"
              background="transparent"
              speed="1"
              class="w-full h-full"
              loop
              autoplay
            ></lottie-player> -->
            <SingleLottie
              background="transparent"
              speed="1"
              class="w-full h-full"
              loop
              autoplay
            :animation="loadingAnimation" 
             
             />
          </div>
          <h3 class="text-xl font-medium text-gray-800 mb-2 text-center">Analyzing Parameters...</h3>
          <p class="text-gray-600 text-center max-w-xs">
            Please wait while our AI analyzes your parameters and predicts the optimal decalcification time.
          </p>
          <div class="mt-6 w-full max-w-xs">
            <div class="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
              <div 
                class="h-full bg-gradient-to-r from-teal-500 to-blue-600 rounded-full"
                :style="{ width: `${loadingProgress}%` }"
              ></div>
            </div>
            <div class="flex justify-between mt-2 text-xs text-gray-500">
              <span>Analyzing samples</span>
              <span>{{ loadingProgress }}%</span>
            </div>
          </div>
        </div>

        <!-- Results -->
        <div v-else-if="currentStep === 'results'" class="space-y-6">
          <div 
            class="text-center mb-4"
            v-motion
            :initial="{ opacity: 0, scale: 0.9 }"
            :enter="{ opacity: 1, scale: 1, transition: { duration: 500 } }"
          >
            <div class="w-20 h-20 mx-auto mb-4">
              <!-- <lottie-player
                :src="successAnimation"
                background="transparent"
                speed="1"
                class="w-full h-full"
                loop
                autoplay
              ></lottie-player> -->
              <SingleLottie background="transparent"
                speed="1"
                class="w-full h-full"
                loop
                autoplay :animation="successAnimation"   />
            </div>
            <h3 class="text-2xl font-bold text-gray-800">Prediction Complete</h3>
            <p class="text-gray-600">Here's your detailed decalcification timeline</p>
          </div>

          <!-- Prediction Result Card -->
          <div 
            class="bg-gradient-to-br from-teal-50 to-blue-50 rounded-xl p-6 border border-teal-100 shadow-sm"
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 200, duration: 500 } }"
          >
            <div class="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h4 class="text-lg font-medium text-gray-800">Estimated Decalcification Time</h4>
                <div class="mt-2 text-3xl font-bold text-teal-600">{{ result.timeString }}</div>
                <p class="text-sm text-gray-600 mt-1">
                  Expected completion: <span class="font-medium">{{ result.completionDate }}</span>
                </p>
              </div>
              <div class="mt-4 md:mt-0">
                <div class="w-24 h-24">
                  <lottie-player
                    :src="timerAnimation"
                    background="transparent"
                    speed="1"
                    class="w-full h-full"
                    loop
                    autoplay
                  ></lottie-player>
                </div>
              </div>
            </div>
          </div>

          <!-- Breakdown -->
          <div 
            class="rounded-xl border border-gray-200 overflow-hidden"
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 400, duration: 500 } }"
          >
            <div class="bg-gray-50 px-6 py-4 border-b border-gray-200">
              <h4 class="font-medium text-gray-800">Detailed Breakdown</h4>
            </div>
            <div class="p-6 space-y-4">
              <div v-for="(factor, index) in result.factors" :key="index" class="flex items-start">
                <div class="w-6 h-6 mt-0.5 mr-3 text-teal-500 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <div>
                  <h5 class="font-medium text-gray-800">{{ factor.name }}</h5>
                  <p class="text-sm text-gray-600 mt-1">{{ factor.description }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Set Calendar Reminder -->
          <div 
            class="rounded-xl border border-gray-200 overflow-hidden"
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 600, duration: 500 } }"
          >
            <div class="bg-gray-50 px-6 py-4 border-b border-gray-200">
              <h4 class="font-medium text-gray-800">Set a Reminder</h4>
            </div>
            <div class="p-6">
              <p class="text-sm text-gray-600 mb-4">
                Never miss when your decalcification process is complete. Add a reminder to your calendar.
              </p>
              <button 
                @click="addToCalendar" 
                class="w-full py-3 px-4 bg-white border border-teal-500 text-teal-600 font-medium rounded-lg shadow-sm hover:bg-teal-50 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50 flex items-center justify-center"
              >
                <div class="w-5 h-5 mr-2">
                  <!-- <lottie-player
                    :src="calendarAnimation"
                    background="transparent"
                    speed="1"
                    class="w-full h-full"
                    loop
                    autoplay
                  ></lottie-player> -->
                  <SingleLottie
                  background="transparent"
                    speed="1"
                    class="w-full h-full"
                    loop
                    autoplay :animation="calendarAnimation"   />
                </div>
                <span>Add to Google Calendar</span>
              </button>
            </div>
          </div>

          <!-- Buttons -->
          <div class="flex space-x-4">
            <button 
              @click="resetForm" 
              class="flex-1 py-3 px-4 bg-white border border-gray-300 text-gray-700 font-medium rounded-lg shadow-sm hover:bg-gray-50 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
              v-motion
              :initial="{ opacity: 0, y: 20 }"
              :enter="{ opacity: 1, y: 0, transition: { delay: 800, duration: 500 } }"
            >
              Start Over
            </button>
            <button 
              @click="saveResult" 
              class="flex-1 py-3 px-4 bg-gradient-to-r from-teal-500 to-blue-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50"
              v-motion
              :initial="{ opacity: 0, y: 20 }"
              :enter="{ opacity: 1, y: 0, transition: { delay: 900, duration: 500 } }"
            >
              Save Result
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCreatePrediction } from '@/composables/prediction/useCreatePrediction'
const { loading, setPayload, createPrediction, payload } = useCreatePrediction()
import { ref, computed, watch, onMounted } from 'vue'

// Form data
interface FormData {
  sampleType: string;
  fluidType: string;
  percentage: number;
  startDate: string;
}

// Sample types
interface SampleType {
  value: string;
  label: string;
  description: string;
  baseTime: number; // in hours
}

// Fluid types
interface FluidType {
  value: string;
  label: string;
  description: string;
  speedFactor: number; // multiplier for decalcification speed
}

// Result factors
interface ResultFactor {
  name: string;
  description: string;
}

// Result interface
interface PredictionResult {
  hours: number;
  timeString: string;
  completionDate: string;
  factors: ResultFactor[];
}

// Animation sources
const calculationAnimation = 'https://assets5.lottiefiles.com/packages/lf20_qp1q7mct.json'
const infoAnimation = 'https://assets9.lottiefiles.com/packages/lf20_nw19osms.json'
const fluidAnimation = 'https://assets5.lottiefiles.com/packages/lf20_jzpjbmvd.json'
const percentageAnimation = 'https://assets7.lottiefiles.com/packages/lf20_b0olen7o.json'
const calendarAnimation = 'https://assets9.lottiefiles.com/packages/lf20_5e7wgehs.json'
const loadingAnimation = 'https://assets5.lottiefiles.com/packages/lf20_p8bfn5to.json'
const successAnimation = 'https://assets1.lottiefiles.com/packages/lf20_jmejybvu.json'
const timerAnimation = 'https://assets2.lottiefiles.com/packages/lf20_kcsr6fcp.json'

// State
const currentStep = ref<'form' | 'loading' | 'results'>('form')
const showInfoFor = ref<string | null>(null)
const loadingProgress = ref(0)
const result = ref<PredictionResult>({
  hours: 0,
  timeString: '',
  completionDate: '',
  factors: []
})

// Form data
const formData = ref<FormData>({
  sampleType: '',
  fluidType: '',
  percentage: 50,
  startDate: new Date().toISOString().split('T')[0]
})

// Sample types data
const sampleTypes = ref<SampleType[]>([
  {
    value: 'bone',
    label: 'Bone',
    description: 'Dense bone tissue with high mineral content',
    baseTime: 72
  },
  {
    value: 'teeth',
    label: 'Teeth',
    description: 'Dental tissue with enamel and dentin',
    baseTime: 96
  },
  {
    value: 'cartilage',
    label: 'Cartilage',
    description: 'Flexible connective tissue with lower mineral content',
    baseTime: 24
  },
  {
    value: 'bone_marrow',
    label: 'Bone Marrow',
    description: 'Soft tissue inside bones',
    baseTime: 48
  },
  {
    value: 'calcified_tissue',
    label: 'Other Calcified Tissue',
    description: 'Various calcified tissues not in other categories',
    baseTime: 60
  }
])

// Fluid types data
const fluidTypes = ref<FluidType[]>([
  {
    value: 'formic_acid',
    label: 'Formic Acid',
    description: 'Fast acting but may damage tissue morphology at higher concentrations',
    speedFactor: 1.2
  },
  {
    value: 'hydrochloric_acid',
    label: 'Hydrochloric Acid',
    description: 'Rapid decalcification but can damage tissue structure',
    speedFactor: 1.5
  },
  {
    value: 'edta',
    label: 'EDTA',
    description: 'Gentle and preserves tissue morphology but slower',
    speedFactor: 0.7
  },
  {
    value: 'nitric_acid',
    label: 'Nitric Acid',
    description: 'Fast acting but may affect staining properties',
    speedFactor: 1.3
  },
  {
    value: 'trichloroacetic_acid',
    label: 'Trichloroacetic Acid',
    description: 'Moderate speed with good tissue preservation',
    speedFactor: 1.0
  }
])

// Computed properties
const minDate = computed(() => {
  return new Date().toISOString().split('T')[0]
})

const isFormValid = computed(() => {
  return (
    formData.value.sampleType !== '' &&
    formData.value.fluidType !== '' &&
    formData.value.percentage > 0 &&
    formData.value.startDate !== ''
  )
})

// Helper functions
const getSampleTypeLabel = (value: string): string => {
  const sample = sampleTypes.value.find(s => s.value === value)
  return sample ? sample.label : ''
}

const getSampleTypeDescription = (value: string): string => {
  const sample = sampleTypes.value.find(s => s.value === value)
  return sample ? sample.description : ''
}

const getFluidTypeLabel = (value: string): string => {
  const fluid = fluidTypes.value.find(f => f.value === value)
  return fluid ? fluid.label : ''
}

const getFluidTypeDescription = (value: string): string => {
  const fluid = fluidTypes.value.find(f => f.value === value)
  return fluid ? fluid.description : ''
}

// Form submission
const submitForm = async () => {
  if (!isFormValid.value) return
  
  currentStep.value = 'loading'
  
  // Simulate loading progress
  // formData.value.sampleType !== '' &&
  //   formData.value.fluidType !== '' &&
  //   formData.value.percentage > 0 &&
  //   formData.value.startDate !== ''
const startDate = new Date(formData.value.startDate);
const payloadObj = {
  sample: formData.value.sampleType,
  fluid: formData.value.fluidType,
  percentage: formData.value.percentage,
  day: startDate.getDate(),
  month: startDate.getMonth() + 1, // getMonth() returns 0-11, so we add 1 for 1-12
  year: startDate.getFullYear(),
};

setPayload(payloadObj);

await createPrediction()
  .then(() => {
    // Handle success
  })
  .catch(() => {
    // Handle error
  })
  .finally(() => {
    // Handle completion
  });

  loadingProgress.value = 0
  const interval = setInterval(() => {
    loadingProgress.value += 5
    if (loadingProgress.value >= 100) {
      clearInterval(interval)
      calculateResult()
      setTimeout(() => {
        currentStep.value = 'results'
      }, 500)
    }
  }, 150)
}

// Calculate prediction result
const calculateResult = () => {
  const sample = sampleTypes.value.find(s => s.value === formData.value.sampleType)
  const fluid = fluidTypes.value.find(f => f.value === formData.value.fluidType)
  
  if (!sample || !fluid) return
  
  // Base calculation
  let hours = sample.baseTime
  
  // Apply fluid factor
  hours = hours / fluid.speedFactor
  
  // Apply percentage factor (higher percentage = faster)
  const percentageFactor = 1 - ((formData.value.percentage - 1) / 200) // 1% = 0.995, 100% = 0.5
  hours = hours * percentageFactor
  
  // Round to nearest hour
  hours = Math.round(hours)
  
  // Format time string
  let timeString = ''
  if (hours >= 24) {
    const days = Math.floor(hours / 24)
    const remainingHours = hours % 24
    timeString = `${days} day${days > 1 ? 's' : ''}`
    if (remainingHours > 0) {
      timeString += ` ${remainingHours} hour${remainingHours > 1 ? 's' : ''}`
    }
  } else {
    timeString = `${hours} hour${hours > 1 ? 's' : ''}`
  }
  
  // Calculate completion date
  const startDate = new Date(formData.value.startDate)
  const completionDate = new Date(startDate.getTime() + (hours * 60 * 60 * 1000))
  const formattedCompletionDate = completionDate.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
  
  // Create factors explanation
  const factors: ResultFactor[] = [
    {
      name: `Sample Type: ${getSampleTypeLabel(formData.value.sampleType)}`,
      description: `${getSampleTypeDescription(formData.value.sampleType)}. Base decalcification time: ${sample.baseTime} hours.`
    },
    {
      name: `Decalcifying Agent: ${getFluidTypeLabel(formData.value.fluidType)}`,
      description: `${getFluidTypeDescription(formData.value.fluidType)}. Speed factor: ${fluid.speedFactor > 1 ? 'Increases' : 'Decreases'} decalcification rate by ${Math.abs((fluid.speedFactor - 1) * 100).toFixed(0)}%.`
    },
    {
      name: `Concentration: ${formData.value.percentage}%`,
      description: `Higher concentrations generally accelerate the decalcification process. Your selected concentration ${formData.value.percentage < 25 ? 'is low, prioritizing tissue integrity' : formData.value.percentage < 75 ? 'provides a balance between speed and tissue preservation' : 'is high, optimizing for speed'}.`
    }
  ]
  
  // Set result
  result.value = {
    hours,
    timeString,
    completionDate: formattedCompletionDate,
    factors
  }
}

// Reset form
const resetForm = () => {
  formData.value = {
    sampleType: '',
    fluidType: '',
    percentage: 50,
    startDate: new Date().toISOString().split('T')[0]
  }
  currentStep.value = 'form'
}

// Add to Google Calendar
const addToCalendar = () => {
  if (!result.value) return
  
  const startDate = new Date(formData.value.startDate)
  const endDate = new Date(startDate.getTime() + (result.value.hours * 60 * 60 * 1000))
  
  const startDateFormatted = startDate.toISOString().replace(/-|:|\.\d+/g, '')
  const endDateFormatted = endDate.toISOString().replace(/-|:|\.\d+/g, '')
  
  const title = `DeCalcify: ${getSampleTypeLabel(formData.value.sampleType)} Decalcification Complete`
  const details = `Sample: ${getSampleTypeLabel(formData.value.sampleType)}\nFluid: ${getFluidTypeLabel(formData.value.fluidType)}\nConcentration: ${formData.value.percentage}%\n\nEstimated time: ${result.value.timeString}`
  
  const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${startDateFormatted}/${endDateFormatted}&details=${encodeURIComponent(details)}`
  
  window.open(url, '_blank')
}

// Save result (placeholder function)
const saveResult = () => {
  // In a real application, this would save to a database
  alert('Result saved successfully!')
}

// Lifecycle hooks
onMounted(() => {
  // Any initialization code
})
</script>

<style scoped>
.widget-container {
  max-width: 600px;
  margin: 0 auto;
}

.form-select, .form-input {
  @apply w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300;
}

.info-tooltip {
  @apply mt-2 p-4 bg-gray-50 rounded-lg border border-gray-200 text-gray-700 shadow-sm;
}

/* Animations */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

@keyframes pulse-slow {
  0%, 100% {
    opacity: 0.2;
  }
  50% {
    opacity: 0.3;
  }
}

.animate-pulse-slow {
  animation: pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

.animation-delay-1000 {
  animation-delay: 1s;
}
</style>