<!--
 * @Author: 秦少卫
 * @Date: 2022-09-03 19:16:55
 * @LastEditors: 秦少卫
 * @LastEditTime: 2023-02-25 21:53:19
 * @Description: 插入SVG元素
-->

<template>
  <button
    v-if="showBtn"
    ref="insertImg"
    type="button"
    id="insertImg"
    @click="insertImg"
    class="rounded-lg w-full text-gray-700 bg-primary-500 mt-8 text-lg py-2 text-center fixed bottom-[80px] z-50 max-w-[414px]"
  >
    Upload
  </button>
</template>

<script>
import { getImgStr, selectFiles } from "@/utils/utils";
import select from "@/mixins/select";
import { v4 as uuid } from "uuid";

export default {
  name: "ToolBar",
  mixins: [select],
  data() {
    return {
      showBtn: true,
      svgStr: "",
    };
  },
  mounted() {},
  methods: {
    insertTypeHand(type) {
      this[type]();
    },
    // 插入图片
    insertImg() {
      selectFiles({ accept: "image/*", multiple: false }).then((fileList) => {
        Array.from(fileList).forEach((item) => {
          getImgStr(item).then((file) => {
            this.insertImgFile(file);
          });
        });
      });
      this.showBtn = false;
    },
    // 插入Svg
    insertSvg() {
      selectFiles({ accept: ".svg", multiple: true }).then((fileList) => {
        Array.from(fileList).forEach((item) => {
          getImgStr(item).then((file) => {
            this.insertSvgFile(file);
          });
        });
      });
    },
    // 插入SVG元素
    insertSvgStrModal() {
      this.svgStr = "";
    },
    // 插入图片文件
    insertImgFile(file) {
      const imgEl = document.createElement("img");
      imgEl.src = file || this.imgFile;
      // context.drawImage(imgEl, 0, 0, 888, 1332, 244, 96, 592, 888);
      // 插入页面
      document.body.appendChild(imgEl);
      imgEl.onload = () => {
        let workSpace = this.canvas.c
          .getObjects()
          .filter((item) => item.id === "workspace")[0];
        // create image canvas
        const canvasEl = document.createElement("canvas");
        canvasEl.width = imgEl.width;
        canvasEl.height = imgEl.height;
        const ctx = canvasEl.getContext("2d");
        ctx.drawImage(imgEl, 0, 0, imgEl.width, imgEl.height);
        const imgInstance = new this.fabric.Image(canvasEl, {
          id: "image",
          name: "图片1",
          left: 0,
          top: 0,
          allowTouchScrolling: false,
          hasBorders: false,
          strokeWidth: 1,
          lockMovementX: false,
          lockMovementY: false,
          centeredRotation: true,
          hasControls: false,
        });

        imgInstance.scaleToWidth(workSpace.width);
        imgInstance.scaleToHeight(workSpace.height);
        // 设置缩放
        let imgInstance1 = imgInstance;
        this.$emit("insert-photo", imgInstance1);
        this.autoZoom();
        this.canvas.c.add(imgInstance1);
        this.canvas.c.setActiveObject(imgInstance1);
        this.position("center");
        this.canvas.c.renderAll();
        // 删除页面中的图片元素
        imgEl.remove();
      };
    },
    // 插入文件元素
    insertSvgFile(svgFile) {
      const This = this;
      this.fabric.loadSVGFromURL(
        svgFile || this.svgFile,
        (objects, options) => {
          const item = This.fabric.util.groupSVGElements(objects, {
            ...options,
            name: "defaultSVG",
            id: uuid(),
          });
          This.canvas.c.add(item).centerObject(item).renderAll();
        }
      );
    },
    // 插入字符串元素
    insertSvgStr() {
      const This = this;
      this.fabric.loadSVGFromString(this.svgStr, (objects, options) => {
        const item = This.fabric.util.groupSVGElements(objects, {
          ...options,
          name: "defaultSVG",
          id: uuid(),
        });
        This.canvas.c.add(item).centerObject(item).renderAll();
      });
    },
    position(name) {
      this.canvas.editor.centerAlign.position(name);
    },
    autoZoom() {
      this.canvas.editor.editorWorkspace.auto();
    },
  },
};
</script>

<style scoped lang="less">
:deep(.ivu-select-dropdown) {
  z-index: 999;
}
</style>
