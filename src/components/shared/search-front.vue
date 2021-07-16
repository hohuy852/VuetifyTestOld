<template>

    <v-window>
      <v-window-item>
        <v-carousel class="my-7" height="400">
          <v-carousel-item
            class=""
            v-for="img in imgs"
            :key="img.id"
            :src="img.url"
            hide-delimiter-background
          >
            <v-sheet width=""> </v-sheet>
          </v-carousel-item>
        </v-carousel>
      </v-window-item>
    </v-window>

</template>

<script>
export default {
  data: () => ({
    imgs: [
      {
        id: 1,
        url: "https://i.pinimg.com/736x/bb/79/5a/bb795ac13cecee4a37337abc4fadc4aa.jpg",
      },
      {
        id: 2,
        url: "https://images.unsplash.com/photo-1513151233558-d860c5398176?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZnVuJTIwYmFja2dyb3VuZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
      },
    ],
  }),
};
</script>

<style>
</style>