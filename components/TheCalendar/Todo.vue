<template>
  <section>
    <section class="grid grid-cols-1 gap-4">
      <section v-for="(item, index) in todoList" class="flex items-center gap-3">
        <el-checkbox v-model="item.isChecked" :label="item.title">
          <template #default>
            <p class="font-normal text-base text-gray-500 decoration-success-500" :class="[item.isChecked ? 'line-through': '']">
              {{ item.title }}
            </p>
          </template>
        </el-checkbox>
        <el-button class="ml-auto btn" text @click="deleteTodo(index)">
          <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.2917 3.1875H13.4583V1.41667C13.4583 0.635287 12.823 0 12.0417 0H4.95833C4.17695 0 3.54167 0.635287 3.54167 1.41667V3.1875H0.708333C0.316536 3.1875 0 3.50404 0 3.89583V4.60417C0 4.70156 0.0796875 4.78125 0.177083 4.78125H1.51406L2.06081 16.3581C2.09622 17.1129 2.72044 17.7083 3.47526 17.7083H13.5247C14.2818 17.7083 14.9038 17.1151 14.9392 16.3581L15.4859 4.78125H16.8229C16.9203 4.78125 17 4.70156 17 4.60417V3.89583C17 3.50404 16.6835 3.1875 16.2917 3.1875ZM11.8646 3.1875H5.13542V1.59375H11.8646V3.1875Z" fill="#B0BEC5"/>
          </svg>
        </el-button>
      </section>
    </section>
    <section class="flex items-center gap-3 mt-3">
    <el-input v-model="newTodo" />
    <el-button class="btn" text @click="addTodo">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.853027 12C0.853027 10.5226 1.15201 9.05972 1.73291 7.69481C2.31381 6.3299 3.16524 5.08971 4.2386 4.04505C5.31196 3.00039 6.58622 2.17172 7.98863 1.60636C9.39104 1.04099 10.8941 0.75 12.4121 0.75C13.9301 0.75 15.4331 1.04099 16.8356 1.60636C18.238 2.17172 19.5122 3.00039 20.5856 4.04505C21.6589 5.08971 22.5104 6.3299 23.0913 7.69481C23.6722 9.05972 23.9712 10.5226 23.9712 12C23.9712 14.9837 22.7533 17.8452 20.5856 19.955C18.4178 22.0647 15.4778 23.25 12.4121 23.25C9.34644 23.25 6.40635 22.0647 4.2386 19.955C2.07085 17.8452 0.853027 14.9837 0.853027 12V12ZM12.4121 6.375C12.1566 6.375 11.9116 6.47377 11.731 6.64959C11.5503 6.8254 11.4488 7.06386 11.4488 7.3125V11.0625H7.59582C7.34035 11.0625 7.09534 11.1613 6.91469 11.3371C6.73405 11.5129 6.63256 11.7514 6.63256 12C6.63256 12.2486 6.73405 12.4871 6.91469 12.6629C7.09534 12.8387 7.34035 12.9375 7.59582 12.9375H11.4488V16.6875C11.4488 16.9361 11.5503 17.1746 11.731 17.3504C11.9116 17.5262 12.1566 17.625 12.4121 17.625C12.6676 17.625 12.9126 17.5262 13.0932 17.3504C13.2739 17.1746 13.3754 16.9361 13.3754 16.6875V12.9375H17.2284C17.4838 12.9375 17.7289 12.8387 17.9095 12.6629C18.0901 12.4871 18.1916 12.2486 18.1916 12C18.1916 11.7514 18.0901 11.5129 17.9095 11.3371C17.7289 11.1613 17.4838 11.0625 17.2284 11.0625H13.3754V7.3125C13.3754 7.06386 13.2739 6.8254 13.0932 6.64959C12.9126 6.47377 12.6676 6.375 12.4121 6.375Z" fill="#263238"/>
      </svg>
    </el-button>
    </section>
  </section>
</template>

<script setup>
const newTodo = ref('')
const todoList = ref([
  { title: 'study of light refraction season', isChecked: false},
  { title: 'google Search Related Articles', isChecked: false},
])
// methods
const addTodo = () => {
  todoList.value.push({
    title: newTodo.value,
    isChecked: false
  })
  newTodo.value = ''
}
const deleteTodo = (index) => {
  todoList.value.splice(index, 1)
}

</script>

<style scoped>

</style>