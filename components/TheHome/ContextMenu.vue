<template>
  <el-menu
    active-text-color="#50CCE8"
    background-color="#0f1c57eb"
    class="home-context-menu rounded-md w-[200px] right-[45px] bottom-[0] absolute z-50"
    text-color="#fff"
    @select="selectMenu"
  >
        <el-menu-item index="1">
          <Icon name="circle-plus-white" />
          <span>Add post</span>
        </el-menu-item>
<!--    <el-menu-item index="1">-->
<!--      <Icon name="heart-location" />-->
<!--      <span>Place to go</span>-->
<!--    </el-menu-item>-->
<!--    <el-menu-item index="2">-->
<!--      <Icon name="heart-book" />-->
<!--      <span>Book</span>-->
<!--    </el-menu-item>-->
<!--    <el-menu-item index="3">-->
<!--      <Icon name="film" />-->
<!--      <span>Film</span>-->
<!--    </el-menu-item>-->
<!--    <el-menu-item index="4">-->
<!--      <Icon name="music" />-->
<!--      <span>Music</span>-->
<!--    </el-menu-item>-->
<!--    <el-menu-item index="5">-->
<!--      <Icon name="idea" />-->
<!--      <span>Idea</span>-->
<!--    </el-menu-item>-->

<!--    <el-sub-menu index="6">-->
<!--      <template #title>-->
<!--        <Icon name="course" />-->
<!--        <span>Course</span>-->
<!--      </template>-->
<!--      <el-menu-item index="1-1"><Icon name="math" /> Math</el-menu-item>-->
<!--      <el-menu-item index="1-2"><Icon name="physics" /> Physics</el-menu-item>-->
<!--      <el-menu-item index="1-3"><Icon name="biology" /> Biology</el-menu-item>-->
<!--      <el-menu-item index="1-4"-->
<!--        ><Icon name="chemistry" /> Chemistry</el-menu-item-->
<!--      >-->
<!--      <el-menu-item index="1-5"-->
<!--        ><Icon name="geography" /> Geography</el-menu-item-->
<!--      >-->
<!--    </el-sub-menu>-->
<!--    <el-menu-item index="7">-->
<!--      <Icon name="circle-plus-white" />-->
<!--      <span>Add Folder</span>-->
<!--    </el-menu-item>-->
<!--    <el-menu-item index="8">-->
<!--      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--        <path d="M17.5 16.6665V4.99984C17.5 4.08067 16.7525 3.33317 15.8333 3.33317H14.1667V1.6665H12.5V3.33317H7.5V1.6665H5.83333V3.33317H4.16667C3.2475 3.33317 2.5 4.08067 2.5 4.99984V16.6665C2.5 17.5857 3.2475 18.3332 4.16667 18.3332H15.8333C16.7525 18.3332 17.5 17.5857 17.5 16.6665ZM7.5 14.9998H5.83333V13.3332H7.5V14.9998ZM7.5 11.6665H5.83333V9.99984H7.5V11.6665ZM10.8333 14.9998H9.16667V13.3332H10.8333V14.9998ZM10.8333 11.6665H9.16667V9.99984H10.8333V11.6665ZM14.1667 14.9998H12.5V13.3332H14.1667V14.9998ZM14.1667 11.6665H12.5V9.99984H14.1667V11.6665ZM15.8333 7.49984H4.16667V5.83317H15.8333V7.49984Z" fill="#FFFFFF"/>-->
<!--      </svg>-->
<!--      <span>Calendar</span>-->
<!--    </el-menu-item>-->
  </el-menu>
</template>

<script setup>
import Icon from "@/components/TheIcon/Icon.vue";
const router = useRouter()
const selectMenu = (e) => {
  if (e == 8) {
    router.push({ path: '/calendar' })
  }
  else if (e == 1) {
    router.push({ path: '/post/add' })
  }
}
</script>