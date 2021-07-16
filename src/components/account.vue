<template>
    <v-container fill-height>
      <v-row justify="center" align="center">
        <v-col cols="8" md="4">
          <v-card ref="form" align="center">
            <v-card-text>
              <v-text-field ref="email" label="Email" outlined> </v-text-field>
              <v-text-field ref="password" label="Password" outlined>
              </v-text-field>
            </v-card-text>
            <v-card-actions>
              <v-row>
                <v-col>
                  <v-btn outlined large to="/">Login</v-btn>
                </v-col>
              </v-row>
            </v-card-actions>
            <a href="#" style="text-decoration: none;">Forgot Password ?</a>
            <v-divider class="mt-3"></v-divider>
            <v-card-actions>
              <v-row>
                <v-col>
                  <v-btn outlined large to="/register">Register</v-btn>
                </v-col>
              </v-row>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
</template>
<script>
export default {
  components: {},
};
</script>
<style scoped>
.v-main{
  background: #111b27;
}
.v-col{
  background: black;
}
</style>