<template>
  <v-app>
    <v-content>
      <Header />
      <Sidebar />
      <CommentForm />
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import CommentForm from './components/CommentForm'
export default {
  name: 'App',
  components: {
    Sidebar,
    Header,
    CommentForm,
  },
  data: () => ({
    //
  }),
  methods: {
  }
};
</script>