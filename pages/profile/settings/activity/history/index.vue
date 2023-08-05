<template>

  <section class="py-6 px-4 settings-activity-page relative min-h-screen">
    <section class="flex items-center gap-3">
      <el-button class="btn" text @click="router.go(-1)">
        <svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
              d="M8.69102 0.293557C8.59373 0.200504 8.47815 0.126676 8.3509 0.0763025C8.22366 0.0259291 8.08725 0 7.94948 0C7.81172 0 7.6753 0.0259291 7.54806 0.0763025C7.42081 0.126676 7.30524 0.200504 7.20794 0.293557L0.245038 6.93634C0.167362 7.01029 0.105737 7.09813 0.0636898 7.19483C0.021643 7.29154 0 7.3952 0 7.49989C0 7.60459 0.021643 7.70825 0.0636898 7.80495C0.105737 7.90166 0.167362 7.9895 0.245038 8.06345L7.20794 14.7062C7.61851 15.0979 8.28045 15.0979 8.69102 14.7062C9.10159 14.3145 9.10159 13.683 8.69102 13.2913L2.62466 7.4959L8.6994 1.70045C9.10159 1.31675 9.10159 0.677255 8.69102 0.293557Z"
              fill="#263238"/>
        </svg>
      </el-button>
      <section class="flex items-center gap-1 grow-0">
        <svg width="24" height="17" viewBox="0 0 24 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="17" height="17" rx="2" fill="#546E7A"/>
          <path d="M9.7815 12.9953H9.666C9.43321 12.969 9.21385 12.8591 9.03978 12.6815C8.86571 12.504 8.74598 12.2679 8.698 12.0078L7.224 4.24526L5.706 8.24526C5.66306 8.35706 5.59227 8.45213 5.50236 8.51877C5.41245 8.5854 5.30734 8.62068 5.2 8.62026H3.55C3.40413 8.62026 3.26424 8.55441 3.16109 8.4372C3.05795 8.31999 3 8.16102 3 7.99526C3 7.8295 3.05795 7.67053 3.16109 7.55332C3.26424 7.43611 3.40413 7.37026 3.55 7.37026H4.837L6.2175 3.75151C6.31043 3.50867 6.46882 3.30565 6.66984 3.1717C6.87086 3.03776 7.10412 2.97982 7.33598 3.00624C7.56785 3.03266 7.78634 3.14207 7.95996 3.31869C8.13357 3.49532 8.25335 3.73004 8.302 3.98901L9.776 11.7453L11.294 7.75776C11.3353 7.64362 11.4053 7.54592 11.4954 7.47696C11.5854 7.408 11.6914 7.37087 11.8 7.37026H13.45C13.5959 7.37026 13.7358 7.43611 13.8389 7.55332C13.9421 7.67053 14 7.8295 14 7.99526C14 8.16102 13.9421 8.31999 13.8389 8.4372C13.7358 8.55441 13.5959 8.62026 13.45 8.62026H12.163L10.7825 12.239C10.6982 12.4618 10.5587 12.652 10.3809 12.7862C10.2032 12.9205 9.99493 12.9931 9.7815 12.9953Z" fill="white"/>
        </svg>
        <h2 class="font-medium text-lg text-gray-700">History</h2>
      </section>
    </section>
    <hr class="my-2 border border-gray-300 border-opacity-10">
    <section>
      <section class="flex items-center gap-2">
        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="17" height="17" rx="2" fill="#263238"/>
          <path d="M9.05144 3.84301V3.85422C9.05144 4.22972 9.29887 4.54357 9.64527 4.65566C11.2123 5.15446 12.3505 6.63964 12.3505 8.39945C12.3505 8.69088 12.3175 8.9655 12.257 9.23451C12.18 9.5932 12.323 9.96309 12.6364 10.1536L12.6419 10.1592C13.1148 10.4395 13.7306 10.1873 13.857 9.64924C13.9505 9.24572 14 8.82539 14 8.39945C14 5.87744 12.3615 3.73653 10.1071 3.03597C9.58479 2.87344 9.05144 3.28257 9.05144 3.84301ZM7.91877 12.2777C6.27475 12.0367 4.93864 10.6749 4.69671 9.00473C4.55416 8.07567 4.74394 7.12534 5.23144 6.32701C5.71894 5.52867 6.47169 4.93551 7.35244 4.65566C7.70433 4.54918 7.95176 4.22972 7.95176 3.85422V3.84301C7.95176 3.28257 7.41842 2.87344 6.89057 3.03597C5.63917 3.42807 4.56565 4.26159 3.86239 5.38716C3.15913 6.51273 2.87208 7.85678 3.05269 9.17847C3.3771 11.6332 5.32353 13.6172 7.73183 13.9479C9.45832 14.1833 11.0529 13.606 12.202 12.5299C12.6089 12.1488 12.5374 11.4707 12.0591 11.1905C11.7402 10.9999 11.3443 11.0616 11.0694 11.3138C10.2611 12.0648 9.13942 12.4627 7.91877 12.2777Z" fill="white"/>
        </svg>
        <h2 class="font-bold text-lg text-gray-700">History Of Activity</h2>
      </section>
      <section class="mt-2 p-3 rounded-lg border border-gray-300 bg-white">
        <h1 class="flex items-center gap-1 font-bold text-lg">
          Jan 1 to Jan 7 : 8 hour 39 min
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.5824 4.20588C12.5417 4.00658 12.4334 3.82746 12.2758 3.69883C12.1182 3.5702 11.9211 3.49996 11.7176 3.5H5.38235C5.14834 3.5 4.92391 3.59296 4.75844 3.75844C4.59296 3.92391 4.5 4.14834 4.5 4.38235V17.6176C4.5 17.8517 4.59296 18.0761 4.75844 18.2416C4.92391 18.407 5.14834 18.5 5.38235 18.5C5.61637 18.5 5.8408 18.407 6.00627 18.2416C6.17174 18.0761 6.26471 17.8517 6.26471 17.6176V12.3235H11.2059L11.4176 13.3824C11.4971 13.7953 11.8615 14.0926 12.2824 14.0882H16.8529C17.087 14.0882 17.3114 13.9953 17.4769 13.8298C17.6423 13.6643 17.7353 13.4399 17.7353 13.2059V6.14706C17.7353 5.91304 17.6423 5.68861 17.4769 5.52314C17.3114 5.35767 17.087 5.26471 16.8529 5.26471H12.7941L12.5824 4.20588Z" fill="#2DE09E"/>
          </svg>
        </h1>
        <hr class="my-2 border border-gray-300 border-opacity-10">
        <DaysSlider class="w-full" />
        <hr class="my-2 border border-gray-300 border-opacity-10">
        <section class="grid grid-cols-1 gap-5">
          <template v-for="item in historyItems">
            <section class="flex items-center justify-between">
              <h3 class="font-normal text-base text-gray-500">
                {{ item.title }}
                <template v-if="item.title == 'Delete the question'">
                  <span class="text-error-500">(Parent)</span>
                </template>
              </h3>
              <h3 class="font-normal text-base text-gray-500">{{ item.value }}</h3>
            </section>
          </template>
        </section>
      </section>
    </section>
  </section>
</template>

<script setup>
import DaysSlider from '@/components/TheProfile/Settings/History/DaysSlider'
const router = useRouter()
const historyItems = ref([
  { title: 'Explore', value:'08:24 AM, 12 min'},
  { title: 'Change profile picture', value:'08:24 AM, 7 min'},
  { title: 'Explore', value:'08:24 AM, 17 min'},
  { title: 'Top Story', value:'08:24 AM, 24 min'},
  { title: 'Explore', value:'08:24 AM, 2 min'},
  { title: 'Add a question', value:'08:24 AM, 11 min'},
  { title: 'Add a question', value:'08:24 AM, 9 min'},
  { title: 'Group chat', value:'08:24 AM, 3 min'},
  { title: 'private chat', value:'08:24 AM, 23 Sec'},
  { title: 'Skills', value:'08:24 AM, 34 Min'},
  { title: 'Change username', value:'08:24 AM, 2 Min'},
  { title: 'Delete the question', value:'08:24 AM, 12 Sec'},
  { title: 'Add skill', value:'08:24 AM, 11 Min'},
  { title: 'Explore', value:'08:24 AM, 3 Min'},
  { title: 'Story', value:'08:24 AM, 18 Min'},
  { title: 'Questions', value:'08:24 AM, 14 Min'},
  { title: 'Answers', value:'08:24 AM, 11Min'},
  { title: 'Add post', value:'08:24 AM, 16 Min'},
  { title: 'Calendar', value:'08:24 AM, 4 Min'},
  { title: 'private chat', value:'08:24 AM, 7 Min'},
  { title: 'Add Answer', value:'08:24 AM, 16 Min'},
  { title: 'Explore', value:'08:24 AM, 4 Min'},
])
</script>

<style scoped>

</style>