<!--
 * @Author: 秦少卫
 * @Date: 2022-09-03 19:16:55
 * @LastEditors: 秦少卫
 * @LastEditTime: 2023-05-07 09:34:18
 * @LastEditors: 秦少卫
 * @LastEditTime: 2023-04-10 14:33:18

 * @Description: 保存文件
-->

<template>
  <div class="flex">
    <el-button
      class="border-0 px-0 rounded-full py-0 h-[40px] w-[40px]"
      @click="saveImg"
    >
      save
    </el-button>
    <el-button
      class="bg-primary-500 px-0 rounded-full py-0 h-[40px] w-[40px]"
      @click="publishStory"
    >
      <Icon name="upload-cloud" />
    </el-button>
  </div>
</template>

<script setup name="save-bar">
import Icon from "@/components/TheIcon/Icon.vue";
import { Modal } from "view-ui-plus";
import { clipboardText } from "@/utils/utils.ts";
import useSelect from "@/hooks/select";
import { v4 as uuid } from "uuid";
import { debounce } from "lodash-es";
import { useRouter } from "vue-router";

const userList = useStoryList();
const router = useRouter();
const { canvas } = useSelect();
const cbMap = {
  clipboard() {
    const jsonStr = canvas.editor.getJson();
    clipboardText(JSON.stringify(jsonStr, null, "\t"));
  },

  saveJson() {
    const dataUrl = canvas.editor.getJson();
    const fileStr = `data:text/json;charset=utf-8,${encodeURIComponent(
      JSON.stringify(dataUrl, null, "\t")
    )}`;
    downFile(fileStr, "json");
  },

  saveSvg() {
    const workspace = canvas.c
      .getObjects()
      .find((item) => item.id === "workspace");
    const { left, top, width, height } = workspace;
    const dataUrl = canvas.c.toSVG({
      width,
      height,
      viewBox: {
        x: left,
        y: top,
        width,
        height,
      },
    });
    const fileStr = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(
      dataUrl
    )}`;
    downFile(fileStr, "svg");
  },
};

const saveWith = debounce(function (type) {
  cbMap[type] && typeof cbMap[type] === "function" && cbMap[type]();
}, 300);

const publishStory = () => {
  const workspace = canvas.c
    .getObjects()
    .find((item) => item.id === "workspace");
  canvas.editor.ruler.hideGuideline();
  const { left, top, width, height } = workspace;
  const option = {
    name: "New Image",
    format: "png",
    quality: 1,
    left,
    top,
    width,
    height,
  };
  canvas.c.setViewportTransform([1, 0, 0, 1, 0, 0]);
  const dataUrl = canvas.c.toDataURL(option);
  userList.value
    .filter((item) => item.userId == 3)[0]
    .slides.push({
      id: uuid(),
      image: dataUrl,
      isVisited: false,
    });
  router.push("/home");
};
const saveImg = () => {
  const workspace = canvas.c
    .getObjects()
    .find((item) => item.id === "workspace");
  canvas.editor.ruler.hideGuideline();
  const { left, top, width, height } = workspace;
  const option = {
    name: "New Image",
    format: "png",
    quality: 1,
    left,
    top,
    width,
    height,
  };
  canvas.c.setViewportTransform([1, 0, 0, 1, 0, 0]);
  const dataUrl = canvas.c.toDataURL(option);
  downFile(dataUrl, "png");
};

/**
 * @desc clear canvas 清空画布
 */
const clear = () => {
  canvas.c.getObjects().forEach((obj) => {
    if (obj.id !== "workspace") {
      canvas.c.remove(obj);
    }
  });
  canvas.c.discardActiveObject();
  canvas.c.renderAll();
};

const beforeClear = () => {
  Modal.confirm({
    title: t("tip"),
    content: `<p>${t("clearTip")}</p>`,
    okText: t("ok"),
    cancelText: t("cancel"),
    onOk: () => clear(),
  });
};

function downFile(fileStr, fileType) {
  const anchorEl = document.createElement("a");
  anchorEl.href = fileStr;
  anchorEl.download = `${uuid()}.${fileType}`;
  document.body.appendChild(anchorEl); // required for firefox
  anchorEl.click();
  anchorEl.remove();
}
</script>

<style scoped lang="less">
.save-box {
  display: inline-block;
  padding-right: 10px;
}
</style>
