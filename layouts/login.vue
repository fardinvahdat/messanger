<template>
  <section class="min-h-screen bg-primary-800 login-page">
    <section class="pt-4">
    <img src="/assets/images/login_background.png" class="mx-auto"/>
    </section>
    <img src="/assets/images/login_colors_background.png" class="absolute z-10 bottom-0 left-0 w-full colors-background"/>
    <section class="login-body rounded-t-2xl relative z-20 flex items-center justify-center">
    <slot />
    </section>
  </section>
</template>

<script>
export default {
name: "login"
}
</script>

<style scoped>

</style>