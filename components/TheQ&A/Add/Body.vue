<template>
  <section class="sample-form grid grid-cols-1 gap-5">
    <section>
      <label class="text-base text-gray-700">Title</label>
      <el-input v-model="newQuestion.title" />
    </section>
    <section>
      <label class="text-base text-gray-700">Description</label>
      <el-input v-model="newQuestion.description" type="textarea" rows="5" />
    </section>
    <section>
      <label class="text-base text-gray-700">Picture</label>
      <el-upload
          v-model:file-list="newQuestion.uploader"
          action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
          list-type="picture-card"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove"
          accept="image/*"
      >
        <el-icon>
          <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.3343 26.6667C20.6981 26.6667 26.6676 20.6971 26.6676 13.3333C26.6676 5.96954 20.6981 0 13.3343 0C5.97051 0 0.000976562 5.96954 0.000976562 13.3333C0.000976562 20.6971 5.97051 26.6667 13.3343 26.6667ZM14.2556 5.46105C14.5 5.70546 14.6373 6.03695 14.6373 6.38259V12.03H20.2848C20.6304 12.03 20.9619 12.1674 21.2063 12.4118C21.4507 12.6562 21.588 12.9877 21.588 13.3333C21.588 13.6789 21.4507 14.0104 21.2063 14.2548C20.9619 14.4993 20.6304 14.6366 20.2848 14.6366H14.6373V20.284C14.6373 20.6297 14.5 20.9611 14.2556 21.2056C14.0112 21.45 13.6797 21.5873 13.334 21.5873C12.9884 21.5873 12.6569 21.45 12.4125 21.2056C12.1681 20.9611 12.0308 20.6297 12.0308 20.284V14.6366H6.38334C6.03769 14.6366 5.7062 14.4993 5.46179 14.2548C5.21739 14.0104 5.08008 13.6789 5.08008 13.3333C5.08008 12.9877 5.21739 12.6562 5.46179 12.4118C5.7062 12.1674 6.03769 12.03 6.38334 12.03H12.0308V6.38259C12.0308 6.03695 12.1681 5.70546 12.4125 5.46105C12.6569 5.21664 12.9884 5.07933 13.334 5.07933C13.6797 5.07933 14.0112 5.21664 14.2556 5.46105Z" fill="#0F1C57"/>
          </svg>
        </el-icon>
      </el-upload>
    </section>
    <section class="">
      <el-button class="btn btn-primary w-full text-white" @click="router.go(-1)">Create question</el-button>
    </section>
  </section>
</template>

<script setup>
const newQuestion = reactive({
  title: '',
  description: '',
  uploader: []
})
const router = useRouter()

// methods

const handleRemove= (uploadFile, uploadFiles) => {
  console.log(uploadFile, uploadFiles)
}

const handlePictureCardPreview = (uploadFile) => {
}
</script>

<style scoped>

</style>