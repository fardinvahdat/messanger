<template>
  <span
    @click="() => addTextBox()"
    :draggable="true"
    @dragend="onDragend('textBox')"
  >
    <svg
      v-if="menuActive == 1"
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M18 36C27.9411 36 36 27.9411 36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36ZM13.0009 8C13.2059 8.00006 13.406 8.06317 13.574 8.18077C13.7422 8.29848 13.8701 8.4651 13.9403 8.658L16.8223 16.584L15.7123 19.382L15.2093 18H10.7923L9.94028 20.342C9.84958 20.5913 9.66355 20.7944 9.42313 20.9065C9.18271 21.0187 8.90759 21.0307 8.65828 20.94C8.40898 20.8493 8.20592 20.6633 8.09377 20.4228C7.98162 20.1824 7.96958 19.9073 8.06028 19.658L12.0613 8.658C12.1315 8.4651 12.2594 8.29848 12.4275 8.18077C12.5955 8.06317 12.7956 8.00006 13.0007 8H13.0009ZM11.5203 16H14.4823L13.0003 11.926L11.5193 16H11.5203ZM21.3683 12.528C21.2946 12.3415 21.1665 12.1814 21.0006 12.0686C20.8348 11.9559 20.6388 11.8956 20.4383 11.8956C20.2377 11.8956 20.0418 11.9559 19.8759 12.0686C19.7101 12.1814 19.582 12.3415 19.5083 12.528L14.1513 26.022H14.0013C13.7361 26.022 13.4817 26.1274 13.2942 26.3149C13.1066 26.5024 13.0013 26.7568 13.0013 27.022C13.0013 27.2872 13.1066 27.5416 13.2942 27.7291C13.4817 27.9166 13.7361 28.022 14.0013 28.022H14.8103C14.8236 28.0223 14.837 28.0223 14.8503 28.022H17.0003C17.2655 28.022 17.5199 27.9166 17.7074 27.7291C17.8949 27.5416 18.0003 27.2872 18.0003 27.022C18.0003 26.7568 17.8949 26.5024 17.7074 26.3149C17.5199 26.1274 17.2655 26.022 17.0003 26.022H16.3033L17.1063 24H23.7593L24.5593 26.023H24.0003C23.7351 26.023 23.4807 26.1284 23.2932 26.3159C23.1056 26.5034 23.0003 26.7578 23.0003 27.023C23.0003 27.2882 23.1056 27.5426 23.2932 27.7301C23.4807 27.9176 23.7351 28.023 24.0003 28.023H26.0143C26.0259 28.0232 26.0376 28.0232 26.0493 28.023H27.0093C27.2745 28.023 27.5289 27.9176 27.7164 27.7301C27.9039 27.5426 28.0093 27.2882 28.0093 27.023C28.0093 26.7578 27.9039 26.5034 27.7164 26.3159C27.5289 26.1284 27.2745 26.023 27.0093 26.023H26.7113L21.3683 12.528ZM22.9673 22H17.9003L20.4373 15.61L22.9673 22Z"
        fill="#50CCE8"
      />
    </svg>
    <svg
      v-if="menuActive !== 1"
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M18 36C27.9411 36 36 27.9411 36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36ZM13.0009 8C13.2059 8.00006 13.406 8.06317 13.574 8.18077C13.7422 8.29848 13.8701 8.4651 13.9403 8.658L16.8223 16.584L15.7123 19.382L15.2093 18H10.7923L9.94028 20.342C9.84958 20.5913 9.66355 20.7944 9.42313 20.9065C9.18271 21.0187 8.90759 21.0307 8.65828 20.94C8.40898 20.8493 8.20592 20.6633 8.09377 20.4228C7.98162 20.1824 7.96958 19.9073 8.06028 19.658L12.0613 8.658C12.1315 8.4651 12.2594 8.29848 12.4275 8.18077C12.5955 8.06317 12.7956 8.00006 13.0007 8H13.0009ZM11.5203 16H14.4823L13.0003 11.926L11.5193 16H11.5203ZM21.3683 12.528C21.2946 12.3415 21.1665 12.1814 21.0006 12.0686C20.8348 11.9559 20.6388 11.8956 20.4383 11.8956C20.2377 11.8956 20.0418 11.9559 19.8759 12.0686C19.7101 12.1814 19.582 12.3415 19.5083 12.528L14.1513 26.022H14.0013C13.7361 26.022 13.4817 26.1274 13.2942 26.3149C13.1066 26.5024 13.0013 26.7568 13.0013 27.022C13.0013 27.2872 13.1066 27.5416 13.2942 27.7291C13.4817 27.9166 13.7361 28.022 14.0013 28.022H14.8103C14.8236 28.0223 14.837 28.0223 14.8503 28.022H17.0003C17.2655 28.022 17.5199 27.9166 17.7074 27.7291C17.8949 27.5416 18.0003 27.2872 18.0003 27.022C18.0003 26.7568 17.8949 26.5024 17.7074 26.3149C17.5199 26.1274 17.2655 26.022 17.0003 26.022H16.3033L17.1063 24H23.7593L24.5593 26.023H24.0003C23.7351 26.023 23.4807 26.1284 23.2932 26.3159C23.1056 26.5034 23.0003 26.7578 23.0003 27.023C23.0003 27.2882 23.1056 27.5426 23.2932 27.7301C23.4807 27.9176 23.7351 28.023 24.0003 28.023H26.0143C26.0259 28.0232 26.0376 28.0232 26.0493 28.023H27.0093C27.2745 28.023 27.5289 27.9176 27.7164 27.7301C27.9039 27.5426 28.0093 27.2882 28.0093 27.023C28.0093 26.7578 27.9039 26.5034 27.7164 26.3159C27.5289 26.1284 27.2745 26.023 27.0093 26.023H26.7113L21.3683 12.528ZM22.9673 22H17.9003L20.4373 15.61L22.9673 22Z"
        fill="#90A4AE"
      />
    </svg>
  </span>
</template>

<script>
import { v4 as uuid } from "uuid";
import initializeLineDrawing from "@/core/initializeLineDrawing";
import { getPolygonVertices } from "@/utils/math";

// 默认属性
const defaultPosition = { shadow: "", fontFamily: "arial" };
// 拖拽属性
const dragOption = {
  left: 0,
  top: 0,
};
export default {
  name: "ToolBar",
  inject: ["canvas", "fabric"],
  data() {
    return {
      isDrawingLineMode: false,
      isArrow: false,
    };
  },
  props: {
    menuActive: {
      default: 0,
    },
  },
  created() {
    // 线条绘制
    this.drawHandler = initializeLineDrawing(this.canvas.c, defaultPosition);

    this.canvas.c.on("drop", (opt) => {
      // 画布元素距离浏览器左侧和顶部的距离
      const offset = {
        left: this.canvas.c.getSelectionElement().getBoundingClientRect().left,
        top: this.canvas.c.getSelectionElement().getBoundingClientRect().top,
      };

      // 鼠标坐标转换成画布的坐标（未经过缩放和平移的坐标）
      const point = {
        x: opt.e.x - offset.left,
        y: opt.e.y - offset.top,
      };

      // 转换后的坐标，restorePointerVpt 不受视窗变换的影响
      const pointerVpt = this.canvas.c.restorePointerVpt(point);
      dragOption.left = pointerVpt.x;
      dragOption.top = pointerVpt.y;
    });
  },
  methods: {
    // 拖拽开始时就记录当前打算创建的元素类型
    onDragend(type) {
      // todo 拖拽优化 this.canvas.editor.dragAddItem(event, item);
      switch (type) {
        case "text":
          this.addText(dragOption);
          break;
        case "textBox":
          this.addTextBox(dragOption);
          break;
        case "rect":
          this.addRect(dragOption);
          break;
        case "circle":
          this.addCircle(dragOption);
          break;
        case "triangle":
          this.addTriangle(dragOption);
          break;
        case "polygon":
          this.addPolygon(dragOption);
          break;
        default:
      }
    },
    addText(option) {
      const text = new this.fabric.IText("", {
        ...defaultPosition,
        ...option,
        width: 400,
        fontSize: 80,
        id: uuid(),
      });
      this.canvas.c.add(text);
      if (!option) {
        text.center();
      }
      this.canvas.c.setActiveObject(text);
    },
    addImg(e) {
      const imgEl = e.target.cloneNode(true);
      const imgInstance = new this.fabric.Image(imgEl, {
        ...defaultPosition,
        id: uuid(),
        name: "图片default",
      });
      this.canvas.c.add(imgInstance);
      this.canvas.c.renderAll();
    },
    addTextBox(option) {
      console.log(this.canvas.c.getActiveObjects());
      const activeObject = this.canvas.c.getActiveObjects()[0];
      if (
        (activeObject?.type && activeObject.type !== "text-box") ||
        !this.canvas.c.getActiveObjects().length
      ) {
        const text = new this.fabric.Textbox("", {
          ...defaultPosition,
          ...option,
          width: this.canvas.c.width,
          height: 200,
          textAlign: "center",
          lockScalingY: true,
          lockScalingX: true,
          hasControls: false,
          fill: "#000",
          lineHeight: 2,
          type: "text-box",
        });
        let text1 = text.setControlsVisibility({
          mt: false,
          mb: false,
          ml: false,
          mr: false,
          bl: false,
          br: false,
          tl: false,
          tr: false,
          mtr: false,
        });
        this.canvas.c.add(text1);
        if (!option) {
          text.center();
        }
        this.canvas.c.setActiveObject(text1);

        this.position("center");
      }
    },
    position(name) {
      this.canvas.editor.centerAlign.position(name);
    },
    addTriangle(option) {
      const triangle = new this.fabric.Triangle({
        ...defaultPosition,
        width: 400,
        height: 400,
        fill: "#92706B",
        id: uuid(),
        name: "三角形",
      });
      this.canvas.c.add(triangle);
      if (!option) {
        triangle.center();
      }
      this.canvas.c.setActiveObject(triangle);
    },
    addPolygon(option) {
      const polygon = new this.fabric.Polygon(getPolygonVertices(5, 200), {
        ...defaultPosition,
        ...option,
        fill: "#ccc",
        id: uuid(),
        name: "多边形",
      });
      polygon.set({
        // 创建完设置宽高，不然宽高会变成自动的值
        width: 400,
        height: 400,
        // 关闭偏移
        pathOffset: {
          x: 0,
          y: 0,
        },
      });
      this.canvas.c.add(polygon);
      if (!option) {
        polygon.center();
      }
      this.canvas.c.setActiveObject(polygon);
    },
    addCircle(option) {
      const circle = new this.fabric.Circle({
        ...defaultPosition,
        ...option,
        radius: 150,
        fill: "#57606B",
        id: uuid(),
        name: "圆形",
      });
      this.canvas.c.add(circle);
      if (!option) {
        circle.center();
      }
      this.canvas.c.setActiveObject(circle);
    },
    addRect(option) {
      const rect = new this.fabric.Rect({
        ...defaultPosition,
        ...option,
        fill: "#F57274",
        width: 400,
        height: 400,
        id: uuid(),
        name: "矩形",
      });
      this.canvas.c.add(rect);
      if (!option) {
        rect.center();
      }
      this.canvas.c.setActiveObject(rect);
    },
    drawingLineModeSwitch(isArrow) {
      this.isArrow = isArrow;
      this.isDrawingLineMode = !this.isDrawingLineMode;
      this.drawHandler.setMode(this.isDrawingLineMode);
      this.drawHandler.setArrow(isArrow);
      this.canvas.c.forEachObject((obj) => {
        if (obj.id !== "workspace") {
          obj.selectable = !this.isDrawingLineMode;
          obj.evented = !this.isDrawingLineMode;
        }
      });
    },
  },
};
</script>

<style scoped lang="less">
.tool-box {
  display: flex;
  justify-content: space-around;
  span {
    flex: 1;
    text-align: center;
    padding: 5px 0;
    background: #f6f6f6;
    margin-left: 2px;
    cursor: pointer;
    &:hover {
      background: #edf9ff;
      svg {
        fill: #2d8cf0;
      }
    }
  }
  .bg {
    background: #d8d8d8;

    &:hover {
      svg {
        fill: #2d8cf0;
      }
    }
  }
}
.img {
  width: 20px;
}
</style>
