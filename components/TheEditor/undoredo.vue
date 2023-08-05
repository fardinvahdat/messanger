<!--
 * @Author: 秦少卫
 * @Date: 2022-09-03 19:16:55
 * @LastEditors: June
 * @LastEditTime: 2023-05-20 22:54:13
 * @Description: 回退重做
-->

<template>
  <div style="display: inline-block" class="relative top-1">
    <!-- 后退 -->
    <el-button
      @click="undo"
      class="p-0"
      type="text"
      size="small"
      :disabled="!canUndo"
    >
      <svg
        v-if="canUndo"
        height="35px"
        width="35px"
        viewBox="0 0 21 21"
        xmlns="http://www.w3.org/2000/svg"
        fill="#000000"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <g
            fill="none"
            fill-rule="evenodd"
            stroke="#000000"
            stroke-linecap="round"
            stroke-linejoin="round"
            transform="translate(2 7)"
          >
            <path
              d="m.5 6.5c3.33333333-4 6.33333333-6 9-6 2.6666667 0 5 1 7 3"
            ></path>
            <path d="m.5 1.5v5h5"></path>
          </g>
        </g>
      </svg>
      <svg
        v-if="!canUndo"
        height="35px"
        width="35px"
        viewBox="0 0 21 21"
        xmlns="http://www.w3.org/2000/svg"
        fill="#b0b0b0"
        transform="rotate(0)matrix(1, 0, 0, 1, 0, 0)"
        stroke="#b0b0b0"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <g
            fill="none"
            fill-rule="evenodd"
            stroke="#5e5e5e"
            stroke-linecap="round"
            stroke-linejoin="round"
            transform="translate(2 7)"
          >
            <path
              d="m.5 6.5c3.33333333-4 6.33333333-6 9-6 2.6666667 0 5 1 7 3"
            ></path>
            <path d="m.5 1.5v5h5"></path>
          </g>
        </g>
      </svg>
    </el-button>

    <!-- 重做 -->
    <el-button
      @click="redo"
      class="p-0 ml-1"
      type="text"
      size="small"
      :disabled="!canRedo"
    >
      <svg
        v-if="canRedo"
        height="35px"
        width="35px"
        viewBox="0 0 21 21"
        xmlns="http://www.w3.org/2000/svg"
        fill="#000000"
        transform="rotate(0)matrix(-1, 0, 0, 1, 0, 0)"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <g
            fill="none"
            fill-rule="evenodd"
            stroke="#000000"
            stroke-linecap="round"
            stroke-linejoin="round"
            transform="translate(2 7)"
          >
            <path
              d="m.5 6.5c3.33333333-4 6.33333333-6 9-6 2.6666667 0 5 1 7 3"
            ></path>
            <path d="m.5 1.5v5h5"></path>
          </g>
        </g>
      </svg>
      <svg
        v-if="!canRedo"
        height="35px"
        width="35px"
        viewBox="0 0 21 21"
        xmlns="http://www.w3.org/2000/svg"
        fill="#b0b0b0"
        transform="rotate(0)matrix(-1, 0, 0, 1, 0, 0)"
        stroke="#b0b0b0"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <g
            fill="none"
            fill-rule="evenodd"
            stroke="#5e5e5e"
            stroke-linecap="round"
            stroke-linejoin="round"
            transform="translate(2 7)"
          >
            <path
              d="m.5 6.5c3.33333333-4 6.33333333-6 9-6 2.6666667 0 5 1 7 3"
            ></path>
            <path d="m.5 1.5v5h5"></path>
          </g>
        </g>
      </svg>
    </el-button>
  </div>
</template>

<script setup lang="ts">
import { useRefHistory, useDateFormat } from "@vueuse/core";
import { keyNames, hotkeys } from "@/core/initHotKeys";
import type { fabric } from "fabric";
import * as vfe from "vfe";

const canvas = inject<vfe.ICanvas>("canvas");

const {
  undo: _undo,
  redo: _redo,
  canRedo,
  canUndo,
  commit,
  pause,
  resume,
  clear,
  history,
  source,
  redoStack,
  undoStack,
  isTracking,
} = useRefHistory(ref(), {
  capacity: 50,
});

const save = (event: fabric.IEvent) => {
  // 过滤选择元素事件
  const isSelect = event.action === undefined && event.e;
  if (isSelect || !canvas) return;

  // 丢弃workspace创建前的记录
  if (!canvas.editor.editorWorkspace) {
    source.value = canvas.editor.getJson();
    commit();
    clear();
    return;
  }

  if (isTracking.value) {
    source.value = canvas.editor.getJson();
  }
};

// 后退
const undo = () => {
  _undo();
  renderCanvas();
};
// 重做
const redo = () => {
  _redo();
  renderCanvas();
};

const renderCanvas = () => {
  if (!canvas) return;
  pause();
  canvas.c.clear();
  canvas.c.loadFromJSON(source.value, () => {
    canvas.c.renderAll();
    resume();
  });
};

onMounted(() => {
  console.log(canvas, "canvas");
  canvas?.c.on({
    "object:added": save,
    "object:modified": save,
    "selection:updated": save,
  });
  hotkeys(keyNames.ctrlz, undo);
});

onUnmounted(() => {
  canvas?.c.off({
    "object:added": save,
    "object:modified": save,
    "selection:updated": save,
  });
});
</script>

<style scoped lang="less">
span.active {
  svg.icon {
    fill: #2d8cf0;
  }
}
.time {
  color: #c1c1c1;
}
</style>

<script lang="ts">
export default {
  name: "ToolBar",
};
</script>
