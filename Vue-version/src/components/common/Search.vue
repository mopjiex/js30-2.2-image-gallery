<script setup> 
    import { defineEmits, ref } from 'vue';
    const emit = defineEmits();
    const inputvalue = ref('')
    const buttonInputLoad = () => {
        emit('buttonInput');
        inputvalue.value = '';
    }
    const updateValue = (e) => {
        emit('update:modelValue', inputvalue.value)
    }
</script>


<template>
<div class="search">
    <input 
        type="text" 
        class="search__input"
        placeholder="Search..."
        v-model="inputvalue"
        @input="updateValue"
    >
    <button class="search__btn" @click="buttonInputLoad">
        <img src="/Search/search.png" alt="" class="search__btn-img">
    </button>
</div>
</template>

<style lang="scss">
.search {
    @apply bg-white w-3/12 flex py-1 px-2 rounded-2xl space-x-2 font-lora;
    &__input {
        @apply w-full p-2 text-3xl rounded-2xl;
    }
}
</style>