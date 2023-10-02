<script setup>
import Home from '@/components/pages/Home.vue';

</script>

<template>
  <div class="app">
    <Home/>
    
  </div>
</template>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Dela+Gothic+One&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Lora&display=swap');
  .app {
    @apply bg-[#191919] min-h-screen;
  }

  .container {
    @apply mx-auto max-w-screen-xl;
}
</style>
