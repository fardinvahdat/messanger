<!--
 * @Descripttion:
 * @version:
 * @Author: June
 * @Date: 2023-05-20 09:18:28
 * @LastEditors: June
 * @LastEditTime: 2023-05-20 22:53:50
-->
<template>
  <Dropdown @on-click="setLang">
    <Button type="text">
      En
      <Icon type="ios-arrow-down"></Icon>
    </Button>
    <template #list>
      <DropdownMenu>
        <DropdownItem
          v-for="lang in langList"
          :key="lang.langType"
          :name="lang.langType"
        >
          {{ lang.langName }}
        </DropdownItem>
      </DropdownMenu>
    </template>
  </Dropdown>
</template>

<script setup name="saveBar">
import { setLocal } from "@/utils/local";
import { LANG } from "@/config/constants/app";

const LANGMAP = {
  en: "En",
};

let langList = reactive(
  Object.keys(LANGMAP).map((key) => ({ langType: key, langName: LANGMAP[key] }))
);

// 设置语言
</script>

<style scoped lang="less"></style>
