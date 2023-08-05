<template>
  <el-menu
    active-text-color="#50CCE8"
    background-color="#0f1c57eb"
    class="post-context-menu rounded-md w-[200px] right-[25px] top-[0] absolute z-50"
    text-color="#fff"
  >
    <el-menu-item index="1" @click="editPost">
      <Icon name="edit" />
      <span>Edit</span>
    </el-menu-item>
    <el-menu-item index="2" @click="deletePostHandler">
      <Icon name="trash" />
      <span class="text-error-800 font-bold">Delete</span>
    </el-menu-item>
  </el-menu>
</template>

<script setup>
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
  posts: [],
});
const emit = defineEmits("update");
const posts = usePosts();
const router = useRouter()

const deletePostHandler = () => {
  const index = props.posts.indexOf(props.state);
  console.log(props.posts);
  if (index > -1) {
    props.posts.splice(index, 1);
    emit("update");
  }
  console.log(props.posts);
};
const editPost = () => {

  const index = props.posts.indexOf(props.state);
  router.push({ path: `/profile/post/${props.posts[index].id}`})
}
</script>
