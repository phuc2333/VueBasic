<template>
  <User v-for="(user, index) in userList" :key="index" :user='user'></User>
</template>

<script>
import User from "./User.vue";
export default {
  components: {
    User,
  },
  computed: {
    userList() {
      return this.$store.state.user;
    },
  },
};
</script>

<style></style>
