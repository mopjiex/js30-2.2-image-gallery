<script setup>
import { defineProps } from 'vue';


const props = defineProps({
    picture: Array,
})

</script>

<template>
    <div class="pictures">
        <div class="container">
            <div class="pictures__content">
                <div class="pictures__box" v-for="(img, i) in picture">
                    <img :src="img" alt="" class="pictures__img">
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    .pictures {

        &__content {
            @apply grid grid-cols-4 gap-6;
        }

        &__img {
            @apply w-full h-full rounded-lg;

        }
    }
</style>