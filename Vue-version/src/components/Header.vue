<script setup>
import { defineEmits, ref } from 'vue';
import Logo from '@/components/common/Logo.vue';
import Search from '@/components/common/Search.vue';

const emit = defineEmits();

const buttonInputLoad = () => {
        emit('buttonInput');
        
}

const inputValue = ref('');

const updateValue = (e) => {
        emit('update:modelValue', inputValue.value)
    }
</script>

<template>
<div class="header">
    <div class="container">
        <div class="header__content">
            <Logo/>
            <Search 
              @buttonInput="buttonInputLoad"
              v-model="inputValue"
              @input="updateValue"
              />
              
        </div>

    </div>
</div>
</template>

<style lang="scss">
  .header {
    @apply p-5;
    &__content {
      @apply flex justify-between items-center;
    }
    
  }
</style>