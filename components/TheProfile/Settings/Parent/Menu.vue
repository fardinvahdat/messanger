<template>
  <section class="grid grid-cols-1 gap-5">
    <nuxt-link :to="route.href" class="flex items-center gap-2" v-for="route in routes">
      <Icon :name="route.icon" />
      <h3 class="font-normal text-base text-gray-500">{{ route.name }}</h3>
      <template v-if="route.name == 'Kids Accounts'">
        <section class="flex ml-auto grow-0 gap-1">
          <img src="/assets/images/avatars/avatar1.png" class="w-10 h-10 rounded-full"/>
          <img src="/assets/images/avatars/avatar2.png" class="w-10 h-10 rounded-full"/>
          <img src="/assets/images/avatars/avatar3.png" class="w-10 h-10 rounded-full"/>
        </section>
      </template>
    </nuxt-link>
  </section>
</template>

<script setup>
import Icon from "@/components/TheIcon/Icon";
const routes = ref([
  { name: 'Kids Accounts', href: '/profile/settings/parent/kids', icon: 'profile-kids'},
  { name: 'Notifications', href: '/profile/settings/parent/notifications', icon: 'profile-notifications'},
  { name: 'Activity', href: '/profile/settings/parent', icon: 'profile-activity'},
  { name: 'Financial', href: '/profile/financial', icon: 'profile-skills'},
  { name: 'Password', href: '/profile/settings/parent', icon: 'profile-password'},
  { name: 'Log out', href: '/profile/settings/parent', icon: 'profile-logout'},
  { name: 'Delete', href: '/profile/settings/parent', icon: 'profile-delete'},
])
</script>

<style scoped>

</style>