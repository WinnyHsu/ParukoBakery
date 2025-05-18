<template>
  <div class="home font-montserrat">
    <div
      id="heroTitle"
      class="absolute top-1/2 sm:top-1/4 inset-x-0 text-center z-10 text-white text-6xl transition-opacity duration-300"
    >
      paruko bakery
    </div>
    <div class="photobox p-10">
      <ul class="space-y-20">
        <li>
          <!-- 外層容器撐滿寬度，用來對齊整體排版 -->
          <div class="w-full flex justify-start">
            <!-- 內層圖片 + hover框容器，只跟圖片一樣寬 -->
            <div class="group relative w-[500px] h-[300px] overflow-hidden">
              <router-link to="/menu" class="block w-full h-full">
                <!-- 圖片 -->
                <img
                  loading="lazy"
                  src="../assets/bread.png"
                  class="w-full h-full object-cover"
                  alt="plain toast"
                />

                <!-- 白色提示框，尺寸與圖片一致 -->
                <div
                  class="absolute inset-0 bg-white flex items-center justify-center opacity-0 scale-95 group-hover:opacity-90 group-hover:scale-100 transition-all duration-300 ease-in-out z-10"
                >
                  <span class="text-[#2b3539] text-2xl">plain toast</span>
                </div>
              </router-link>
            </div>
          </div>
        </li>
        <li>
          <!-- 外層容器撐滿寬度，用來對齊整體排版 -->
          <div class="w-full flex justify-end">
            <!-- 內層圖片 + hover框容器，只跟圖片一樣寬 -->
            <div
              class="group relative w-[400px] h-[300px] overflow-hidden flex float-right mr-10"
            >
              <router-link to="/menu" class="block w-full h-full">
                <!-- 圖片 -->
                <img
                  loading="lazy"
                  src="../assets/bread2.png"
                  class="w-full h-full object-cover"
                  alt="french loaf"
                />

                <!-- 白色提示框，尺寸與圖片一致 -->
                <div
                  class="absolute inset-0 bg-white flex items-center justify-center opacity-0 scale-95 group-hover:opacity-90 group-hover:scale-100 transition-all duration-300 ease-in-out z-10"
                >
                  <span class="text-[#2b3539] text-2xl">french loaf</span>
                </div>
              </router-link>
            </div>
          </div>
        </li>
        <li>
          <!-- 外層容器撐滿寬度，用來對齊整體排版 -->
          <div class="w-full flex justify-start">
            <!-- 內層圖片 + hover框容器，只跟圖片一樣寬 -->
            <div class="group relative w-[400px] h-[300px] overflow-hidden">
              <router-link to="/menu" class="block w-full h-full">
                <!-- 圖片 -->
                <img
                  loading="lazy"
                  src="../assets/bread3.png"
                  class="w-full h-full object-cover"
                  alt="crossiant"
                />

                <!-- 白色提示框，尺寸與圖片一致 -->
                <div
                  class="absolute inset-0 bg-white flex items-center justify-center opacity-0 scale-95 group-hover:opacity-90 group-hover:scale-100 transition-all duration-300 ease-in-out z-10"
                >
                  <span class="text-[#2b3539] text-2xl">crossiant</span>
                </div>
              </router-link>
            </div>
          </div>
        </li>
        <li>
          <!-- 外層容器撐滿寬度，用來對齊整體排版 -->
          <div class="w-full flex justify-start">
            <!-- 內層圖片 + hover框容器，只跟圖片一樣寬 -->
            <div
              class="group relative w-[700px] h-[500px] overflow-hidden ml-20"
            >
              <router-link to="/about" class="block w-full h-full">
                <!-- 圖片 -->
                <img
                  loading="lazy"
                  src="../assets/chef.png"
                  class="w-full h-full object-cover"
                  alt="about us"
                />
                <!-- 白色提示框，尺寸與圖片一致 -->
                <div
                  class="absolute inset-0 bg-white flex items-center justify-center opacity-0 scale-95 group-hover:opacity-90 group-hover:scale-100 transition-all duration-300 ease-in-out z-10"
                >
                  <span class="text-[#2b3539] text-2xl">about us</span>
                </div>
              </router-link>
            </div>
          </div>
        </li>
        <li>
          <!-- 外層容器撐滿寬度，用來對齊整體排版 -->
          <div class="w-full flex justify-end">
            <!-- 內層圖片 + hover框容器，只跟圖片一樣寬 -->
            <div
              class="group relative w-[450px] h-[300px] overflow-hidden flex float-right mr-10"
            >
              <router-link to="/menu" class="block w-full h-full">
                <!-- 圖片 -->
                <img
                  loading="lazy"
                  src="../assets/cookie.png"
                  class="w-full h-full object-cover"
                  alt="french loaf"
                />

                <!-- 白色提示框，尺寸與圖片一致 -->
                <div
                  class="absolute inset-0 bg-white flex items-center justify-center opacity-0 scale-95 group-hover:opacity-90 group-hover:scale-100 transition-all duration-300 ease-in-out z-10"
                >
                  <span class="text-[#2b3539] text-2xl">french loaf</span>
                </div>
              </router-link>
            </div>
          </div>
        </li>
        <li>
          <!-- 外層容器撐滿寬度，用來對齊整體排版 -->
          <div class="w-full flex justify-start">
            <!-- 內層圖片 + hover框容器，只跟圖片一樣寬 -->
            <div
              class="group relative w-[500px] h-[300px] overflow-hidden ml-20"
            >
              <router-link to="/menu" class="block w-full h-full">
                <!-- 圖片 -->
                <img
                  loading="lazy"
                  src="../assets/cake.png"
                  class="w-full h-full object-cover"
                  alt="starwberry tart"
                />
                <!-- 白色提示框，尺寸與圖片一致 -->
                <div
                  class="absolute inset-0 bg-white flex items-center justify-center opacity-0 scale-95 group-hover:opacity-90 group-hover:scale-100 transition-all duration-300 ease-in-out z-10"
                >
                  <span class="text-[#2b3539] text-2xl">starwberry tart</span>
                </div>
              </router-link>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  components: {
    // HelloWorld,
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const title = document.getElementById("heroTitle");
      const scrollY = window.scrollY;
      // 調整淡出的程度
      const fadeStart = 0; // 開始淡出位置
      const fadeEnd = 200; // 滾動到 200px 時完全透明
      let opacity = 1;

      if (scrollY > fadeStart) {
        opacity = 1 - (scrollY - fadeStart) / (fadeEnd - fadeStart);
        opacity = Math.max(opacity, 0); // 不小於 0
      }
      let translateY = -1 * Math.min(scrollY, fadeEnd) * 0.35;

      title.style.opacity = opacity;
      title.style.transform = `translateY(${translateY}px)`;
    },
  },
};
</script>
