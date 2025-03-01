declare module '@lottiefiles/vue-lottie-player' {
    import { DefineComponent } from 'vue'
    export const LottiePlayer: DefineComponent<{
      src: string
      autoplay?: boolean
      loop?: boolean
      speed?: number
      background?: string
      controls?: boolean
      mode?: string
      hover?: boolean
    }>
  }