<template>
<div>
  <v-card class="d-flex flex-column my-6 mx-auto" width="374" color="#fff">
    <v-form ref="form" v-model="valid">
      <v-card-title class="d-flex justify-center pa-0 mt-6 mb-3"
        >新規登録</v-card-title
      >
      <v-card-text class="d-flex justify-center flex-column">
        <div class="mx-9">
          <v-text-field
            label="ニックネーム"
            placeholder="15文字以内"
            outlined
            dense
          ></v-text-field>
          <v-text-field
            label="メールアドレス"
            placeholder="mail@example.com"
            outlined
            dense
          ></v-text-field>
          <v-text-field
            label="パスワード"
            placeholder="8文字以上の半角英数記号"
            outlined
            dense
          ></v-text-field>
        </div>
        <div class="text-center">
          <v-btn class="primary" @click="register">登録</v-btn>
        </div>
      </v-card-text>
    </v-form>
  </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  methods: {
    register() {
      
    }
  },
};
</script>