<template>
<!-- <v-app>
<v-main>
      <v-container
        class="py-8 px-6"
        fluid
      >
        <v-row>
          <v-col cols="12">
            <v-card> -->
              <v-list three-line>
                <template v-for="(data, index) in comments" >
                  <v-list-item :key="index">
                    <v-list-item-avatar color="grey darken-1">
                      <img :src="data.avatar">
                    </v-list-item-avatar>

                    <v-list-item-content>
                      <v-list-item-title>{{ data.name }}</v-list-item-title>

                      <v-list-item-subtitle>
                        {{ data.content }}
                      </v-list-item-subtitle>
                      <v-list-item-subtitle>
                        {{data.createdAt.toDate().toLocaleString()}}
                      </v-list-item-subtitle>
                    </v-list-item-content>
                    <v-card-actions>
                       <v-icon color="red" @click="deleteComment(comment.id)" small>delete</v-icon>
                      <v-btn icon>
                        <v-icon color="pink">mdi-heart-outline</v-icon>
                      </v-btn>
                    </v-card-actions>
                  </v-list-item>

                  <v-divider
                    v-if="n !== 6"
                    :key="`divider-${index}`"
                    inset
                  ></v-divider>
                </template>
              </v-list>
            <!-- </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app> -->
</template>

<script>
import firebase from "@/firebase/firebase"

export default {
  async created() {
    const db = firebase.firestore().collection('comment').orderBy('createdAt')
    const snapshot = await db.get()

    snapshot.forEach(doc => {
      console.log("DBの中身は", doc.data())
      this.comments.push(doc.data())
      })

  },
  data: () => ({
    cards: ['Today'],
    comments: [],
  }),
  methods: {
      deleteComment(id) {
       if (!confirm('コメントを削除してよろしいですか？')) {
          return
        }
        firebase.collection('comment').doc(id).delete()
      },
    },
}
</script>





