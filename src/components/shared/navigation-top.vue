<template>
  <div>
    <v-navigation-drawer v-model="toggleLeftMenu" fixed>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item
            v-for="(item, index) in buttons"
            :key="index"
            :to="item.link"
            link
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app :color="bg">
      <v-app-bar-nav-icon
        @click="toggleLeftMenu = !toggleLeftMenu"
        v-if="$vuetify.breakpoint.smAndDown"
      ></v-app-bar-nav-icon>

      <v-toolbar-title class="pa-0">
        <v-btn text to="/" id="no-background-hover" :color="navBg">
          BRAND LOGO
        </v-btn>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        v-for="(item, index) in nav"
        :key="index"
        :title="item.title"
        text
        :to="item.link"
        link
        :color="navBg"
        ><v-icon size="24px">
          {{ item.icon }}
        </v-icon>
        {{ item.text }}
      </v-btn>
   
        
      
      <v-btn text @click="toggleCart = !toggleCart" :color="navBg">
          <v-badge left  content="4"> <v-icon> mdi-cart </v-icon> Cart</v-badge>
      </v-btn>

      <template
        v-slot:extension
        class="justify-space-around layout-menu"
        v-if="$vuetify.breakpoint.mdAndUp"
      >
        <v-container class="py-0 d-none d-md-block fill-height">
          <div
            class="
              d-flex
              fill-height
              justify-space-between
              py-2
              text-body-2 text-lg-body-1
              layout-menu
            "
          >
            <a
              href="/"
              style="text-decoration: none; font-weight: bold; color: white"
              >HOME</a
            >
            <a
              href=""
              style="text-decoration: none; font-weight: bold; color: white"
              >THEME</a
            >
            <a
              href=""
              style="text-decoration: none; font-weight: bold; color: white"
              >UI KITS</a
            >
            <a
              href=""
              style="text-decoration: none; font-weight: bold; color: white"
              >FREEBIES</a
            >
          </div>
        </v-container>
      </template>
    </v-app-bar>
    <v-navigation-drawer v-model="toggleCart" temporary right :width="360" app>
      <v-list nav dense>
        <v-list-item>
          <v-list-item-content>
            <span class="px-2 py-2">Shopping Cart</span>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item v-for="item in products" :key="item.id">

            <v-badge overlap color="blue" content="3">
              <v-avatar class="pt-3" rounded width="70" height="60">
                <v-img :src="item.img" width="70" height="60"></v-img>
              </v-avatar>
            </v-badge>


          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title> {{ item.title }}</v-list-item-title>
              <v-list-item-subtitle> {{ item.price }}</v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-action>
              <v-btn text fab><v-icon>mdi-delete </v-icon></v-btn>
            </v-list-item-action>
          </v-list-item>
        </v-list-item>
        <v-divider></v-divider>
      </v-list>
      <v-row align="center" class="pt-2 px-3">
        <v-col class="col-12">
          <span>Total </span>
        </v-col>
        <v-col class="col-12 d-flex justify-center">
          <v-btn class="theme--light v-size--large"> Check out </v-btn>
        </v-col>
      </v-row>
    </v-navigation-drawer>
  </div>
</template>
<script>
export default {
  name: "nav-bar",
  props: {
    products: { type: Array, require: true },
  },
  components: {},
  data: () => ({
    toggleLeftMenu: false,
    toggleCart: false,
    group: null,
    isActive: false,
    bg: "#05090c",
    navBg: "#ffffff",
    nav: [
      // {
      //   icon: "mdi-package",
      //   text: "Products",
      //   title: "Product page",
      //   active: true,
      //   link: "/product",
      // },
      // {
      //   icon: "mdi-cart",
      //   text: "Cart",
      //   title: "Cart Page",
      //   cDrawer: false,
      // },
      {
        icon: "mdi-account",
        text: "Account",
        title: "Login",
        active: false,
        link: "/login",
      },
    ],
    buttons: [
      {
        icon: "mdi-home",
        title: "HOME",
        link: "/",
      },
      {
        icon: "mdi-map",
        title: "THEME",
        link: "/map",
      },
      {
        icon: "mdi-infomation",
        title: "UI KITS",
        link: "/about",
      },
      {
        icon: "mdi-infomation",
        title: "FREEBIES",
        link: "/freebie",
      },
    ],
  }),
  methods: {},
  computed: {},
};
</script>
<style lang="scss">
#no-background-hover::before {
  background-color: transparent !important;
}
</style>