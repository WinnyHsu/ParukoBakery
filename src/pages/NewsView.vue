<template>
  <div class="home font-montserrat">
    <!-- Banner -->
    <div class="relative w-full">
      <img
        loading="lazy"
        src="../assets/banner.png"
        class="w-full h-auto"
        alt="banner"
      />
      <span
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-6xl z-10"
        >news</span
      >
    </div>
    <!-- News Table -->
    <div class="news p-20 w-screen">
      <router-link
        v-for="news in newsList"
        :key="news.name"
        :to="{ name: 'news-detail', params: { date: news.routeDate } }"
        class="block w-full h-full group"
      >
        <section class="text-white flex items-center space-x-10">
          <p
            class="text-xl group-hover:text-[20.5px] group-hover:text-[#2b3539] transition-all duration-200"
          >
            {{ news.date }}
          </p>
          <p
            class="text-xl group-hover:text-[20.5px] transition-all duration-200"
          >
            {{ news.name }}
          </p>
        </section>
        <hr class="my-8 border-white-400" />
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "MenuView",
  data() {
    return {
      newsList: [
        {
          name: "Adjusting Opening Time",
          date: "08.09.23",
          routeDate: "080923",
        },
        {
          name: "Attending Farmers Market!",
          date: "07.21.23",
          routeDate: "072123",
        },
        {
          name: "New Product is coming...",
          date: "07.12.23",
          routeDate: "071223",
        },
        {
          name: "Grand Opening!",
          date: "06.23.23",
          routeDate: "062323",
        },
      ],
    };
  },
  components: {},
  methods: {},
  mounted() {
    const date = this.$route.params.date;
    console.log("目前這篇新聞的日期是", date);
  },
};
</script>
