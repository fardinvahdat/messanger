<template>
  <section class="grid grid-cols-1 gap-2">
    <template v-for="index in 5">
      <section class="flex items-center gap-3">
        <section class="flex-shrink-0 flex items-center grow-0 justify-center text-gray-700 hover:text-primary-300 w-14 h-14 rounded-full relative">
          <svg class="z-10" width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.57281 11.3684C8.14544 11.3684 9.40545 10.0989 9.40545 8.52632L9.41492 2.84211C9.41492 1.26947 8.14544 0 6.57281 0C5.00018 0 3.73071 1.26947 3.73071 2.84211V8.52632C3.73071 10.0989 5.00018 11.3684 6.57281 11.3684ZM12.3328 8.52632C11.9349 8.52632 11.6033 8.81053 11.5465 9.19895C11.196 11.6716 8.96966 13.3579 6.57281 13.3579C4.17597 13.3579 1.94966 11.6811 1.59913 9.19895C1.56995 9.01142 1.47463 8.84052 1.33042 8.71715C1.1862 8.59379 1.0026 8.5261 0.812814 8.52632C0.320182 8.52632 -0.0587652 8.96211 0.00755058 9.44526C0.44334 12.2589 2.81176 14.4663 5.62544 14.8926V17.0526C5.62544 17.5737 6.05176 18 6.57281 18C7.09387 18 7.52018 17.5737 7.52018 17.0526V14.8926C10.3244 14.4853 12.7023 12.2589 13.1381 9.44526C13.1533 9.33057 13.1439 9.21395 13.1104 9.1032C13.0769 8.99246 13.0201 8.89015 12.9439 8.80313C12.8676 8.71611 12.7737 8.6464 12.6683 8.59866C12.5629 8.55091 12.4485 8.52625 12.3328 8.52632Z" fill="currentColor"/>
          </svg>
          <section class="absolute w-full h-full left-0 top-0">
            <svg class="w-full h-full" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="25" cy="25" r="23.5" fill="white" stroke="#50CCE8" stroke-width="3" stroke-dasharray="1 1"/>
            </svg>
          </section>
        </section>
        <h1 class="font-medium text-base text-gray-700">Audio {{ index }}</h1>
      </section>
      <template v-if="index < 4">
        <hr class="border border-gray-300 border-opacity-10">
      </template>
    </template>
  </section>
</template>

<script>
</script>

<style scoped>

</style>