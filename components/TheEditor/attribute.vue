<template>
  <div class="box">
    <!-- 字体属性 -->
    <div v-show="textType.includes(mSelectOneType)" class="flex">
      <div class="flex-view">
        <div class="flex-item">
          <div class="left font-selector max-w-[80px]">
            <!-- {{ fontFamilyList }} -->
            <el-select
              v-model="fontAttr.fontFamily"
              @change="changeFontFamily"
              placeholder="Fonts"
              class="select-box-pills"
            >
              <el-option
                v-for="item in fontFamilyList"
                :value="item.value"
                :key="`font-${item.label}`"
                class="font-item bg-primary-800 text-white"
              >
                <div :style="`background-image:url('${item.value}');`">
                  {{ item.label }}
                </div>
              </el-option>
            </el-select>
          </div>
          <div
            class="right max-w-[80px]"
            @click="
              clear();
              isFontSizeVisible = !isFontSizeVisible;
            "
          >
            <InputNumber
              v-model="fontAttr.fontSize"
              @on-change="(value) => changeCommon('fontSize', value)"
              :min="1"
            ></InputNumber>
            <div
              class="content slider-box absolute top-[95px] left-[5px]"
              v-if="isFontSizeVisible"
            >
              <el-slider
                v-model="fontAttr.fontSize"
                @input="(value) => changeCommon('fontSize', value)"
              ></el-slider>
            </div>
          </div>
        </div>
      </div>

      <div class="flex-view w-[80px]">
        <div class="flex-item flex-col">
          <span
            class="label w-[80px] bg-primary-500 text-gray-900 text-center rounded-full"
            style="box-shadow: 0 0 0 1px #dcdfe6 inset"
            @click="
              clear();
              isOpacityVisible = !isOpacityVisible;
            "
            >opacity</span
          >
          <div
            class="content slider-box absolute top-[95px] left-[5px]"
            v-if="isOpacityVisible"
          >
            <el-slider
              v-model="baseAttr.opacity"
              @input="(value) => changeCommon('opacity', value)"
            ></el-slider>
          </div>
        </div>
      </div>

      <div class="flex-view" v-if="false">
        <div class="flex-item">
          <el-button-group class="button-group">
            <el-button
              @click="changeFontWeight('fontWeight', fontAttr.fontWeight)"
            >
              <svg viewBox="0 0 1024 1024" width="14" height="14">
                <path
                  d="M793.99865 476a244 244 0 0 0 54-130.42C862.75865 192.98 743.01865 64 593.85865 64H195.01865a32 32 0 0 0-32 32v96a32 32 0 0 0 32 32h63.74v576H195.01865a32 32 0 0 0-32 32v96a32 32 0 0 0 32 32h418.64c141.6 0 268.28-103.5 282-244.8 9.48-96.9-32.78-184.12-101.66-239.2zM418.33865 224h175.52a96 96 0 0 1 0 192h-175.52z m175.52 576h-175.52V576h175.52a112 112 0 0 1 0 224z"
                  :fill="fontAttr.fontWeight === 'bold' ? '#305ef4' : '#666'"
                ></path>
              </svg>
            </el-button>
            <el-button
              @click="changeFontStyle('fontStyle', fontAttr.fontStyle)"
            >
              <svg viewBox="0 0 1024 1024" width="14" height="14">
                <path
                  d="M832 96v64a32 32 0 0 1-32 32h-125.52l-160 640H608a32 32 0 0 1 32 32v64a32 32 0 0 1-32 32H224a32 32 0 0 1-32-32v-64a32 32 0 0 1 32-32h125.52l160-640H416a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32h384a32 32 0 0 1 32 32z"
                  :fill="fontAttr.fontStyle === 'italic' ? '#305ef4' : '#666'"
                ></path>
              </svg>
            </el-button>
            <el-button
              @click="changeLineThrough('linethrough', fontAttr.linethrough)"
            >
              <svg viewBox="0 0 1024 1024" width="14" height="14">
                <path
                  d="M893.088 501.792H125.344a32 32 0 0 0 0 64h767.744a32 32 0 0 0 0-64zM448 448h112V208h288V96H160v112h288zM448 640h112v288H448z"
                  :fill="fontAttr.linethrough ? '#305ef4' : '#666'"
                ></path>
              </svg>
            </el-button>
            <el-button
              @click="changeUnderline('underline', fontAttr.underline)"
            >
              <svg viewBox="0 0 1024 1024" width="14" height="14">
                <path
                  d="M703.232 67.008h127.488v413.248c0 158.016-142.656 286.016-318.72 286.016-176 0-318.72-128-318.72-286.016V67.008h127.488v413.248c0 39.872 18.176 78.144 51.136 107.776 36.8 32.96 86.528 51.072 140.096 51.072s103.36-18.112 140.032-51.136c33.024-29.632 51.2-67.968 51.2-107.776V67.008zM193.28 871.616h637.44v85.376H193.28v-85.376z"
                  :fill="fontAttr.underline ? '#305ef4' : '#666'"
                ></path>
              </svg>
            </el-button>
          </el-button-group>
        </div>
      </div>

      <div class="flex-view w-[80px]">
        <el-color-picker
          v-model="fontAttr.color"
          @change="(value) => changeCommon('fill', value)"
          alpha
        />
      </div>
    </div>
  </div>
</template>

<script>
import fontList from "@/assets/fonts/font";
import select from "@/mixins/select";
import FontFaceObserver from "fontfaceobserver";
import Color from "./color.vue";
import axios from "axios";
import { getPolygonVertices } from "@/utils/math";
import InputNumber from "@/components/TheEditor/inputNumber";

const repoSrc = "https://nihaojob.github.io/vue-fabric-editor-static/";

export default {
  name: "AttrBute",
  mixins: [select],
  components: {
    Color,
    InputNumber,
  },
  data() {
    return {
      isOpacityVisible: false,
      isFontSizeVisible: false,
      // 通用元素
      baseType: [
        "text",
        "i-text",
        "textbox",
        "rect",
        "circle",
        "triangle",
        "polygon",
        "image",
        "group",
        "line",
        "arrow",
      ],
      // 文字元素
      textType: ["i-text", "textbox", "text"],
      // 通用属性
      baseAttr: {
        id: "",
        opacity: 0,
        angle: 0,
        fill: "#fff",
        left: 0,
        top: 0,
        strokeWidth: 0,
        strokeDashArray: [],
        stroke: "#fff",
        shadow: {
          color: "#fff",
          blur: 0,
          offsetX: 0,
          offsetY: 0,
        },
        points: {},
      },
      // 字体属性
      fontAttr: {
        fontSize: 0,
        fontFamily: "",
        lineHeight: 0,
        charSpacing: 0,
        fontWeight: "",
        textBackgroundColor: "#fff",
        textAlign: "",
        fontStyle: "",
        underline: false,
        linethrough: false,
        overline: false,
        color: "#000",
      },
      // 字体下拉列表
      fontFamilyList: fontList.map((item) => item),
      strokeDashList: [
        {
          value: {
            strokeUniform: true,
            strokeDashArray: [],
            strokeLineCap: "butt",
          },
          label: "Stroke",
        },
        {
          value: {
            strokeUniform: true,
            strokeDashArray: [1, 10],
            strokeLineCap: "butt",
          },
          label: "Dash-1",
        },
        {
          value: {
            strokeUniform: true,
            strokeDashArray: [1, 10],
            strokeLineCap: "round",
          },
          label: "Dash-2",
        },
        {
          value: {
            strokeUniform: true,
            strokeDashArray: [15, 15],
            strokeLineCap: "square",
          },
          label: "Dash-3",
        },
        {
          value: {
            strokeUniform: true,
            strokeDashArray: [15, 15],
            strokeLineCap: "round",
          },
          label: "Dash-4",
        },
        {
          value: {
            strokeUniform: true,
            strokeDashArray: [25, 25],
            strokeLineCap: "square",
          },
          label: "Dash-5",
        },
        {
          value: {
            strokeUniform: true,
            strokeDashArray: [25, 25],
            strokeLineCap: "round",
          },
          label: "Dash-6",
        },
        {
          value: {
            strokeUniform: true,
            strokeDashArray: [1, 8, 16, 8, 1, 20],
            strokeLineCap: "square",
          },
          label: "Dash-7",
        },
        {
          value: {
            strokeUniform: true,
            strokeDashArray: [1, 8, 16, 8, 1, 20],
            strokeLineCap: "round",
          },
          label: "Dash-8",
        },
      ],
      // 字体对齐方式
      textAlignList: ["left", "center", "right"],
      // 对齐图标
      textAlignListSvg: [
        '<svg t="1650441458823" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3554" width="18" height="18"><path d="M198.4 198.4h341.333333c8.533333 0 14.933333 2.133333 19.2 8.533333 6.4 6.4 8.533333 12.8 8.533334 19.2v57.6c0 8.533333-2.133333 14.933333-8.533334 19.2-6.4 6.4-12.8 8.533333-19.2 8.533334h-341.333333c-8.533333 0-14.933333-2.133333-19.2-8.533334-6.4-6.4-8.533333-12.8-8.533333-19.2v-57.6c0-8.533333 2.133333-14.933333 8.533333-19.2 4.266667-4.266667 12.8-8.533333 19.2-8.533333z m0 170.666667h569.6c8.533333 0 14.933333 2.133333 19.2 8.533333 6.4 6.4 8.533333 12.8 8.533333 19.2v57.6c0 8.533333-2.133333 14.933333-8.533333 19.2-6.4 6.4-12.8 8.533333-19.2 8.533333h-569.6c-8.533333 0-14.933333-2.133333-19.2-8.533333-6.4-6.4-8.533333-12.8-8.533333-19.2v-57.6c0-8.533333 2.133333-14.933333 8.533333-19.2 4.266667-4.266667 12.8-8.533333 19.2-8.533333z m0 170.666666h454.4c8.533333 0 14.933333 2.133333 19.2 8.533334 6.4 6.4 8.533333 12.8 8.533333 19.2v57.6c0 8.533333-2.133333 14.933333-8.533333 19.2-6.4 6.4-12.8 8.533333-19.2 8.533333h-454.4c-8.533333 0-14.933333-2.133333-19.2-8.533333-6.4-6.4-8.533333-12.8-8.533333-19.2v-57.6c0-8.533333 2.133333-14.933333 8.533333-19.2 4.266667-4.266667 12.8-8.533333 19.2-8.533334z m0 170.666667h625.066667c8.533333 0 14.933333 2.133333 19.2 8.533333 6.4 6.4 8.533333 12.8 8.533333 19.2v57.6c0 8.533333-2.133333 14.933333-8.533333 19.2-6.4 6.4-12.8 8.533333-19.2 8.533334h-625.066667c-8.533333 0-14.933333-2.133333-19.2-8.533334-6.4-6.4-8.533333-12.8-8.533333-19.2v-57.6c0-8.533333 2.133333-14.933333 8.533333-19.2 4.266667-4.266667 12.8-8.533333 19.2-8.533333z" p-id="3555"></path></svg>',
        '<svg t="1650441512015" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3704" width="18" height="18"><path d="M313.6 198.4h398.933333c8.533333 0 14.933333 2.133333 19.2 8.533333 6.4 6.4 8.533333 12.8 8.533334 19.2v57.6c0 8.533333-2.133333 14.933333-8.533334 19.2-6.4 6.4-12.8 8.533333-19.2 8.533334h-398.933333c-8.533333 0-14.933333-2.133333-19.2-8.533334-6.4-6.4-8.533333-12.8-8.533333-19.2v-57.6c0-8.533333 2.133333-14.933333 8.533333-19.2 4.266667-4.266667 10.666667-8.533333 19.2-8.533333z m-115.2 170.666667h625.066667c8.533333 0 14.933333 2.133333 19.2 8.533333 6.4 6.4 8.533333 12.8 8.533333 19.2v57.6c0 8.533333-2.133333 14.933333-8.533333 19.2-6.4 6.4-12.8 8.533333-19.2 8.533333h-625.066667c-8.533333 0-14.933333-2.133333-19.2-8.533333-6.4-6.4-8.533333-12.8-8.533333-19.2v-57.6c0-8.533333 2.133333-14.933333 8.533333-19.2 4.266667-4.266667 12.8-8.533333 19.2-8.533333z m115.2 170.666666h398.933333c8.533333 0 14.933333 2.133333 19.2 8.533334 6.4 6.4 8.533333 12.8 8.533334 19.2v57.6c0 8.533333-2.133333 14.933333-8.533334 19.2-6.4 6.4-12.8 8.533333-19.2 8.533333h-398.933333c-8.533333 0-14.933333-2.133333-19.2-8.533333-6.4-6.4-8.533333-12.8-8.533333-19.2v-57.6c0-8.533333 2.133333-14.933333 8.533333-19.2 4.266667-4.266667 10.666667-8.533333 19.2-8.533334z m-115.2 170.666667h625.066667c8.533333 0 14.933333 2.133333 19.2 8.533333 6.4 6.4 8.533333 12.8 8.533333 19.2v57.6c0 8.533333-2.133333 14.933333-8.533333 19.2-6.4 6.4-12.8 8.533333-19.2 8.533334h-625.066667c-8.533333 0-14.933333-2.133333-19.2-8.533334-6.4-6.4-8.533333-12.8-8.533333-19.2v-57.6c0-8.533333 2.133333-14.933333 8.533333-19.2 4.266667-4.266667 12.8-8.533333 19.2-8.533333z" p-id="3705"></path></svg>',
        '<svg t="1650441519862" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3854" width="18" height="18"><path d="M454.4 283.733333v-57.6c0-8.533333 2.133333-14.933333 8.533333-19.2 6.4-6.4 12.8-8.533333 19.2-8.533333h341.333334c8.533333 0 14.933333 2.133333 19.2 8.533333 6.4 6.4 8.533333 12.8 8.533333 19.2v57.6c0 8.533333-2.133333 14.933333-8.533333 19.2-6.4 6.4-12.8 8.533333-19.2 8.533334h-341.333334c-8.533333 0-14.933333-2.133333-19.2-8.533334-4.266667-4.266667-8.533333-10.666667-8.533333-19.2z m-226.133333 170.666667v-57.6c0-8.533333 2.133333-14.933333 8.533333-19.2 6.4-6.4 12.8-8.533333 19.2-8.533333h569.6c8.533333 0 14.933333 2.133333 19.2 8.533333 6.4 6.4 8.533333 12.8 8.533333 19.2v57.6c0 8.533333-2.133333 14.933333-8.533333 19.2-6.4 6.4-12.8 8.533333-19.2 8.533333H256c-8.533333 0-14.933333-2.133333-19.2-8.533333-6.4-4.266667-8.533333-10.666667-8.533333-19.2z m113.066666 170.666667v-57.6c0-8.533333 2.133333-14.933333 8.533334-19.2 6.4-6.4 12.8-8.533333 19.2-8.533334h454.4c8.533333 0 14.933333 2.133333 19.2 8.533334 6.4 6.4 8.533333 12.8 8.533333 19.2v57.6c0 8.533333-2.133333 14.933333-8.533333 19.2-6.4 6.4-12.8 8.533333-19.2 8.533333h-454.4c-8.533333 0-14.933333-2.133333-19.2-8.533333-6.4-4.266667-8.533333-10.666667-8.533334-19.2z m-170.666666 170.666666v-57.6c0-8.533333 2.133333-14.933333 8.533333-19.2 6.4-6.4 12.8-8.533333 19.2-8.533333h625.066667c8.533333 0 14.933333 2.133333 19.2 8.533333 6.4 6.4 8.533333 12.8 8.533333 19.2v57.6c0 8.533333-2.133333 14.933333-8.533333 19.2-6.4 6.4-12.8 8.533333-19.2 8.533334h-625.066667c-8.533333 0-14.933333-2.133333-19.2-8.533334-6.4-4.266667-8.533333-10.666667-8.533333-19.2z" p-id="3855"></path></svg>',
      ],
    };
  },
  created() {
    // 获取字体数据
    // this.getFreeFontList();

    this.event.on("selectCancel", () => {
      this.baseAttr.fill = "";
      this.$forceUpdate();
    });
    this.event.on("selectOne", () => {
      this.getObjectAttr();
    });

    this.canvas.c.on("object:modified", this.getObjectAttr);
  },
  beforeUnmount() {
    this.canvas.c.off("object:modified", this.getObjectAttr);
  },
  methods: {
    clear() {
      this.isFontSizeVisible = false;
      this.isOpacityVisible = false;
    },
    getObjectAttr(e) {
      const activeObject = this.canvas.c.getActiveObject();
      // 不是当前obj，跳过
      if (e && e.target && e.target !== activeObject) return;
      if (activeObject) {
        // base
        this.baseAttr.id = activeObject.get("id");
        this.baseAttr.opacity = activeObject.get("opacity") * 100;
        this.baseAttr.fill = activeObject.get("fill");
        this.baseAttr.left = activeObject.get("left");
        this.baseAttr.top = activeObject.get("top");
        this.baseAttr.stroke = activeObject.get("stroke");
        this.baseAttr.strokeWidth = activeObject.get("strokeWidth");
        this.baseAttr.shadow = activeObject.get("shadow") || {};
        this.baseAttr.angle = activeObject.get("angle") || 0;
        this.baseAttr.points = activeObject.get("points") || {};

        const textTypes = ["i-text", "text", "textbox"];
        if (textTypes.includes(activeObject.type)) {
          this.fontAttr.fontSize = activeObject.get("fontSize");
          this.fontAttr.fontFamily = activeObject.get("fontFamily");
          this.fontAttr.lineHeight = activeObject.get("lineHeight");
          this.fontAttr.textAlign = activeObject.get("textAlign");
          this.fontAttr.underline = activeObject.get("underline");
          this.fontAttr.linethrough = activeObject.get("linethrough");
          this.fontAttr.charSpacing = activeObject.get("charSpacing");
          this.fontAttr.overline = activeObject.get("overline");
          this.fontAttr.fontStyle = activeObject.get("fontStyle");
          this.fontAttr.textBackgroundColor = activeObject.get(
            "textBackgroundColor"
          );
          this.fontAttr.fontWeight = activeObject.get("fontWeight");
        }
      }
    },
    // 修改字体
    changeFontFamily(fontName) {
      if (!fontName) return;

      // 跳过加载的属性
      const skipFonts = ["arial", "Microsoft YaHei"];
      if (skipFonts.includes(fontName)) {
        const activeObject = this.canvas.c.getActiveObjects()[0];
        activeObject && activeObject.set("fontFamily", fontName);
        this.canvas.c.renderAll();
        return;
      }
      // 字体加载
      const font = new FontFaceObserver(fontName);
      font
        .load(null, 150000)
        .then(() => {
          const activeObject = this.canvas.c.getActiveObjects()[0];
          activeObject && activeObject.set("fontFamily", fontName);
          this.canvas.c.renderAll();
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getFreeFontList() {
      axios.get(`${repoSrc}/font/free-font.json`).then((res) => {
        this.fontFamilyList = {
          ...this.fontFamilyList,
          ...Object.entries(res.data).map(([, value]) => value),
        };
      });
    },
    // 通用属性改变
    changeCommon(key, value) {
      const activeObject = this.canvas.c.getActiveObjects()[0];
      // 透明度特殊转换
      if (key === "opacity") {
        activeObject && activeObject.set(key, value / 100);
        this.canvas.c.renderAll();
        return;
      }
      // 旋转角度适配
      if (key === "angle") {
        activeObject.rotate(value);
        this.canvas.c.renderAll();
        return;
      }
      activeObject && activeObject.set(key, value);
      this.canvas.c.renderAll();

      // 更新属性
      this.getObjectAttr();
    },
    // 边框设置
    borderSet(key) {
      const activeObject = this.canvas.c.getActiveObjects()[0];
      if (activeObject) {
        const stroke = this.strokeDashList.find((item) => item.label === key);
        activeObject.set(stroke.value);
        this.canvas.c.renderAll();
      }
    },
    // 阴影设置
    changeShadow() {
      const activeObject = this.canvas.c.getActiveObjects()[0];
      activeObject &&
        activeObject.set(
          "shadow",
          new this.fabric.Shadow(this.baseAttr.shadow)
        );
      this.canvas.c.renderAll();
    },
    // 加粗
    changeFontWeight(key, value) {
      const nValue = value === "normal" ? "bold" : "normal";
      this.fontAttr.fontWeight = nValue;
      const activeObject = this.canvas.c.getActiveObjects()[0];
      activeObject && activeObject.set(key, nValue);
      this.canvas.c.renderAll();
    },
    // 斜体
    changeFontStyle(key, value) {
      const nValue = value === "normal" ? "italic" : "normal";
      this.fontAttr.fontStyle = nValue;
      const activeObject = this.canvas.c.getActiveObjects()[0];
      activeObject && activeObject.set(key, nValue);
      this.canvas.c.renderAll();
    },
    // 中划
    changeLineThrough(key, value) {
      const nValue = value === false;
      this.fontAttr.linethrough = nValue;
      const activeObject = this.canvas.c.getActiveObjects()[0];
      activeObject && activeObject.set(key, nValue);
      this.canvas.c.renderAll();
    },
    // 下划
    changeUnderline(key, value) {
      const nValue = value === false;
      this.fontAttr.underline = nValue;
      const activeObject = this.canvas.c.getActiveObjects()[0];
      activeObject && activeObject.set(key, nValue);
      this.canvas.c.renderAll();
    },
    // 修改边数
    changeEdge(value) {
      const activeObjects = this.canvas.c.getActiveObjects();
      if (!activeObjects || !activeObjects.length) return;
      activeObjects[0].set(
        "points",
        getPolygonVertices(
          value,
          Math.min(activeObjects[0].width, activeObjects[0].height) / 2
        )
      );
      this.canvas.c.requestRenderAll();
    },
  },
};
</script>

<style scoped lang="less">
// @import url('vue-color-gradient-picker/dist/index.css');
:deep(.ivu-color-picker) {
  display: block;
}
:deep(.ivu-input-number) {
  display: block;
  width: 100%;
}

:deep(.ivu-divider-plain) {
  &.ivu-divider-with-text-left {
    margin: 10px 0;
    font-weight: bold;
    font-size: 16px;
    color: #000000;
  }
}
.box {
  width: 100%;
}

.button-group {
  display: flex;
  width: 100%;
  .ivu-btn,
  .ivu-radio-wrapper {
    flex: 1;
  }
}

.flex-view {
  margin-bottom: 5px;
  padding: 5px;
  display: inline-flex;
  justify-content: space-between;
  border-radius: 5px;
}
.flex-item {
  display: inline-flex;
  flex: 1;
  border-radius: 50px;
  .label {
    width: 32px;
    height: 32px;
    line-height: 32px;
    display: inline-block;
    font-size: 14px;
    // color: #333333;
  }
  .content {
    width: 60px;
  }
  .slider-box {
    width: calc(100% - 50px);
    margin-left: 10px;
  }
  .left {
    flex: 1;
  }
  .right {
    flex: 1;
    margin-left: 10px;
    :deep(.ivu-input-number) {
      display: block;
      width: 100%;
    }
  }
  :deep(.ivu-slider-wrap) {
    margin: 13px 0;
  }
  :deep(.ivu-radio-group-button) {
    & .ivu-radio-wrapper {
      width: 48px;
      line-height: 40px;
      text-align: center;
      svg {
        vertical-align: baseline;
      }
    }
  }

  :deep(.ivu-btn-group-large) {
    & > .ivu-btn {
      font-size: 24px;
    }
  }

  :deep(.ivu-radio-group-button) {
    &.ivu-radio-group-large .ivu-radio-wrapper {
      font-size: 24px;
    }
  }
}

.ivu-row {
  margin-bottom: 8px;

  .ivu-col {
    position: inherit;
    &__box {
      display: flex;
      align-items: center;
      background: #f8f8f8;
      border-radius: 4px;
      gap: 8px;
    }
  }

  .label {
    padding-left: 8px;
  }

  .content {
    flex: 1;

    :deep(.--input),
    :deep(.ivu-select-selection) {
      background-color: transparent;
      border: none !important;
      box-shadow: none !important;
    }
  }
}

.font-selector {
  :deep(.ivu-select-item) {
    padding: 1px 4px;
  }

  .font-item {
    background-color: #000;
    background-size: cover;
    background-position: center center;
    height: 40px;
    width: 200px;
    color: #fff;
    font-size: 27px;
    text-align: center;
    filter: invert(100%);
  }
}
</style>
