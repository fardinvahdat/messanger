<template>
  <div class="grid grid-cols-1 gap-1 mt-2">
    <Post v-for="skill in skills" :state="skill" />
  </div>
</template>

<script setup>

//computed

import Post from "@/components/TheSkills/Post";
const skills = computed(() => {
  console.log(skillsList.value)
  if (account.value.id) {
    return skillsList.value.filter((item) => item.userId == account.value.id);
  }
});

//state

const account = useAccount();
const skillsList = useSkills();
const router = useRouter();

//methods

const showPostsList = (post) => {
  router.push(`/account/post-list?post_id=${post.id}`);
};
</script>