<template>
  <div
    class="flex max-w-[394px] w-[calc(100%-20px)] px-[10px] justify-between gap-2 fixed"
  >
    <div class="flex gap-2 w-full">
      <span
        @click="PencilMode"
        class="w-full h-[36px] flex justify-center items-center bg-gray-300 rounded-full max-w-[36px] max-h-[36px]"
        :class="type === 1 ? 'bg-primary-500' : ''"
      >
        <Icon name="pencil" />
      </span>
      <span
        @click="SprayMode"
        class="w-full h-[36px] flex justify-center items-center max-w-[36px] max-h-[36px] bg-gray-300 rounded-full"
        :class="type === 2 ? 'bg-primary-500' : ''"
      >
        <Icon name="spray" />
      </span>
      <span
        @click="BubbleMode"
        class="w-full h-[36px] flex justify-center items-center max-w-[36px] max-h-[36px] bg-gray-300 rounded-full"
        :class="type === 3 ? 'bg-primary-500' : ''"
      >
        <Icon name="bubbles" />
      </span>
      <el-color-picker
        v-model="canvas.c.freeDrawingBrush.color"
        @change="(value) => changeCommon(value)"
        alpha
      />
    </div>
    <div class="flex-view">
      <svg
        @click="$emit('changeMenuActive')"
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
    <div class="slider-demo-block absolute left-0 h-[200px] top-[60px]">
      <el-slider
        v-model="canvas.c.freeDrawingBrush.width"
        v-if="canvas.c.freeDrawingBrush.width !== 10"
        :min="10"
        :max="50"
        vertical
        @change="(value) => changeSize(value)"
        height="200px"
      />
    </div>
  </div>
</template>

<script>
import select from "@/mixins/select";
import Icon from "@/components/TheIcon/Icon.vue";
import { fabric as fb } from "fabric";

export default {
  name: "ToolBarDraw",
  mixins: [select],
  props: {
    menuActive: {
      default: 0,
    },
  },

  components: { Icon },

  data() {
    return {
      type: 0,
      erasingRemovesErasedObjects: true,
      color: "#000000",
      pencil: {
        width: 12,
        color: "#000000",
        brush: new fabric["PencilBrush"](this.canvas.c),
      },
      spray: {
        width: 35,
        color: "#000000",
        brush: new fabric["SprayBrush"](this.canvas.c),
        dot: 4,
      },
      bubble: {
        width: 25,
        color: "#000000",
        brush: new fabric["CircleBrush"](this.canvas.c),
      },
    };
  },
  mounted() {
    console.log(this.canvas.c,'before');
  },

  methods: {
    PencilMode() {
      this.type = 1;
      this.canvas.c.isDrawingMode = true;
      this.canvas.c.freeDrawingBrush = this.pencil.brush;
      this.canvas.c.freeDrawingBrush.width = this.pencil.width;
      this.canvas.c.freeDrawingBrush.color = this.pencil.color;
    },
    SprayMode() {
      this.type = 2;
      this.canvas.c.isDrawingMode = true;
      this.canvas.c.freeDrawingBrush = this.spray.brush;
      this.canvas.c.freeDrawingBrush.width = this.spray.width;
      this.canvas.c.freeDrawingBrush.color = this.spray.color;
      this.canvas.c.freeDrawingBrush.dotWidth = this.spray.dot;
    },
    BubbleMode() {
      this.type = 3;
      this.canvas.c.isDrawingMode = true;
      this.canvas.c.freeDrawingBrush = this.bubble.brush;
      this.canvas.c.freeDrawingBrush.width = this.bubble.width;
      this.canvas.c.freeDrawingBrush.color = this.bubble.color;
    },
    changeCommon(value) {
      if (this.type == 1) {
        this.pencil.color = value;
        this.PencilMode();
      } else if (this.type == 2) {
        this.spray.color = value;
        this.SprayMode();
      } else if (this.type == 3) {
        this.bubble.color = value;
        this.BubbleMode();
      }
    },
    changeSize(value) {
      if (this.type == 1) {
        this.pencil.width = value;
        this.PencilMode();
      } else if (this.type == 2) {
        this.spray.width = value;
        this.SprayMode();
      } else if (this.type == 3) {
        this.bubble.width = value;
        this.BubbleMode();
      }
    },
  },
  watch: {
    menuActive(newVal, oldVal) {
      if (newVal !== 2) {
        this.type = 0;
        this.canvas.c.isDrawingMode = false;
        console.log(this.canvas.c,'after');
      }
    },
  },
};
</script>
