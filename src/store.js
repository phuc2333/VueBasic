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
});
