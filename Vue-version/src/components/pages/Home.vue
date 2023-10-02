<script setup>
import { onMounted, ref } from 'vue';
import Header from '@/components/Header.vue';
import Pictures from '@/components/Pictures.vue';
import Footer from '@/components/Footer.vue';

const API = 'zOL7XvHxoROYCNwfw6qq-TcfVf6FMhf3cPDRYHStwE4';

const images = ref([]);
const inputValue = ref('');

const pictureLoading = async (query) => {
    try {
        const res = await fetch(`https://api.unsplash.com/photos/random/?client_id=${API}&count=30&query=${query}`);
        const data = await res.json();
        images.value = data.map(item => item.urls.small);  
    } catch(e) {
        console.log(e);
    }
}

onMounted(() => pictureLoading())

const loadPicture = () => {
    pictureLoading(inputValue.value);
    console.log(inputValue.value)
    
}

</script>

<template>
    <div class="home">
        <Header 
            @buttonInput="loadPicture"
            v-model="inputValue"
        />
       
        <Pictures :picture="images"/>
        <Footer/>

    </div>
</template>

<style lang="scss">


</style>