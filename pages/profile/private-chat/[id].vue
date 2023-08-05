<template>
  <section class="private-chat">
    <Header v-model:activeTab="activeTab" @blocked="isBlocked= true"/>
    <template v-if="!isBlocked">
      <Body/>
    </template>
    <template v-else>
      <section class="block-area">
        <BlockLabel @undo="isBlocked = false"/>
      </section>
    </template>
  </section>
</template>

<script setup>
import Header from "@/components/TheProfile/Chat/Header.vue";
import Body from "@/components/TheProfile/Chat/Body.vue";
import BlockLabel from "@/components/TheAccount/BlockLabel";

definePageMeta({
  layout: 'full'
})
const router = useRouter();
const activeTab = ref("");
const isBlocked = ref(false)
const pushPage = (page) => {
  router.push({path: page});
};
// watcher
</script>

<style scoped>
</style>