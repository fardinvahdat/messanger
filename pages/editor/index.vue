<template>
  <div class="">
    <import-file
      @insert-photo="imageSrc = $event"
      v-if="menuActive !== 2"
    ></import-file>
    <div style="min-height: calc(100vh - 64px)">
      <div
        style="display: flex; min-height: 100vh"
        class="flex-col overflow-y-auto"
      >
        <div
          class="fixed top-4 max-w-[414px] z-50 flex-col w-full flex"
          v-if="show"
        >
          <div
            class="w-full flex p-[10px] justify-between pl-[15px] gap-2"
            v-if="menuActive !== 2"
          >
            <div class="flex gap-2" v-if="!isDone">
              <NuxtLink
                to="/home"
                class="rounded-full p-[2px] max-w-[36px] min-w-[36px] max-h-[36px] bg-primary-500 flex items-center justify-center"
              >
                <Icon name="arrow-angle-left"
              /></NuxtLink>
              <span
                @click="
                  menuActive = 1;
                  isDrawerisDrawer = false;
                "
              >
                <tools :menuActive="menuActive"></tools
              ></span>
              <span
                @click="
                  menuActive = 2;
                  isDrawerisDrawer = false;
                "
              >
                <svg
                  v-if="menuActive === 2"
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M18 36C27.9411 36 36 27.9411 36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36ZM16.5128 8.0001C16.8677 8.00582 17.1837 8.22905 17.3062 8.56332L21.4056 19.7432L20.0742 21.0986L19.5385 19.639H13.1209L11.6349 23.4775C11.5527 23.69 11.3893 23.8611 11.1809 23.9532C10.9724 24.0453 10.7359 24.0508 10.5234 23.9686C10.3108 23.8863 10.1397 23.723 10.0476 23.5145C9.95548 23.306 9.94997 23.0695 10.0322 22.857L11.7311 18.4691L11.7345 18.4599L15.7035 8.53814C15.7682 8.37719 15.8802 8.23962 16.0247 8.14358C16.1692 8.04753 16.3393 7.99751 16.5128 8.0001ZM16.4659 11.2581L13.7997 17.9207H18.9088L16.4659 11.2581ZM27.2105 18.9407L27.0628 18.8194L27.0594 18.8171C26.5609 18.4454 25.9454 18.2654 25.3251 18.3099C24.7049 18.3545 24.1214 18.6206 23.6812 19.0598L19.3276 23.4901C19.0574 23.7637 18.8605 24.0957 18.7518 24.4574L18.0798 26.692C17.4712 26.7873 16.8513 26.7846 16.2436 26.684C16.2372 26.6829 16.2312 26.6805 16.226 26.6768C16.2208 26.6731 16.2164 26.6682 16.2134 26.6626C16.2103 26.657 16.2085 26.6507 16.2082 26.6443C16.2079 26.6379 16.209 26.6315 16.2115 26.6256L16.2539 26.534C16.3294 26.3772 16.4599 26.0979 16.5034 25.8105C16.5263 25.6503 16.5343 25.4282 16.4473 25.1924C16.3575 24.9478 16.1872 24.7411 15.9642 24.6062C15.5933 24.3773 15.132 24.3601 14.7359 24.383C14.3393 24.4121 13.945 24.4671 13.5556 24.5478C13.0289 24.6504 12.5284 24.8859 12.029 25.1207L12.029 25.1208L12.0228 25.1237C11.3634 25.435 10.7063 25.7441 9.99538 25.7441C9.7401 25.7441 9.49511 25.7029 9.26501 25.6251C9.12421 25.5781 8.96966 25.6926 9.00515 25.8369C9.0704 26.0979 9.1906 26.4516 9.4539 26.7241C9.61361 26.891 9.81688 27.0098 10.0407 27.067C10.2644 27.1243 10.4998 27.1177 10.72 27.048C12.3845 26.5604 13.4904 26.2948 14.2093 26.1746C14.3604 26.1494 14.4726 26.3005 14.4268 26.447C14.3547 26.676 14.2517 27.1087 14.4657 27.546C14.697 28.0222 15.1526 28.2214 15.5464 28.3016C16.8549 28.5717 17.9848 28.5362 19.3654 28.1733C19.4263 28.1634 19.4864 28.1488 19.5451 28.1298L19.679 28.0875C19.8748 28.0303 20.0763 27.9673 20.2846 27.8975C20.3158 27.8874 20.3464 27.8755 20.3762 27.862L21.964 27.348C22.3509 27.222 22.7001 27.0091 22.9794 26.7241L27.3239 22.3052C28.2236 21.3883 28.2202 19.9756 27.3445 19.0701L27.2105 18.9407Z"
                    fill="#50CCE8"
                  />
                </svg>
                <svg
                  v-if="menuActive !== 2"
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M18 36C27.9411 36 36 27.9411 36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36ZM16.5128 8.0001C16.8677 8.00582 17.1837 8.22905 17.3062 8.56332L21.4056 19.7432L20.0742 21.0986L19.5385 19.639H13.1209L11.6349 23.4775C11.5527 23.69 11.3893 23.8611 11.1809 23.9532C10.9724 24.0453 10.7359 24.0508 10.5234 23.9686C10.3108 23.8863 10.1397 23.723 10.0476 23.5145C9.95548 23.306 9.94997 23.0695 10.0322 22.857L11.7311 18.4691L11.7345 18.4599L15.7035 8.53814C15.7682 8.37719 15.8802 8.23962 16.0247 8.14358C16.1692 8.04753 16.3393 7.99751 16.5128 8.0001ZM16.4659 11.2581L13.7997 17.9207H18.9088L16.4659 11.2581ZM27.2105 18.9407L27.0628 18.8194L27.0594 18.8171C26.5609 18.4454 25.9454 18.2654 25.3251 18.3099C24.7049 18.3545 24.1214 18.6206 23.6812 19.0598L19.3276 23.4901C19.0574 23.7637 18.8605 24.0957 18.7518 24.4574L18.0798 26.692C17.4712 26.7873 16.8513 26.7846 16.2436 26.684C16.2372 26.6829 16.2312 26.6805 16.226 26.6768C16.2208 26.6731 16.2164 26.6682 16.2134 26.6626C16.2103 26.657 16.2085 26.6507 16.2082 26.6443C16.2079 26.6379 16.209 26.6315 16.2115 26.6256L16.2539 26.534C16.3294 26.3772 16.4599 26.0979 16.5034 25.8105C16.5263 25.6503 16.5343 25.4282 16.4473 25.1924C16.3575 24.9478 16.1872 24.7411 15.9642 24.6062C15.5933 24.3773 15.132 24.3601 14.7359 24.383C14.3393 24.4121 13.945 24.4671 13.5556 24.5478C13.0289 24.6504 12.5284 24.8859 12.029 25.1207L12.029 25.1208L12.0228 25.1237C11.3634 25.435 10.7063 25.7441 9.99538 25.7441C9.7401 25.7441 9.49511 25.7029 9.26501 25.6251C9.12421 25.5781 8.96966 25.6926 9.00515 25.8369C9.0704 26.0979 9.1906 26.4516 9.4539 26.7241C9.61361 26.891 9.81688 27.0098 10.0407 27.067C10.2644 27.1243 10.4998 27.1177 10.72 27.048C12.3845 26.5604 13.4904 26.2948 14.2093 26.1746C14.3604 26.1494 14.4726 26.3005 14.4268 26.447C14.3547 26.676 14.2517 27.1087 14.4657 27.546C14.697 28.0222 15.1526 28.2214 15.5464 28.3016C16.8549 28.5717 17.9848 28.5362 19.3654 28.1733C19.4263 28.1634 19.4864 28.1488 19.5451 28.1298L19.679 28.0875C19.8748 28.0303 20.0763 27.9673 20.2846 27.8975C20.3158 27.8874 20.3464 27.8755 20.3762 27.862L21.964 27.348C22.3509 27.222 22.7001 27.0091 22.9794 26.7241L27.3239 22.3052C28.2236 21.3883 28.2202 19.9756 27.3445 19.0701L27.2105 18.9407Z"
                    fill="#90A4AE"
                  />
                </svg>
              </span>
              <span
                @click="
                  menuActive = 3;
                  isDrawer = true;
                "
              >
                <div
                  class="bg-gray-300 rounded-full p-[2px] max-w-[36px] max-h-[36px]"
                  :class="menuActive == 3 ? 'bg-primary-500' : ''"
                >
                  <svg
                    width="30px"
                    height="30px"
                    viewBox="0 0 24 24"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                  >
                    <!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
                    <title>ic_fluent_sticker_add_24_regular</title>
                    <desc>Created with Sketch.</desc>
                    <g
                      id="🔍-Product-Icons"
                      stroke="none"
                      stroke-width="1"
                      fill="none"
                      fill-rule="evenodd"
                    >
                      <g
                        id="ic_fluent_sticker_add_24_regular"
                        fill="#ffffff"
                        fill-rule="nonzero"
                      >
                        <path
                          d="M17.5,12 C20.5375661,12 23,14.4624339 23,17.5 C23,20.5375661 20.5375661,23 17.5,23 C14.4624339,23 12,20.5375661 12,17.5 C12,14.4624339 14.4624339,12 17.5,12 Z M17.5,13.9992349 L17.4101244,14.0072906 C17.2060313,14.0443345 17.0450996,14.2052662 17.0080557,14.4093593 L17,14.4992349 L16.9996498,16.9992349 L14.4976498,17 L14.4077742,17.0080557 C14.2036811,17.0450996 14.0427494,17.2060313 14.0057055,17.4101244 L13.9976498,17.5 L14.0057055,17.5898756 C14.0427494,17.7939687 14.2036811,17.9549004 14.4077742,17.9919443 L14.4976498,18 L17.0006498,17.9992349 L17.0011076,20.5034847 L17.0091633,20.5933603 C17.0462073,20.7974534 17.207139,20.9583851 17.411232,20.995429 L17.5011076,21.0034847 L17.5909833,20.995429 C17.7950763,20.9583851 17.956008,20.7974534 17.993052,20.5933603 L18.0011076,20.5034847 L18.0006498,17.9992349 L20.5045655,18 L20.5944411,17.9919443 C20.7985342,17.9549004 20.9594659,17.7939687 20.9965098,17.5898756 L21.0045655,17.5 L20.9965098,17.4101244 C20.9594659,17.2060313 20.7985342,17.0450996 20.5944411,17.0080557 L20.5045655,17 L17.9996498,16.9992349 L18,14.4992349 L17.9919443,14.4093593 C17.9549004,14.2052662 17.7939687,14.0443345 17.5898756,14.0072906 L17.5,13.9992349 Z M17.75,3 C19.5449254,3 21,4.45507456 21,6.25 L21.0012092,12.0225923 C20.5377831,11.7257502 20.0341997,11.4861106 19.5004209,11.3136354 L19.5,6.25 C19.5,5.28350169 18.7164983,4.5 17.75,4.5 L6.25,4.5 C5.28350169,4.5 4.5,5.28350169 4.5,6.25 L4.5,17.75 C4.5,18.7164983 5.28350169,19.5 6.25,19.5 L11.3136354,19.5004209 C11.4861106,20.0341997 11.7257502,20.5377831 12.0225923,21.0012092 L6.25,21 C4.45507456,21 3,19.5449254 3,17.75 L3,6.25 C3,4.45507456 4.45507456,3 6.25,3 L17.75,3 Z M9.17660394,14.1356601 C9.8853094,14.6258444 10.6572693,14.9085935 11.5043525,14.9869905 C11.309958,15.4481668 11.1676574,15.9381577 11.0846833,16.4480642 C10.0901654,16.3130446 9.16652496,15.9525282 8.32332796,15.3693213 C7.98266181,15.1336957 7.89750966,14.6665189 8.13313532,14.3258527 C8.36876097,13.9851866 8.83593779,13.9000344 9.17660394,14.1356601 Z M9.00044779,7.75115873 C9.69041108,7.75115873 10.2497368,8.3104845 10.2497368,9.00044779 C10.2497368,9.69041108 9.69041108,10.2497368 9.00044779,10.2497368 C8.3104845,10.2497368 7.75115873,9.69041108 7.75115873,9.00044779 C7.75115873,8.3104845 8.3104845,7.75115873 9.00044779,7.75115873 Z M15.0004478,7.75115873 C15.6904111,7.75115873 16.2497368,8.3104845 16.2497368,9.00044779 C16.2497368,9.69041108 15.6904111,10.2497368 15.0004478,10.2497368 C14.3104845,10.2497368 13.7511587,9.69041108 13.7511587,9.00044779 C13.7511587,8.3104845 14.3104845,7.75115873 15.0004478,7.75115873 Z"
                          id="🎨-Color"
                        ></path>
                      </g>
                    </g>
                  </svg>
                </div>
              </span>
            </div>
            <div class="flex gap-4" v-if="!isDone">
              <undoredo></undoredo>

              <svg
                @click="isDone = true"
                v-if="!isDone"
                height="35px"
                width="35px"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="#000000"
                stroke-width="3.2640000000000002"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke="#CCCCCC"
                  stroke-width="0.128"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <polyline points="44 24 28 40 20 32"></polyline>
                  <path d="M55.8 35.13A24 24 0 1 1 35.13 8.2"></path>
                </g>
              </svg>
            </div>
            <svg
              @click="isDone = false"
              v-if="isDone"
              height="35px"
              width="35px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4M9.35443 12.4346L15.9429 5.92003C16.4684 5.40046 17.3049 5.3718 17.8647 5.85418C18.4812 6.38542 18.5247 7.32554 17.96 7.91149L11.481 14.6335L9 15L9.35443 12.4346Z"
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </g>
            </svg>
            <save v-if="isDone"></save>
          </div>
          <div class="content" v-if="!isDone">
            <!-- 常用元素 -->
            <div v-show="menuActive === 1" class="left-panel">
              <attribute v-if="show"></attribute>
            </div>
            <div v-show="menuActive === 2" class="left-panel">
              <Drawing
                v-if="show"
                @changeMenuActive="menuActive = 1"
                :menuActive="menuActive"
              ></Drawing>
            </div>
            <!-- 背景设置 -->
            <div v-show="menuActive === 3" class="left-panel">
              <el-drawer
                v-model="isDrawer"
                :with-header="false"
                direction="btt"
                size="70%"
                custom-class="share-drawer"
              >
                <svgEl
                  @close-drawer="
                    isDrawer = false;
                    menuActive = 1;
                  "
                ></svgEl>
              </el-drawer>
            </div>
          </div>
        </div>
        <!-- 画布区域 -->
        <div
          id="workspace"
          style="
            width: 100%;
            position: relative;
            max-height: calc(100vh - 70px);
          "
          class="h-screen"
        >
          <div class="canvas-box">
            <div class="inside-shadow"></div>
            <canvas id="canvas"></canvas>
          </div>
        </div>
        <!-- 属性区域 380-->
        <filters
          v-if="!isDone && imageSrc !== ''"
          :imageSrc="imageSrc"
        ></filters>
        <set-size v-if="show"></set-size>
        <div style="width: 100%; padding: 10px; background: #fff" v-if="false">
          <div v-if="show" style="padding-top: 10px">
            <!-- 新增字体样式使用 -->
            <!-- <Button @click="getFontJson" size="small">获取字体数据</Button> -->
            <!-- <bg-bar></bg-bar>
            <group></group> -->
            <!-- <replaceImg></replaceImg> -->
            <!-- <div class="attr-item">
              <lock></lock>
              <dele></dele>
              <clone></clone>
            </div> -->
            <!-- 组对齐方式 -->
            <!-- <align></align> -->
            <!-- 居中对齐 -->
            <!-- <center-align></center-align> -->
            <!-- 翻转 -->
            <!-- <flip></flip> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 导入元素
import importJSON from "@/components/TheEditor/importJSON.vue";
import importFile from "@/components/TheEditor/importFile.vue";
import fontTmpl from "@/components/TheEditor/fontTmpl.vue";

// 顶部组件
import align from "@/components/TheEditor/align.vue";
import centerAlign from "@/components/TheEditor/centerAlign.vue";
import flip from "@/components/TheEditor/flip.vue";
import previewCurrent from "@/components/TheEditor/previewCurrent";
import save from "@/components/TheEditor/save.vue";
import lang from "@/components/TheEditor/lang.vue";
import clone from "@/components/TheEditor/clone.vue";
import group from "@/components/TheEditor/group.vue";
import zoom from "@/components/TheEditor/zoom.vue";
import dragMode from "@/components/TheEditor/dragMode.vue";
import lock from "@/components/TheEditor/lock.vue";
import dele from "@/components/TheEditor/del.vue";

// 左侧组件
import importTmpl from "@/components/TheEditor/importTmpl.vue";
import tools from "@/components/TheEditor/tools.vue";
import svgEl from "@/components/TheEditor/svgEl.vue";
import bgBar from "@/components/TheEditor/bgBar.vue";
import setSize from "@/components/TheEditor/setSize.vue";
import replaceImg from "@/components/TheEditor/replaceImg.vue";
import filters from "@/components/TheEditor/filters.vue";

// 右侧组件
import history from "@/components/TheEditor/history.vue";
import layer from "@/components/TheEditor/layer.vue";
import attribute from "@/components/TheEditor/attribute.vue";
import Drawing from "@/components/TheEditor/Drawing.vue";
import undoredo from "@/components/TheEditor/undoredo.vue";

// 右键菜单
import mouseMenu from "@/components/TheEditor/contextMenu/index.vue";

import Icon from "@/components/TheIcon/Icon.vue";

// 功能组件
import CanvasEventEmitter from "@/utils/event/notifier";
import { downFile } from "@/utils/utils";
import { fabric } from "fabric";
import Editor from "@/core";
// import Hammer from "hammerjs";

const event = new CanvasEventEmitter();
const canvas = {};
export default {
  name: "HomeView",
  provide: {
    canvas,
    fabric,
    event,
  },
  data() {
    return {
      isDrawer: false,
      menuActive: 0,
      show: false,
      select: null,
      ruler: false,
      imageSrc: "",
      addTextBox: false,
      isDone: false,
    };
  },
  components: {
    setSize,
    tools,
    bgBar,
    lock,
    layer,
    align,
    attribute,
    dele,
    importFile,
    dragMode,
    previewCurrent,
    save,
    lang,
    importJSON,
    clone,
    flip,
    importTmpl,
    centerAlign,
    group,
    zoom,
    svgEl,
    history,
    mouseMenu,
    fontTmpl,
    replaceImg,
    filters,
    Drawing,
    undoredo,
    Icon,
  },
  created() {
    // this.$Spin.show();
  },
  watch: {
    ruler: {
      handler(value) {
        if (!this.canvas.ruler) return;
        if (value) {
          this.canvas.ruler.enable();
        } else {
          this.canvas.ruler.disable();
        }
      },
    },
  },
  async mounted() {
    this.canvas = new fabric.Canvas("canvas", {
      selection: false,
      fireRightClick: false, // 启用右键，button的数字为3
      stopContextMenu: false, // 禁止默认右键菜单
      controlsAboveOverlay: false, // 超出clipPath后仍然展示控制条
    });
    this.canvas.preserveObjectStacking = true;
    canvas.c = this.canvas;
    event.init(canvas.c);
    canvas.editor = new Editor(canvas.c);

    canvas.c.renderAll();
    if (process.client) {
      await this.$nextTick();
      let hammertime = new Hammer(canvas.c.upperCanvasEl);
      hammertime.get("pinch").set({ enable: true });
      hammertime.get("pan").set({ direction: Hammer.DIRECTION_ALL });
      let scale = 1;
      let activeObject;

      // hammertime.on("pinchin pinchout", function (ev) {
      //   console.log(ev);
      //   activeObject = canvas.c.getActiveObject() || canvas.c.getActiveGroup();
      //   if (activeObject) {
      //     ev.type === "pinchin"
      //       ? scale > 0.7
      //         ? (scale = scale * 0.996)
      //         : scale
      //       : scale < 1.3
      //       ? (scale = scale * 1.003)
      //       : scale;
      //     activeObject.scale(scale);
      //     activeObject.setCoords();
      //     canvas.c.requestRenderAll();
      //   }
      // });

      var pinch = new Hammer.Pinch();
      var rotate = new Hammer.Rotate();
      pinch.recognizeWith(rotate);
      hammertime.add([pinch, rotate]);
      hammertime.on("pinch", function (ev) {
        activeObject = canvas.c.getActiveObject();
        console.log(ev);
        if (activeObject) {
          activeObject.set("scaleX", ev.scale);
          activeObject.set("scaleY", ev.scale);
          canvas.c.renderAll();
        }
      });
    }
    this.show = true;
  },
  methods: {
    // 获取字体数据 新增字体样式使用
    getFontJson() {
      const activeObject = this.canvas.getActiveObject();
      if (activeObject) {
        const json = activeObject.toJSON([
          "id",
          "gradientAngle",
          "selectable",
          "hasControls",
        ]);
        console.log(json);
        const fileStr = `data:text/json;charset=utf-8,${encodeURIComponent(
          JSON.stringify(json, null, "\t")
        )}`;
        downFile(fileStr, "font.json");
        const dataUrl = activeObject.toDataURL();
        downFile(dataUrl, "font.png");
      }
    },
  },
};
</script>
<style lang="less" scoped>
.logo {
  width: 30px;
  height: 30px;
  display: inline-block;
  margin-right: 10px;
  text-align: center;
  vertical-align: middle;
  .ivu-icon {
    vertical-align: super;
  }
}

// 属性面板样式
:deep(.attr-item) {
  position: relative;
  margin-bottom: 12px;
  height: 40px;
  padding: 0 10px;
  background: #f6f7f9;
  border: none;
  border-radius: 4px;
  display: flex;
  align-items: center;
  .ivu-tooltip {
    text-align: center;
    flex: 1;
  }
}

.ivu-menu-vertical .menu-item {
  text-align: center;
  padding: 10px 2px;
  box-sizing: border-box;
  font-size: 12px;

  & > i {
    margin: 0;
  }
}

:deep(.ivu-layout-header) {
  --height: 45px;
  padding: 0 10px;
  border-bottom: 1px solid #eef2f8;
  background: #fff;
  height: var(--height);
  line-height: var(--height);
}

.home,
.ivu-layout {
  height: 100vh;
}

.icon {
  display: block;
}

.canvas-box {
  position: relative;
}
// 画布内阴影
.inside-shadow {
  position: absolute;
  width: 100%;
  height: 100%;
  box-shadow: inset 0 0 9px 2px #0000001f;
  z-index: 2;
  pointer-events: none;
}

#canvas {
  margin: 0 auto;
}

#workspace {
  overflow: hidden;
}

.content {
  flex: 1;
  width: 414px;
  padding: 10px;
  padding-top: 0;
  height: 100%;
  overflow-y: auto;
}

.ivu-menu-light.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu) {
  background: none;
}
// 标尺
.switch {
  margin-right: 10px;
}
// 网格背景
.design-stage-grid {
  --offsetX: 0px;
  --offsetY: 0px;
  --size: 16px;
  --color: #dedcdc;
  background-image: linear-gradient(
      45deg,
      var(--color) 25%,
      transparent 0,
      transparent 75%,
      var(--color) 0
    ),
    linear-gradient(
      45deg,
      var(--color) 25%,
      transparent 0,
      transparent 75%,
      var(--color) 0
    );
  background-position: var(--offsetX) var(--offsetY),
    calc(var(--size) + var(--offsetX)) calc(var(--size) + var(--offsetY));
  background-size: calc(var(--size) * 2) calc(var(--size) * 2);
}
</style>
