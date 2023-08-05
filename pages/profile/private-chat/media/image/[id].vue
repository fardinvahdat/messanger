<template>
  <section>
    <Header :has-back-emit="true" @back="router.go(-1)" />
    <section class="py-4 px-1">
      <div class="flex flex-col gap-2">
        <section class="relative" v-for="(item, index) in 7" :key="index">
          <section class="absolute right-2 top-2" :id="item">
            <el-dropdown
              class="ml-auto"
              popper-class="primary-dropdown"
              trigger="click"
            >
              <el-button class="btn" text>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.8333 16.6669C10.8333 16.2067 10.4602 15.8336 9.99996 15.8336C9.53972 15.8336 9.16663 16.2067 9.16663 16.6669C9.16663 17.1271 9.53972 17.5002 9.99996 17.5002C10.4602 17.5002 10.8333 17.1271 10.8333 16.6669Z"
                    stroke="white"
                    stroke-width="2"
                  />
                  <path
                    d="M10.8333 10.0002C10.8333 9.53993 10.4602 9.16683 9.99996 9.16683C9.53972 9.16683 9.16663 9.53993 9.16663 10.0002C9.16663 10.4604 9.53972 10.8335 9.99996 10.8335C10.4602 10.8335 10.8333 10.4604 10.8333 10.0002Z"
                    stroke="white"
                    stroke-width="2"
                  />
                  <path
                    d="M10.8333 3.33366C10.8333 2.87342 10.4602 2.50033 9.99996 2.50033C9.53972 2.50033 9.16663 2.87342 9.16663 3.33366C9.16663 3.7939 9.53972 4.16699 9.99996 4.16699C10.4602 4.16699 10.8333 3.7939 10.8333 3.33366Z"
                    stroke="white"
                    stroke-width="2"
                  />
                </svg>
              </el-button>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item>Forward</el-dropdown-item>
                  <el-dropdown-item>Show in chat</el-dropdown-item>
                  <el-dropdown-item>Delete</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </section>
          <img
            :src="`/assets/images/posts/post${item}.png`"
            class="rounded w-full"
          />
        </section>
      </div>
    </section>
  </section>
</template>

<script setup>
import Header from "@/components/Chat/Header.vue";
import Tabs from "@/components/TheProfile/Chat/Media/Tabs.vue";

const activeTab = ref("Image");
const route = useRoute();
const router = useRouter();
console.log(route);
</script>

<style scoped></style>
