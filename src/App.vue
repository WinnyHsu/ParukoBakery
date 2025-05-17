<template>
  <div class="justify-center items-center bg-[#5D737A] w-full min-h-screen">
    <div class="flex items-center justify-between p-10">
      <router-link to="/">
        <img class="w-1/3 sm:w-1/6 ml-5" src="./assets/paruko.svg" />
      </router-link>
      <!-- 漢堡 icon（手機時顯示） -->
      <button class="sm:hidden h-1/2 w-1/5 ml-10" @click="toggleMenu">
        <img src="./assets/toggle.svg" class="w-full h-auto" alt="toggle" />
      </button>
      <!-- 導覽列（手機隱藏） -->
      <nav class="hidden sm:flex gap-5 text-xl font-montserrat">
        <router-link to="/menu">menu</router-link>
        <router-link to="/about">about</router-link>
        <router-link to="/news">news</router-link>
        <router-link to="/shop">online shop</router-link>
      </nav>
    </div>
    <div
      v-if="showMenu"
      class="fixed inset-0 bg-black bg-opacity-50 z-40 sm:hidden"
      @click="closeMenu"
    ></div>

    <!-- 右側滑出選單 -->
    <div
      class="fixed rounded-l-lg top-0 right-0 h-full w-3/4 max-w-xs bg-[#5D737A] text-white z-50 transform transition-transform duration-300 sm:hidden"
      :class="showMenu ? 'translate-x-0' : 'translate-x-full'"
    >
      <div class="flex flex-col p-6 space-y-4 text-xl font-montserrat">
        <router-link to="/menu" @click.native="closeMenu">menu</router-link>
        <router-link to="/about" @click.native="closeMenu">about</router-link>
        <router-link to="/news" @click.native="closeMenu">news</router-link>
        <router-link to="/shop" @click.native="closeMenu"
          >online shop</router-link
        >
      </div>
    </div>
    <router-view />
    <footer
      class="w-full text-center text-sm text-gray-400 py-6 font-montserrat"
    >
      © 2025 Paruko Bakery. All rights reserved.
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showMenu: false,
    };
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
    closeMenu() {
      this.showMenu = false;
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: "Montserrat Alternates", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    color: white;

    &:hover {
      color: #2b3539;
    }

    /* &.router-link-exact-active {
      color: #2b3539;
    } */
  }
}
</style>
