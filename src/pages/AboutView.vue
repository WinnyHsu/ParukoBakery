<template>
  <div class="home font-montserrat">
    <!-- Banner -->
    <div class="relative w-full">
      <img src="../assets/banner.png" class="w-full h-auto" alt="banner" />
      <span
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-6xl z-10"
        >about</span
      >
    </div>
    <!-- Intro Section -->
    <div class="intro p-10 flex w-screen">
      <div
        class="text-white text-xl text-left w-2/3 h-50 flex items-center justify-center"
      >
        Paruko Bakery is not only a feast for the taste buds but also a visual
        and sensory delight. As you step into our shop, you will be greeted by
        the subtle scent of freshly baked goods and a warm ambiance, inviting
        you on a delectable journey through the world of baking.
      </div>
      <div class="w-1/2 justify-end flex">
        <img
          src="../assets/about1.png"
          class="w-full h-full object-cover"
          alt="bread"
        />
      </div>
    </div>
    <!-- Contact Section -->
    <div class="contact p-10 flex w-screen">
      <div class="w-1/2 justify-end flex">
        <img
          src="../assets/about2.png"
          class="w-full h-full object-cover"
          alt="bread"
        />
      </div>
      <div class="flex justify-center items-center">
        <section class="text-white text-left w-full space-y-4 ml-10">
          <h2 class="text-4xl font-bold mb-4">Contact Us</h2>
          <p class="text-xl">TEL: 123-45678</p>
          <p class="text-xl">
            Address: 123 Street Avenue, Los Angeles, Cal, 123
          </p>
          <p class="text-xl">Email: parukobakery@paruko.com</p>
          <p class="text-xl">Hours: 09:00 - 20:00 everyday</p>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MenuView",
  data() {
    return {};
  },
  components: {},
  methods: {},
};
</script>
