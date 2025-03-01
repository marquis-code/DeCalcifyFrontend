<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import lottie from "lottie-web";

const props = defineProps<{
  animation: string;
  width?: string;
  height?: string;
}>();

const animationContainer = ref<HTMLElement | null>(null);
let animationInstance: any = null;

onMounted(() => {
  loadAnimation();
});

// Watch for animation changes in case the animation source updates dynamically
watch(() => props.animation, () => {
  loadAnimation();
});

const loadAnimation = () => {
  if (animationContainer.value) {
    // Destroy previous animation instance if it exists
    if (animationInstance) {
      animationInstance.destroy();
    }

    // Create new animation instance
    animationInstance = lottie.loadAnimation({
      container: animationContainer.value,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: props.animation,
    });
  }
};
</script>

<template>
  <div 
    ref="animationContainer" 
    :style="{ width: width || '100%', height: height || '100%' }"
  ></div>
</template>