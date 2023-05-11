<template>
  <User v-for="(user, index) in userListByBoy" :key="index" :user='user'></User>
</template>

<script>
import User from "./User.vue";
import { mapState } from 'vuex'
export default {
  components: {
    User,
  },
 // computed: mapState({
    // c1
   // userList: (state) => state.user,

    //c2
    // countAlias: 'user',

  //}),

  // computed:mapState([
  //   'user'
  // ]),

  // gio viet như này để phân biệt hàm nào mình xây, hàm nào sẽ có nhiệm vụ lấy dữ
    // liệu từ trên vueX

    computed: {
  loading () {
    return true;
   },
   // ham nay goi lay du lieu tu store de loc ds user co ten la nam 
   // de tra du lieu ve component
   userListByBoy(){
    return this.$store.getters.userListByBoy;
   },
  // mix this into the outer object with the object spread operator
  ...mapState({
    userList: (state) => state.user,
  })

}
};
</script>

<style></style>
