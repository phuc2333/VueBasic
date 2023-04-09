<template>
  <div>
    <button v-on:click="a++">A = A + 1</button>
    <button v-on:click="b++">B = B + 1</button>
    <p>Number + A: {{ addA }}</p>
    <p>Number + B: {{ addB }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      a: 0,
      b: 0,
      number: 20,
    };
  },

  computed: {
    addA() {
      console.log("add run A:");
      return this.a + this.number;
    },
    addB() {
      console.log("add run B:");
      return this.b + this.number;
    },
  },
};
</script>
// vvd tren de cho biet dung computed se giup cho toi uu phan render du lieu ra
dung ham dung su thay doi can thiet // con dung methods se lam cho phan render
ko dc toi uu // no se chay het du ham day khong dc ban goi
