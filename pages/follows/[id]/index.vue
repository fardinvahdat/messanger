<template>
  <section class="follows border-[1px] min-h-screen px-3 bg-white">
    <Header />
    <el-tabs v-model="activeName" class="demo-tabs" v-if="state">
      <el-tab-pane
        :label="state.followers.length + ' followers'"
        name="followers"
        ><FollowersList
      /></el-tab-pane>
      <el-tab-pane
        :label="state.followings.length + ' followings'"
        name="followings"
        ><FollowingsList
      /></el-tab-pane>
    </el-tabs>
  </section>
</template>
<script setup>
import Header from "@/components/TheFollows/Header.vue";
import FollowersList from "@/components/TheFollows/FollowersList.vue";
import FollowingsList from "@/components/TheFollows/FollowingsList.vue";
import Icon from "@/components/TheIcon/Icon.vue";
import { useRoute } from "vue-router";
import { ref } from "vue";

//state

const users = useUsers();
const state = ref(null);
const activeName = useFollowMode();
const route = useRoute();

//mounted

onMounted(() => {
  state.value = users.value.filter((item) => item.id == route.params.id)[0];
});
</script>