<template>
  <el-menu
    active-text-color="#50CCE8"
    background-color="#0f1c57eb"
    class="post-context-menu rounded-md w-[200px] right-[25px] top-[44px] absolute z-50"
    text-color="#fff"
    @select="selectMenu"
  >
    <el-sub-menu index="1">
      <template #title>
        <Icon name="report" />
        <span v-if="account && !account.isReported">Report</span>
        <span v-if="account && account.isReported">Reported</span>
      </template>
      <el-menu-item index="1-1">Irrelevant Content</el-menu-item>
      <el-menu-item index="1-2">False Information</el-menu-item>
      <el-menu-item index="1-3">Hate Speech</el-menu-item>
      <el-menu-item index="1-4">Violence Content</el-menu-item>
      <el-menu-item index="1-5">Sexual Activity</el-menu-item>
    </el-sub-menu>
    <el-menu-item index="2">
      <Icon name="block" />
      <span v-if="account && !account.isBlocked">Block</span>
      <span v-if="account && account.isBlocked">Unblock</span>
    </el-menu-item>
  </el-menu>
</template>

<script setup>
import Icon from "@/components/TheIcon/Icon.vue";
const emits = defineEmits();
const selectMenu = (e) => {
  if (e == 2) {
    emits("select", "block");
  } else {
    emits("select", "report");
  }
};
const account = useAccount();
</script>
