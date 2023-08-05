<template>
  <section class="flex items-start gap-2">
    <img
      :src="`/assets/images/answers/answer${props.index}.png`"
      class="w-32 h-32 rounded-lg"
    />
    <section class="grow">
      <section class="flex items-center justify-between">
        <section class="flex items-center gap-2 grow-0">
          <img
            :src="`/assets/images/avatars/avatar${props.index}.png`"
            class="w-12 h-12 rounded-full"
          />
          <section>
            <h2 class="font-medium text-base text-gray-700">Anna Willson</h2>
            <p class="text-xs text-gray-500 font-normal">28 min ago</p>
          </section>
        </section>
        <el-button class="btn" text>
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 7.8125C12.8284 7.8125 13.5 7.11295 13.5 6.25C13.5 5.38706 12.8284 4.6875 12 4.6875C11.1716 4.6875 10.5 5.38706 10.5 6.25C10.5 7.11295 11.1716 7.8125 12 7.8125Z"
              fill="#90A4AE"
            />
            <path
              d="M12 14.0625C12.8284 14.0625 13.5 13.3629 13.5 12.5C13.5 11.6371 12.8284 10.9375 12 10.9375C11.1716 10.9375 10.5 11.6371 10.5 12.5C10.5 13.3629 11.1716 14.0625 12 14.0625Z"
              fill="#90A4AE"
            />
            <path
              d="M12 20.3125C12.8284 20.3125 13.5 19.6129 13.5 18.75C13.5 17.8871 12.8284 17.1875 12 17.1875C11.1716 17.1875 10.5 17.8871 10.5 18.75C10.5 19.6129 11.1716 20.3125 12 20.3125Z"
              fill="#90A4AE"
            />
          </svg>
        </el-button>
      </section>
      <h1 class="mt-2 font-medium text-base text-gray-700">
        What happens to water in space?
      </h1>
      <p class="font-normal text-xs text-gray-500">
        The state of water at normal temperat liquid, so what ...
        <span
          class="ml-1 bg-primary-300 inline-block px-4 py-1 rounded-xl text-gray-500"
          >Read More</span
        >
      </p>
      <section class="mt-4 flex items-center justify-between">
        <section class="flex items-center gap-1 grow-0">
          <svg
            width="17"
            height="13"
            viewBox="0 0 17 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.18133 8.46511C9.38631 8.46511 10.3631 7.54573 10.3631 6.41163C10.3631 5.27753 9.38631 4.35815 8.18133 4.35815C6.97634 4.35815 5.99951 5.27753 5.99951 6.41163C5.99951 7.54573 6.97634 8.46511 8.18133 8.46511Z"
              fill="#90A4AE"
            />
            <path
              d="M16.3307 6.23716C15.6891 4.67531 14.5754 3.32462 13.1271 2.35203C11.6788 1.37944 9.95949 0.827574 8.18159 0.764648C6.40369 0.827574 4.68434 1.37944 3.23606 2.35203C1.78778 3.32462 0.674038 4.67531 0.0324952 6.23716C-0.0108317 6.34995 -0.0108317 6.47346 0.0324952 6.58625C0.674038 8.1481 1.78778 9.49879 3.23606 10.4714C4.68434 11.444 6.40369 11.9958 8.18159 12.0588C9.95949 11.9958 11.6788 11.444 13.1271 10.4714C14.5754 9.49879 15.6891 8.1481 16.3307 6.58625C16.374 6.47346 16.374 6.34995 16.3307 6.23716ZM8.18159 9.74861C7.48036 9.74861 6.79488 9.5529 6.21184 9.18624C5.62879 8.81957 5.17436 8.29842 4.90601 7.68868C4.63767 7.07894 4.56745 6.40801 4.70426 5.76071C4.84106 5.11342 5.17873 4.51884 5.67457 4.05216C6.17041 3.58549 6.80215 3.26768 7.4899 3.13893C8.17765 3.01017 8.89053 3.07625 9.53837 3.32882C10.1862 3.58138 10.7399 4.00908 11.1295 4.55783C11.5191 5.10658 11.727 5.75173 11.727 6.41171C11.7256 7.29629 11.3516 8.14426 10.687 8.76975C10.0224 9.39525 9.12146 9.74725 8.18159 9.74861Z"
              fill="#90A4AE"
            />
          </svg>
          <p class="text-xs font-normal text-gray-500">720</p>
        </section>
        <section class="flex items-center gap-1 grow-0">
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.6 0.823486H1.4C0.6279 0.823486 0 1.41445 0 2.14113V14L2.8 11.3647H12.6C13.3721 11.3647 14 10.7737 14 10.047V2.14113C14 1.41445 13.3721 0.823486 12.6 0.823486Z"
              fill="#90A4AE"
            />
          </svg>
          <p class="text-xs font-normal text-gray-500">54</p>
        </section>
        <section class="flex items-center gap-2 grow-0">
          <svg
            width="19"
            height="19"
            viewBox="0 0 19 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.51709 6.06833L1.51709 12.1367C1.51709 14.6467 3.55834 16.688 6.06837 16.688L15.9295 16.688C16.1307 16.688 16.3236 16.6081 16.4659 16.4658C16.6081 16.3236 16.688 16.1306 16.688 15.9294L16.688 6.06833C16.688 3.5583 14.6468 1.51705 12.1367 1.51705L6.06837 1.51705C3.55834 1.51705 1.51709 3.5583 1.51709 6.06833Z"
              fill="#90A4AE"
            />
            <path d="M6 9H12" stroke="white" stroke-width="1.6" />
          </svg>
          <p class="text-xs font-normal text-gray-500">12</p>
          <svg
            width="19"
            height="19"
            viewBox="0 0 19 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.9317 1.51709H6.86329C4.35326 1.51709 2.31201 3.55834 2.31201 6.06837V15.9295C2.31201 16.1307 2.39193 16.3236 2.53418 16.4659C2.67644 16.6081 2.86938 16.688 3.07056 16.688H12.9317C15.4417 16.688 17.483 14.6468 17.483 12.1367V6.06837C17.483 3.55834 15.4417 1.51709 12.9317 1.51709ZM13.6902 9.86111H10.656V12.8953H9.13893V9.86111H6.10475V8.34401H9.13893V5.30982H10.656V8.34401H13.6902V9.86111Z"
              fill="#90A4AE"
            />
          </svg>
        </section>
      </section>
    </section>
  </section>
</template>

<script setup>
const props = defineProps({
  index: {
    default: 1,
  },
});
</script>

<style scoped>
</style>