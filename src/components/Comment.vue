<template>
  <v-list three-line>
    <template v-for="(data, index) in comments" >
      <v-list-item :key="index">

        <v-list-item-avatar color="grey darken-1">
          <img :src="data.avatar">
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>
            {{ data.name }}
          </v-list-item-title>
          <v-list-item-subtitle>
            {{ data.content }}
          </v-list-item-subtitle>
          <v-list-item-subtitle>
            {{data.createdAt.toDate().toLocaleString()}}
          </v-list-item-subtitle>
        </v-list-item-content>

        <v-card-actions>
          <v-icon
            color="grey"
            @click="deleteComment(data)" 
          >mdi-delete</v-icon>
          <v-icon
            click="likeComennt"
            color="pink"
          >mdi-heart-outline</v-icon>
        </v-card-actions>

      </v-list-item>
      <v-divider
        v-if="n !== 6"
        :key="`divider-${index}`"
        inset
      ></v-divider>
    </template>
  </v-list>
            
</template>

<script>
import firebase from "@/firebase/firebase"

export default {
  async created() {
    const db = firebase.firestore().collection('comment').orderBy('createdAt', 'desc')
    const snapshot = await db.get()

    snapshot.forEach(doc => {
      this.comments.push(doc.data())
      })

  },
  data: () => ({
    comments: [],
  }),
  methods: {
      deleteComment(id) {
        console.log(id);
      // if (!confirm('コメントを削除してよろしいですか？')) {
      //     return
      //   }
      //   firebase.firestore().collection('comment').doc(id).delete()
      },
    },
}
</script>





