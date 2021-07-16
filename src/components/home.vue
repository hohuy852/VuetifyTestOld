<template>
  <v-container>
    <Navigation :products="products" />
    <Search />
    <v-row>
      <template v-for="category in  categories">
        <v-col :key="category.id" cols="12" class="mt-12">
          <v-divider class="my-12"></v-divider>
          <strong >  {{ category.name }}</strong>
        </v-col>
        <v-col v-for="product in category.products" :key="`${category}${product}`" cols="6" md="3">
          <!-- <v-sheet height="250"> </v-sheet> -->
           <v-card class="mx-auto my-5" max-width="374">
              <v-img height="250" :src="product.img" ></v-img>
              <v-card-title>{{ product.title }}</v-card-title>
              <v-card-text>
                <v-row align="center" class="mx-0">
                  <v-rating
                    :value="4.5"
                    color="amber"
                    dense
                    half-increments
                    readonly
                    size="14"
                  ></v-rating>

                  <div class="grey--text ms-4">{{ product.rate }}</div>
                </v-row>

                <div class="my-4 text-subtitle-1">{{ product.price }}$</div>

                <div>
                  {{ product.description }}
                </div>
              </v-card-text>

              <v-divider class="mx-4"></v-divider>
              
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="deep-purple lighten-2" text> Buy </v-btn>
                  <v-btn color="deep-purple lighten-2" text @click ="addToCart">
                    Add to cart
                  </v-btn>
              </v-card-actions>
            </v-card>
        </v-col>
      </template>
    </v-row>
    <!-- <v-divider></v-divider> -->
    <!-- <v-row>
          <v-col
            v-for="product in products"
            :key="product.id"
            cols="6"
            md ="3"
            
          >
            <v-card class="mx-auto my-12" max-width="374">
              <v-img height="250" :src="product.img"></v-img>
              <v-card-title>{{ product.title }}</v-card-title>
              <v-card-text>
                <v-row align="center" class="mx-0">
                  <v-rating
                    :value="4.5"
                    color="amber"
                    dense
                    half-increments
                    readonly
                    size="14"
                  ></v-rating>

                  <div class="grey--text ms-4">{{ product.rate }}</div>
                </v-row>

                <div class="my-4 text-subtitle-1">{{ product.price }}$</div>

                <div>
                  {{ product.description }}
                </div>
              </v-card-text>

              <v-divider class="mx-4"></v-divider>
              
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="deep-purple lighten-2" text> Buy </v-btn>
                  <v-btn color="deep-purple lighten-2" text @click ="addToCart">
                    Add to cart
                  </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
      </v-row> -->
    <v-btn
      v-scroll="onScroll"
      v-show="fab"
      fab
      dark
      fixed
      bottom
      right
      color="primary"
      @click="toTop"
    >
      <v-icon>mdi-arrow-up-bold</v-icon>
    </v-btn>
  </v-container>
</template>
<script>
import Navigation from "./shared/navigation-top.vue";
import Search from "./shared/search-front.vue";
//import Footer from "./shared/footer.vue";
export default {
  name: "Home",
  // props: {
  //   products: {
  //     type: Array,
  //   }
  // },
  components: {
    Search,
    //  Footer,
    Navigation,
  },
  data: () => ({
    boughtProducts: [],
    categories: [
      {
        id: 1,
        name: "THEME",
        products: [
          {
            id: 1,
            img: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
            title: "Cafe Badilico",
            rate: "4.7",
            price: "1235",
            description: "No Description",
          },
          {
            id: 2,
            img: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
            title: "Cafe Badilico",
            rate: "4.7",
            price: "1235",
            description: "No Description",
          },
          {
            id: 3,
            img: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
            title: "Cafe Badilico",
            rate: "4.7",
            price: "1235",
            description: "No Description",
          },
          {
            id: 4,
            img: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
            title: "Cafe Badilico",
            rate: "4.7",
            price: "1235",
            description: "No Description",
          },
        ],
      },
      {
        id: 2,
        name: "FREEBIES",
        products: [
          {
            id: 1,
            img: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
            title: "Cafe Badilico",
            rate: "4.7",
            price: "1235",
            description: "No Description",
          },
          {
            id: 2,
            img: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
            title: "Cafe Badilico",
            rate: "4.7",
            price: "1235",
            description: "No Description",
          },
          {
            id: 3,
            img: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
            title: "Cafe Badilico",
            rate: "4.7",
            price: "1235",
            description: "No Description",
          },
          {
            id: 4,
            img: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
            title: "Cafe Badilico",
            rate: "4.7",
            price: "1235",
            description: "No Description",
          },
          {
            id: 5,
            img: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
            title: "Cafe Badilico",
            rate: "4.7",
            price: "1235",
            description: "No Description",
          },
          {
            id: 6,
            img: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
            title: "Cafe Badilico",
            rate: "4.7",
            price: "1235",
            description: "No Description",
          },
        ],
      },
        {
        id: 3,
        name: "UI KITS",
        products: [
          {
            id: 1,
            img: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
            title: "Cafe Badilico",
            rate: "4.7",
            price: "1235",
            description: "No Description",
          },
          {
            id: 2,
            img: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
            title: "Cafe Badilico",
            rate: "4.7",
            price: "1235",
            description: "No Description",
          },
          {
            id: 3,
            img: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
            title: "Cafe Badilico",
            rate: "4.7",
            price: "1235",
            description: "No Description",
          },
          
        ],
      },
    ],
    products: [
      {
        id: 1,
        img: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
        title: "Cafe Badilico",
        rate: "4.7",
        price: "1235",
        description: "No Description",
      },
      {
        id: 2,
        img: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
        title: "Cafe Badilico",
        rate: "4.7",
        price: "1235",
        description: "No Description",
      },
      {
        id: 3,
        img: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
        title: "Cafe Badilico",
        rate: "4.7",
        price: "1235",
        description: "No Description",
      },
      {
        id: 4,
        img: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
        title: "Cafe Badilico",
        rate: "4.7",
        price: "1235",
        description: "No Description",
      },
      {
        id: 5,
        img: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
        title: "Cafe Badilico",
        rate: "4.7",
        price: "1235",
        description: "No Description",
      },
      {
        id: 6,
        img: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
        title: "Cafe Badilico",
        rate: "4.7",
        price: "1235",
        description: "No Description",
      },
    ],
    fab: false,
  }),
  methods: {
    onScroll(e) {
      if (typeof window === "undefined") return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.fab = top > 20;
    },
    toTop() {
      this.$vuetify.goTo(0);
    },
    addToCart(e) {
      console.log(e.target);
    },
  },
};
</script>
<style scoped>
</style>
