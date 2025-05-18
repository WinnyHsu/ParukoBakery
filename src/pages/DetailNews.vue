<template>
  <div class="home font-montserrat p-10 sm:p-20 pb-10">
    <!-- Back -->
    <div class="sm:hidden mb-10">
      <router-link to="/news"
        ><img
          loading="lazy"
          src="../assets/arrowl.svg"
          class="w-[15px] h-full object-cover"
          alt="arrow"
      /></router-link>
    </div>
    <!-- Title -->
    <div v-if="currentNews" class="relative w-full space-y-5 mb-10">
      <div class="text-white text-2xl">{{ currentNews.date }}</div>
      <div class="text-white text-2xl">{{ currentNews.name }}</div>
    </div>
    <!-- News -->
    <div v-if="currentNews" class="relative w-full space-y-5">
      <img
        loading="lazy"
        :src="getImageSrc(currentNews.pic)"
        class="w-full h-full object-cover"
        alt="newsPic"
      />
      <div class="text-white whitespace-pre-line text-base/7">
        {{ currentNews.content }}
      </div>
    </div>
    <footer class="hidden sm:flex w-full pt-20">
      <div class="flex justify-between items-center w-full">
        <!-- 左側容器 -->
        <div class="w-1/2">
          <router-link
            v-if="previousNews"
            :key="previousNews.name"
            :to="{
              name: 'news-detail',
              params: { date: previousNews.routeDate },
            }"
            class="flex h-full group justify-start"
          >
            <section class="text-white flex items-center space-x-10">
              <img
                loading="lazy"
                src="../assets/arrowl.svg"
                class="w-[15px] h-full object-cover"
                alt="arrow"
              />
              <p
                class="text-xl group-hover:text-[20.5px] group-hover:text-[#2b3539] transition-all duration-200"
              >
                {{ previousNews.date }}
              </p>
              <p
                class="text-xl group-hover:text-[20.5px] transition-all duration-200"
              >
                {{ previousNews.name }}
              </p>
            </section>
          </router-link>
        </div>

        <!-- 右側容器 -->
        <div class="w-1/2 flex justify-end">
          <router-link
            v-if="nextNews"
            :key="nextNews.name"
            :to="{ name: 'news-detail', params: { date: nextNews.routeDate } }"
            class="flex h-full group"
          >
            <section class="text-white flex items-center space-x-10">
              <p
                class="text-xl group-hover:text-[20.5px] group-hover:text-[#2b3539] transition-all duration-200"
              >
                {{ nextNews.date }}
              </p>
              <p
                class="text-xl group-hover:text-[20.5px] transition-all duration-200"
              >
                {{ nextNews.name }}
              </p>
            </section>
            <img
              loading="lazy"
              src="../assets/arrow.svg"
              class="ml-10 w-[15px] h-full object-cover"
              alt="arrow"
            />
          </router-link>
        </div>
      </div>
    </footer>
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
          pic: "news1",
          content: `Dear Customers,\nTo better serve you, Paruko Bakery has adjusted its operating hours.Effective immediately, our new hours will be from 9 a.m. to 8 p.m., seven days a week. This change reflects our ongoing commitment to providing high-quality service while accommodating the needs of our growing community.Whether you're stopping by in the morning for a fresh croissant or picking up a warm loaf of bread after work, we hope these extended hours will offer greater flexibility and convenience.\n We appreciate your continued support and understanding as we strive to create an even better experience for you. Our team remains dedicated to delivering handcrafted baked goods made with care, passion, and the finest ingredients.\n Thank you once again for being part of the Paruko Bakery family. We look forward to welcoming you into our shop soon and continuing to share the joy of baking with you.`,
        },
        {
          name: "Attending Farmers Market!",
          date: "07.21.23",
          routeDate: "072123",
          pic: "news2",
          content: `Hey dear customers,\nWe’ve got some super exciting news to share! 🎉  \nParuko Bakery is heading to the Los Angeles Farmers Market on July 23rd — and we can’t wait to see you there!\nThis will be our very first time setting up a booth in LA, and we’re bringing along all your favorites: our signature toasts, bagels, French pastries, and more. We’ll also have some special deals and surprises just for the day!\nIf you’re in the area, drop by, say hi, and treat yourself to something freshly baked. We’d love to share our love of baking with you — in person!\nThanks for all your support, and we really hope to see you at the Farmers Market!`,
        },
        {
          name: "New Product is coming...",
          date: "07.12.23",
          routeDate: "071223",
          pic: "bread11",
          content: `Something fresh is baking at Paruko Bakery... 👀🥐\nWe’re excited to tease a brand-new product that’s been lovingly crafted in our kitchen — and it’s almost ready to meet you!\nOur team has been working behind the scenes, blending classic techniques with a modern twist to bring you a treat that’s both delicious and unforgettable.\nStay tuned — the big reveal is just around the corner.  \nKeep your eyes (and taste buds) ready. You won’t want to miss this!`,
        },
        {
          name: "Grand Opening!",
          date: "06.23.23",
          routeDate: "062323",
          pic: "news4",
          content: `🎉 Grand Opening! 🎉\nWe’re beyond excited to announce the grand opening of Paruko Bakery!\nJoin us as we open our doors for the very first time and share the passion we’ve poured into every loaf, bagel, and pastry. From handcrafted classics to unique signature flavors, we can’t wait for you to experience what we’ve been baking with love.\n🎈 Opening Day: [07.01.2023]  \n📍 Location: [123 Street Avenue, Los Angeles, Cal, 123]  \nCome celebrate with us! There will be opening-day specials, sweet samples, and plenty of warm smiles.\nWe’re so happy to finally be part of your neighborhood — and we can’t wait to serve you.`,
        },
      ],
    };
  },
  computed: {
    routeDate() {
      return this.$route.params.date;
    },
    currentNews() {
      return this.newsList.find(
        (news) => news.routeDate === this.$route.params.date
      );
    },
    nextNews() {
      const currentIndex = this.newsList.findIndex(
        (news) => news.routeDate === this.$route.params.date
      );
      // 如果是最後一筆就傳 null（或回到第一筆也可以）
      if (currentIndex === -1 || currentIndex === this.newsList.length - 1) {
        return null;
      }
      return this.newsList[currentIndex + 1];
    },
    previousNews() {
      const currentIndex = this.newsList.findIndex(
        (news) => news.routeDate === this.$route.params.date
      );
      console.log(currentIndex, this.newsList.length, "currentIndex");
      // 如果是最後一筆就傳 null（或回到第一筆也可以）
      if (currentIndex === -1) {
        return null;
      }
      return this.newsList[currentIndex - 1];
    },
  },
  components: {},
  methods: {
    getImageSrc(picName) {
      return require(`../assets/${picName}.png`);
    },
  },
};
</script>
