<script setup>

</script>

<template>
<div class="footer">
    <div class="container">
        <div class="footer__content">
            <div class="footer__github">
                <p class="footer__year">2023 - </p>
                <a href="#" class="footer__github-link">GitHub</a>
            </div>
            <a href="#" class="footer__link">
                <img src="/Footer-logo/footer-logo.svg" alt="" class="footer__logo">
            </a>
            
        </div>
    </div>
</div>
</template>

<style lang="scss">
.footer {
    @apply p-5;
    &__content {
        @apply flex items-center justify-between
    }

    &__github {
        @apply flex space-x-2 text-4xl font-lora text-[#e0ece4];
        &-link {
            @apply transition-all duration-300
             hover:text-[#93c4ff] hover:transform hover:scale-110;
        }
    }
}
</style>