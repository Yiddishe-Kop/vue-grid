<template>
  <div class="" dir="rtl">
    <GridLayout
      :layout.sync="layout"
      :col-num="12"
      :row-height="30"
      :is-draggable="true"
      :is-resizable="true"
      :is-mirrored="false"
      :vertical-compact="true"
      :margin="[10, 10]"
      :use-css-transforms="true"
    >
      <GridItem
        v-for="item in layout"
        :x="item.x"
        :y="item.y"
        :w="item.w"
        :h="item.h"
        :i="item.i"
        :key="item.i"
        class="item"
      >
        {{ item.i }}
        {{ item.i }}
        {{ item.i }}
        {{ item.i }}
        {{ item.i }}
        {{ item.i }}
        {{ item.i }}
        {{ item.i }}
        {{ item.i }}
        {{ item.i }}
        {{ item.i }}
        {{ item.i }}
        {{ item.i }}
        {{ item.i }}
        {{ item.i }}
        {{ item.i }}
        {{ item.i }}
        {{ item.i }}
        {{ item.i }}
        {{ item.i }}
        {{ item.i }}
        {{ item.i }}
        {{ item.i }}
        {{ item.i }}
        {{ item.i }}
        {{ item.i }}
        {{ item.i }}
        {{ item.i }}
      </GridItem>
    </GridLayout>
  </div>
</template>

<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import GridLayout from "./components/GridLayout.vue";
import GridItem from "./components/GridItem.vue";

export default {
  components: {
    GridLayout,
    GridItem,
  },
  data() {
    return {
      layout: [
        { x: 0, y: 0, w: 2, h: 2, i: "0" },
        { x: 2, y: 0, w: 2, h: 4, i: "1" },
        { x: 4, y: 0, w: 2, h: 5, i: "2" },
        { x: 6, y: 0, w: 2, h: 3, i: "3" },
        { x: 8, y: 0, w: 2, h: 3, i: "4" },
        { x: 10, y: 0, w: 2, h: 3, i: "5" },
        { x: 0, y: 5, w: 2, h: 5, i: "6" },
        { x: 2, y: 5, w: 2, h: 5, i: "7" },
        { x: 4, y: 5, w: 2, h: 5, i: "8" },
        { x: 6, y: 3, w: 2, h: 4, i: "9" },
        { x: 8, y: 4, w: 2, h: 4, i: "10" },
        { x: 10, y: 4, w: 2, h: 4, i: "11" },
        { x: 0, y: 10, w: 2, h: 5, i: "12" },
        { x: 2, y: 10, w: 2, h: 5, i: "13" },
        { x: 4, y: 8, w: 2, h: 4, i: "14" },
        { x: 6, y: 8, w: 2, h: 4, i: "15" },
        { x: 8, y: 10, w: 2, h: 5, i: "16" },
        { x: 10, y: 4, w: 2, h: 2, i: "17" },
        { x: 0, y: 9, w: 2, h: 3, i: "18" },
        { x: 2, y: 6, w: 2, h: 2, i: "19" },
      ],
    };
  },
};
</script>

<style>
.item {
  background-color: rgb(255, 179, 0) !important;
}
</style>
