<template>
  <div class="home font-montserrat">
    <!-- Banner -->
    <div class="relative w-full">
      <img src="../assets/banner.svg" class="w-full h-auto" alt="banner" />
      <span
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-6xl z-10"
        >menu</span
      >
    </div>
    <!-- Bread Section -->
    <div class="bread p-10">
      <h2 class="text-white text-4xl mb-5">bread</h2>
      <ul class="flex flex-wrap gap-10 justify-start">
        <li v-for="bread in breads" :key="bread.name">
          <div class="group relative w-[450px] h-[300px] overflow-hidden">
            <router-link to="/menu" class="block w-full h-full">
              <img
                :src="bread.image"
                class="w-full h-full object-cover"
                :alt="bread.name"
              />
              <div
                class="absolute inset-0 bg-white flex items-center justify-center opacity-0 scale-95 group-hover:opacity-90 group-hover:scale-100 transition-all duration-300 ease-in-out z-10"
              >
                <span class="text-[#2b3539] text-2xl">{{ bread.name }}</span>
              </div>
            </router-link>
          </div>
        </li>
      </ul>
    </div>
    <!-- Goods Section -->
    <div class="goods p-10">
      <h2 class="text-white text-4xl mb-5">goods</h2>
      <ul class="flex flex-wrap gap-10 justify-start">
        <li v-for="good in goods" :key="good.name">
          <div class="group relative w-[450px] h-[300px] overflow-hidden">
            <router-link to="/menu" class="block w-full h-full">
              <img
                :src="good.image"
                class="w-full h-full object-cover"
                :alt="good.name"
              />
              <div
                class="absolute inset-0 bg-white flex items-center justify-center opacity-0 scale-95 group-hover:opacity-90 group-hover:scale-100 transition-all duration-300 ease-in-out z-10"
              >
                <span class="text-[#2b3539] text-2xl">{{ good.name }}</span>
              </div>
            </router-link>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "MenuView",
  data() {
    return {
      breads: [
        { name: "chocolate chip", image: require("../assets/bread5.svg") },
        { name: "pancake", image: require("../assets/bread6.svg") },
        { name: "baguette", image: require("../assets/bread7.svg") },
        { name: "olive bread", image: require("../assets/bread8.svg") },
        { name: "raisin", image: require("../assets/bread9.svg") },
        { name: "bagel", image: require("../assets/bread10.svg") },
      ],
      goods: [
        { name: "jam", image: require("../assets/goods1.svg") },
        { name: "apron", image: require("../assets/goods2.svg") },
        { name: "salad bowl", image: require("../assets/goods3.svg") },
      ],
    };
  },
  components: {},
  methods: {},
};
</script>
