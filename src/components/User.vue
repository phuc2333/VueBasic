<template>
  <ul>
    <li>{{user.name}}</li>
    <li>{{user.age}}</li>
  </ul>
</template>

<script>
export default {
  props:{
    user:{
      type:Object,
    }
  }
};
</script>

<style></style>
