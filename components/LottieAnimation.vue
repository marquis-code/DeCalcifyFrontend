<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import lottie from "lottie-web";

const props = defineProps<{ animation: string }>();
const animationContainer = ref<HTMLElement | null>(null);

onMounted(() => {
  loadAnimation();
});

// Watch for animation changes in case the feature array updates dynamically
watch(() => props.animation, () => {
  loadAnimation();
});

const loadAnimation = () => {
  if (animationContainer.value) {
    lottie.loadAnimation({
      container: animationContainer.value,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: props.animation, // Uses the animation from the props
    });
  }
};
</script>

<template>
  <div ref="animationContainer" class="w-full h-full"></div>
</template>

<style scoped>
/* Adjust animation container size */
</style>
