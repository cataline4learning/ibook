<template>
  <h1>
    {{ text }} <b>{{ strong }}</b>
  </h1>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    },
    strong: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
h1 {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 500;
  @include screen('small', 'medium') {
    grid-template-columns: 1fr;
    font-size: 1.8rem;
  }
  span {
    color: color(dark, darkest);
  }
}
</style>
