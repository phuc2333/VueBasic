import { createStore } from "vuex";

export default createStore({
  state: {
    user: [
      {
        name: "phuc",
        age: 1,
      },
      {
        name: "nam",
        age: 2,
      },
      {
        name: "long",
        age: 3,
      },
    ],
  },
  // su khac biet getters va state => getters dung de xu ly logic nao do
  // state de hung du lieu tra ve
  getters:{
    userListByBoy(state){
      return state.user.filter((user) => user.name === 'nam');
    }
  }
});
