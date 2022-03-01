<template>
  <v-card class="d-flex flex-column mx-auto my-6 flat" width="374" color="#fff">
    <v-card-title class="d-flex justify-center pa-0 mt-6"
      >ログイン</v-card-title
    >
    <v-card-text class="d-flex justify-center flex-column">
      <p class="text-center pt-3 mt-3 text-subtitle-1 siginIn-border-top">
        メールアドレスでログイン
      </p>
      <v-form class="mx-9" ref="form" v-model="valid">
        <v-text-field
          placeholder="メールアドレス"
          outlined
          dense
          :rules="mailRules"
        ></v-text-field>
        <v-text-field
          placeholder="パスワード"
          outlined
          dense
          :rules="pwRules"
        ></v-text-field>
        <p class="pointer" @click="forgetPw">パスワードを忘れた方</p>
        <div class="text-center">
          <v-btn class="primary" @click="login">ログイン</v-btn>
        </div>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  methods: {
    login() {
      this.$refs.form.validate();
    }
  },
};
</script>