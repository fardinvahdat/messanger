<template>
  <client-only>
    <el-dialog
      v-model="model"
      title="Share questions & answers"
      width="300px"
      align-center
    >
      <section>
        <h3 class="text-sm text-gray-500 font-normal">Friends</h3>
        <section class="mt-3 grid grid-cols-1 gap-5">
          <section class="flex items-center gap-3" v-for="user in users">
            <img
              :src="user.avatar"
              class="w-12 h-12 rounded-full object-cover"
            />
            <h2 class="font-bold text-sm text-gray-700">{{ user.title }}</h2>
            <el-button class="btn ml-auto btn-primary text-xs text-white bg-primary-800" @click="user.isShared = true">
              {{ user.isShared ? 'Shared' : 'Share' }}
            </el-button>
          </section>
        </section>
        <section class="flex gap-2 justify-center my-4 items-center">
          <el-divider class="m-0" />
          <h3 class="text-sm text-gray-500 font-normal text-center">Or</h3>
          <el-divider class="m-0" />
        </section>
        <h3 class="text-sm text-gray-500 font-normal">Coppy your share link</h3>
        <section
          class="mt-2 px-4 py-2 rounded-lg bg-gray-200 flex items-center justify-between gap-3"
        >
          <h2 class="text-sm text-gray-700 font-bold truncate">
            {{ $route.fullPath }}
          </h2>
          <el-button class="btn btn-primary text-white text-xs"
                     :class="[isCoppied? 'bg-gray-300' : 'bg-primary-600']"
                     @click="coppy">
            {{ isCoppied ? 'Copied' : 'Coppy'}}
          </el-button>
        </section>
      </section>
    </el-dialog>
  </client-only>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    default: false,
  },
});
const emits = defineEmits();
const model = computed({
  set(value) {
    isCoppied.value = false
    users.value.map(user=>{
      user.isShared = false
      return user
    })
    emits("update:modelValue", value);
  },
  get() {
    return props.modelValue;
  },
});
// variables
const users = useUsers();
const route = useRoute();
const isCoppied = ref(false);
const handleClose = () => {
  model.value = false;
};
const coppy = () => {
  navigator.clipboard.writeText(route.fullPath);
  isCoppied.value = true;
};
</script>

<style scoped></style>
