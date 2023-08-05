<template>
  <section class="py-6 px-4 settings-activity-page relative min-h-screen">
    <section class="flex items-center gap-3">
      <el-button class="btn" text @click="router.go(-1)">
        <svg
          width="9"
          height="15"
          viewBox="0 0 9 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.69102 0.293557C8.59373 0.200504 8.47815 0.126676 8.3509 0.0763025C8.22366 0.0259291 8.08725 0 7.94948 0C7.81172 0 7.6753 0.0259291 7.54806 0.0763025C7.42081 0.126676 7.30524 0.200504 7.20794 0.293557L0.245038 6.93634C0.167362 7.01029 0.105737 7.09813 0.0636898 7.19483C0.021643 7.29154 0 7.3952 0 7.49989C0 7.60459 0.021643 7.70825 0.0636898 7.80495C0.105737 7.90166 0.167362 7.9895 0.245038 8.06345L7.20794 14.7062C7.61851 15.0979 8.28045 15.0979 8.69102 14.7062C9.10159 14.3145 9.10159 13.683 8.69102 13.2913L2.62466 7.4959L8.6994 1.70045C9.10159 1.31675 9.10159 0.677255 8.69102 0.293557Z"
            fill="#263238"
          />
        </svg>
      </el-button>
      <section class="flex items-center gap-1 grow-0">
        <svg
          width="17"
          height="17"
          viewBox="0 0 17 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 2C0 0.89543 0.895431 0 2 0H15C16.1046 0 17 0.895431 17 2V15C17 16.1046 16.1046 17 15 17H2C0.89543 17 0 16.1046 0 15V2Z"
            fill="#546E7A"
          />
          <path d="M14.5005 15.0001H10.7863V2H14.5005V15.0001Z" fill="white" />
          <path d="M9.85649 15H6.14227V6H9.85649V15Z" fill="white" />
          <path d="M5.21422 15H1.5V9H5.21422V15Z" fill="white" />
        </svg>
        <h2 class="font-medium text-lg text-gray-700">Financial</h2>
      </section>
    </section>
    <hr class="my-2 border border-gray-300 border-opacity-10" />
    <section class="px-3 py-2 rounded-lg bg-white border border-gray-300">
      <Header @activeType="(e) => (activeType = e)" />
      <hr class="my-2 border border-gray-300 border-opacity-10" />

      <ClientOnly>
        <apexchart
          type="line"
          :options="state.chartOptions"
          :series="series"
        ></apexchart
      ></ClientOnly>
    </section>
    <Body class="mt-6" />
  </section>
</template>

<script setup>
import { ref } from "vue";
import Header from "@/components/TheProfile/Financial/Header";
import Body from "@/components/TheProfile/Financial/Body";
const router = useRouter();
const state = ref({
  title: "",

  series: [
    {
      name: "Desktops",
      data: [10, 41, 35, 51, 49, 62, 69],
    },
  ],
  chartOptions: {
    chart: {
      height: 350,
      type: "line",
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
    },
    title: {
      align: "left",
    },
    grid: {
      row: {
        colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
        opacity: 0.5,
      },
    },
    xaxis: {
      categories: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"],
    },
  },
});
const activeType = ref("All");

const series = computed(() => {
  if (activeType.value == "All") {
    return [
      {
        name: "All",
        data: [100, 410, 350, 510, 490, 620, 690],
      },
    ];
  } else if (activeType.value == "Views") {
    return [
      {
        name: "Views",
        data: [90, 121, 115, 131, 129, 142, 339],
      },
    ];
  } else if (activeType.value == "Likes") {
    return [
      {
        name: "Likes",
        data: [10, 41, 35, 51, 49, 62, 69],
      },
    ];
  } else {
    return [
      {
        name: "Views",
        data: [90, 121, 115, 131, 129, 142, 339],
      },
    ];
  }
});
</script>

<style scoped></style>
