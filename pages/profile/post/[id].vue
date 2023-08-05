<template>

  <section class="py-6 px-4 settings-activity-page relative min-h-screen">
    <section class="flex items-center gap-3">
      <el-button class="btn" text @click="router.go(-1)">
        <svg
            width="9"
            height="15"
            viewBox="0 0 9 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
          <path
              d="M8.69102 0.293557C8.59373 0.200504 8.47815 0.126676 8.3509 0.0763025C8.22366 0.0259291 8.08725 0 7.94948 0C7.81172 0 7.6753 0.0259291 7.54806 0.0763025C7.42081 0.126676 7.30524 0.200504 7.20794 0.293557L0.245038 6.93634C0.167362 7.01029 0.105737 7.09813 0.0636898 7.19483C0.021643 7.29154 0 7.3952 0 7.49989C0 7.60459 0.021643 7.70825 0.0636898 7.80495C0.105737 7.90166 0.167362 7.9895 0.245038 8.06345L7.20794 14.7062C7.61851 15.0979 8.28045 15.0979 8.69102 14.7062C9.10159 14.3145 9.10159 13.683 8.69102 13.2913L2.62466 7.4959L8.6994 1.70045C9.10159 1.31675 9.10159 0.677255 8.69102 0.293557Z"
              fill="#263238"
          />
        </svg>
      </el-button>
      <section class="flex items-center gap-1 grow-0">
        <Icon name="post"/>
        <h2 class="font-medium text-lg text-gray-700">Edit post</h2>
      </section>
    </section>
    <hr class="my-2 border border-gray-300 border-opacity-10" />
    <section class="grid grid-cols-1 gap-5">
      <section class="bg-gray-200 rounded flex items-center relative" @click="openFileInput">
        <img :src="currentPost.image" class="max-h-[250px] mx-auto" />
        <section class="absolute left-0 top-0 w-full h-full flex justify-center items-center">
          <el-button class="btn w-12 h-12 bg-gray-500 bg-opacity-50 rounded-full" text>
          <Icon name="upload-cloud" />
          </el-button>
        </section>
        <input type="file" accept="image/*" hidden ref="image_input" @change="uploadImage" />
      </section>
      <section>
        <label class="flex items-center gap-2 font-normal text-lg text-gray-500">
          Caption
        </label>
        <el-input class="mt-2" type="textarea" v-model="currentPost.caption" rows="8" />
      </section>
      <el-button class="btn btn-primary w-full text-white" @click="router.go(-1)">
        Update
      </el-button>
    </section>
  </section>
</template>

<script setup>
import Icon from '@/components/TheIcon/Icon'
const router = useRouter()
const route = useRoute()
const posts = usePosts()
const currentPost = ref(posts.value.find(item=> item.id == route.params.id))
const image_input = ref('')

// methods
const openFileInput = () => {
  image_input.value.click()
}
const uploadImage = (e) => {
  var reader;
  let image = e.target.files[0]
  if (image) {
    reader = new FileReader();

    reader.onload = function(e) {
      currentPost.value.image = e.target.result
    }

    reader.readAsDataURL(image);
  }
}
onMounted(()=> {
  console.log(currentPost.value)
})
</script>

<style scoped>

</style>