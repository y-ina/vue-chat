<template>
  <div>
    <!--フォームの表示ボタン-->
    <v-btn
        color="blue"
        dark
        center
        fab
        fixed
        right
        @click="showCreateForm"
    >
      <v-icon>mdi-chat-plus-outline</v-icon>
    </v-btn>
    <v-dialog v-model="displayForm" max-width="500px">
      <!--コメント入力フォーム-->
      <v-card>
        <v-container>
          <h2>コメント追加</h2>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field
                v-model="inputName"
                :rules="nameRules"
                label="名前"
                required
            ></v-text-field>
            <v-text-field
                v-model="inputComment"
                :rules="commentRules"
                label="コメント"
                required
            ></v-text-field>
            <v-btn
                :disabled="!valid"
                @click="addComment"
            >
              投稿する
            </v-btn>
          </v-form>
        </v-container>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  import firebase from "@/firebase/firebase"

  export default {
    data: () => ({
      // form入力データ
      inputComment: "",
      inputName: "",
      // バリデーション
      valid: true,
      nameRules: [
        v => !!v || '名前は必須項目です',
      ],
      commentRules: [
        v => !!v || 'コメントは必須項目です',
      ],
      // Formダイアログの表示可否
      displayForm: false,
    }),
    methods: {
      // コメント追加
      addComment() {
        const now = new Date()
        // コメントをFirestoreへ登録
        firebase.firestore().collection('comment').add({
          name: this.inputName,
          content: this.inputComment,
          avatar: 'https://picsum.photos/50?image=' + (Math.floor(Math.random() * 400) + 1),
          createdAt: now
        })
        // ダイアログを閉じる
        this.hideCreateForm()
      },
      // Formの初期化
      clear() {
        this.$refs.form.reset()
      },
      // Formダイアログの表示
      showCreateForm() {
        this.displayForm = true
      },
      //
      // Formダイアログの非表示
      hideCreateForm() {
        this.clear()
        this.displayForm = false
      },
    },
  }
</script>