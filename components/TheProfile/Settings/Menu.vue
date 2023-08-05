<template>
  <section class="grid grid-cols-1">
    <section class="grid grid-cols-2 gap-4">
      <Item
        :item="item"
        v-for="item in leftItems"
        :key="item.id"
        @click="handleItems(item)"
      />
    </section>
    <!-- <section>
      <section>
        <h1 class="font-medium text-gray-700 text-base">Account</h1>
        <hr class="my-2 border border-gray-400 border-opacity-30" />
        <section class="grid grid-cols-1 gap-4">
          <Item :item="item" v-for="item in accountList" :key="item.id" />
        </section>
      </section>
      <section class="mt-10">
        <h1 class="font-medium text-gray-700 text-base">Logins</h1>
        <hr class="my-2 border border-gray-400 border-opacity-30" />
        <section class="grid grid-cols-1 gap-4">
          <Item :item="item" v-for="item in loginsList" :key="item.id" />
        </section>
      </section>
    </section> -->
  </section>
</template>

<script setup>
import Icon from "@/components/TheIcon/Icon";
import Item from "./Item";
import { useRouter } from "vue-router";

const router = useRouter();
const activeTab = useProfileTab();
const leftItems = ref([
  {
    id: 1,
    name: "Notifications",
    href: "/profile/settings/notification",
    icon: "profile-notifications",
  },
  {
    id: 2,
    name: "Archives",
    href: "/archives",
    icon: "profile-archives",
  },
  {
    id: 3,
    name: "Saved",
    href: "/profile/settings/saved",
    icon: "profile-saved",
  },
  {
    id: 4,
    name: "Posts",
    href: "/profile/settings",
    icon: "profile-posts",
  },
  {
    id: 5,
    name: "Skills",
    href: "/profile/settings",
    icon: "skill",
  },
  {
    id: 6,
    name: "Flashes",
    href: "/profile/settings/stories",
    icon: "profile-flashes",
  },
  {
    id: 7,
    name: "Chats",
    href: "/profile/private-chat",
    icon: "profile-chats",
  },
  {
    id: 8,
    name: "Questions",
    href: "/profile/settings",
    icon: "profile-questions",
  },
  {
    id: 9,
    name: "Answers",
    href: "/profile/settings",
    icon: "profile-answers",
  },
  {
    id: 10,
    name: "Password",
    href: "/profile/settings/security",
    icon: "profile-password",
  },
]);
// const accountList = ref([
//   {
//     id: 1,
//     name: "Activity",
//     href: "/profile/settings/activity",
//     icon: "profile-activity",
//   },
//   {
//     id: 2,
//     name: "Privacy",
//     href: "/profile/settings/privacy",
//     icon: "profile-privacy",
//   },
//   {
//     id: 3,
//     name: "Password",
//     href: "/profile/settings/security",
//     icon: "profile-password",
//   },
// ]);
// const loginsList = ref([
//   {
//     id: 1,
//     name: "Log out",
//     href: "/login",
//     icon: "profile-logout",
//   },
//   {
//     id: 2,
//     name: "Delete",
//     href: "/profile/settings",
//     icon: "profile-delete",
//   },
// ]);

//methdos

const handleItems = (item) => {
  console.log(item);
  if (item.name == "Skills") {
    router.push("/profile");
    activeTab.value = "Skill";
  } else if (item.name == "Flashes") {
    router.push("/profile/settings/stories");
  } else if (item.name == "Posts") {
    router.push("/profile");
    activeTab.value = "Post";
  } else if (item.name == "Chats") {
    router.push("/profile/private-chat");
    activeTab.value = "Chat";
  } else if (item.name == "Questions") {
    router.push("/profile");
    activeTab.value = "Question";
  } else if (item.name == "Answers") {
    router.push("/profile");
    activeTab.value = "Answer";
  }
};
</script>

<style scoped></style>
