<template>
  <el-menu
    active-text-color="#50CCE8"
    background-color="#0f1c57eb"
    class="post-context-menu rounded-md w-[200px] right-[25px] top-[0] absolute z-50"
    text-color="#fff"
  >
    <el-menu-item index="1">
      <Icon name="alarm-clock" />
      <span>Post alarm</span>
    </el-menu-item>
    <el-menu-item index="2">
      <Icon name="mute" />
      <span>Mute</span>
    </el-menu-item>
    <el-sub-menu index="3">
      <template #title>
        <Icon name="report" />
        <span v-if="user && !user.isReported">Report</span>
        <span v-if="user && user.isReported">Reported</span>
      </template>
      <el-menu-item @click="syncReport" index="1-1"
        >Irrelevant Content</el-menu-item
      >
      <el-menu-item @click="syncReport" index="1-2"
        >False Information</el-menu-item
      >
      <el-menu-item @click="syncReport" index="1-3">Hate Speech</el-menu-item>
      <el-menu-item @click="syncReport" index="1-4"
        >Violence Content</el-menu-item
      >
      <el-menu-item @click="syncReport" index="1-5"
        >Sexual Activity</el-menu-item
      >
    </el-sub-menu>
    <el-menu-item index="4" @click="syncBlock(!user?.isBlocked)">
      <Icon name="block" />
      <span v-if="!user?.isBlocked">Block</span>
      <span v-if="user?.isBlocked">Unblock</span>
    </el-menu-item>
    <el-menu-item
      index="5"
      v-if="props.state.authorId !== 3"
      @click="followHandler(props.state.authorId)"
    >
      <Icon name="unfollow" />
      <span v-if="isFollowed">Unfollow</span>
      <span v-if="!isFollowed">Follow</span>
    </el-menu-item>
  </el-menu>
</template>

<script setup>
import { ref } from "vue";
import Icon from "@/components/TheIcon/Icon.vue";
const props = defineProps({
  state: {
    default: {
      avatar: "",
      name: "",
      location: "",
      dateOfRelease: "",
      image: "",
      views: 0,
      likes: 0,
      comments: 0,
      caption: "",
      saved: false,
    },
  },
});
const emit = defineEmits("close-menu");
const users = useUsers();
const posts = usePosts();
const stage = useStage();
const user = ref(null);
const syncBlock = (isBlock) => {
  users.value.map((item) => {
    if (item.id === props.state.authorId) {
      item.isBlocked = !item.isBlocked;
      user.value = item;
    }
  });
};
const syncReport = (isReport) => {
  users.value.map((item) => {
    if (item.id === props.state.authorId) {
      item.isReported = true;
      user.value = item;
      ElNotification({
        title: "Report Successfully",
        message: h(
          "i",
          { style: "color: green" },
          `You Report ${props.state.name}`
        ),
      });
      emit("close-menu");
    }
  });
};
const followHandler = (id) => {
  console.log(id);
  const user = users.value.filter((item) => item.id === 3)[0];
  const index = user.followings.indexOf(
    user.followings.filter((item) => item.id === id)[0]
  );
  if (index > -1) {
    stage.value = user.followings.filter((item) => item.id === id)[0];
    // only splice array when item is found
    user.followings.splice(index, 1); // 2nd parameter means remove one item only
    ElNotification({
      title: "Unfollowed Successfully",
      message: h(
        "i",
        { style: "color: red" },
        `You Unfollowed ${stage.value.title}`
      ),
    });
    emit("close-menu");
  } else {
    user.followings.push(stage.value);
    ElNotification({
      title: "Followed Successfully",
      message: h(
        "i",
        { style: "color: green" },
        `You Followed ${stage.value.title}`
      ),
    });
    emit("close-menu");
  }
};
onMounted(() => {
  users.value.map((item) => {
    if (item.id === props.state.authorId) {
      user.value = item;
    }
  });
});
const isFollowed = computed(() => {
  const user = users.value.filter((item) => item.id === 3)[0];
  const index = user.followings.indexOf(
    user.followings.filter((item) => item.id === props.state.authorId)[0]
  );
  return index > -1 ? true : false;
});
</script>
