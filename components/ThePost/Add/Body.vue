<template>
  <section class="add-post-body">
    <section class="flex items-center gap-5">
      <section class="relative w-24 h-24 bg-gray-300 rounded flex-shrink-0" @click="showSelectImage">
        <input type="file" accept="image/*" hidden id="image-input" @change="uploadImage"/>
        <template v-if="newPost.image">
          <img :src="newPost.image" class="absolute left-0 top-0 w-full h-full rounded"/>
        </template>
      </section>
      <el-input class="caption" type="textarea" rows="5" placeholder="Write a caption" v-model="newPost.caption"/>
    </section>
    <el-divider class="my-4"/>
    <el-collapse v-model="activeItem" accordion>
      <el-collapse-item name="location" title="Add Location">
        <Map @changeCity="changeLocation"/>
      </el-collapse-item>
      <el-collapse-item name="music" title="Add Music">
        <Music v-model:activeItem="newPost.music" />
      </el-collapse-item>
    </el-collapse>
    <section class="mt-6">
      <el-button class="btn w-full btn-primary text-white" @click="addPost">
        <Icon name="post"/>
        Add post
      </el-button>
    </section>
  </section>
</template>

<script setup>
import Map from './Map'
import Music from './Music'
import Icon from '@/components/TheIcon/Icon'

const newPost = reactive({
  image: '',
  caption: '',
  location: '',
  music: ''
})
const activeItem = ref('')
const posts = usePosts()
const router = useRouter()

//    methods
const showSelectImage = () => {
  let input = document.getElementById('image-input')
  input.click()
}
const changeLocation = (e) => {
  newPost.location = e
}
const uploadImage = (e) => {
  let file = e.target.files[0]
  newPost.image = URL.createObjectURL(file)
  let input = document.getElementById('image-input')
  input.value = ''
}

const addPost = () => {
  let post = {
    authorId: 3,
    avatar: "/_nuxt/assets/images/avatars/avatar6.jpg",
    caption: newPost.caption,
    commentList: [],
    comments: 0,
    dateOfRelease: " 34 min ago",
    id: posts.value.length,
    image: newPost.image,
    isLiked: false,
    likes: 0,
    location: newPost.location,
    name: "Emma Watson",
    views: 1
  }
  posts.value.push(post)
  router.push({path: '/home'})
}
// hooks
onMounted(() => {
  setTimeout(() => {
    showSelectImage()
  }, 400)
})
</script>

<style scoped>

</style>