<template>
  <v-container fill-height>
      <v-row justify="center" align="center">
        <v-col cols="8" md="4">
          <v-card ref="form" align="center">
            <v-card-text >
              <v-text-field ref="firstname" label="First Name" outlined>
              </v-text-field>
              <v-text-field ref="lastname" label="Last Name" outlined>
              </v-text-field>
              <v-text-field ref="email" label="Email" outlined> </v-text-field>
              <v-text-field ref="password" label="Password" outlined>
              </v-text-field>
            </v-card-text>
            <a href="/login" style="text-decoration: none;">Already has an account ?</a>
            <v-divider class="mt-3"></v-divider>
            <v-card-actions>
              <v-row>
                <v-col>
                  <v-btn outlined large>Register</v-btn>
                </v-col>
              </v-row>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
 
  </v-container>

</template>
<style scoped>

</style>