<template>
  <footer class="footer">
    <Container class="footer-content">
      <Logo />
      <p>Copyright © {{ currentYear }} IBOOK</p>
    </Container>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  computed: {
    currentYear(): number {
      return new Date().getFullYear()
    }
  }
})
</script>

<style lang="scss" scoped>
.footer {
  width: 100%;
  height: 110px;
  background: color(dark, darkest);
  position: absolute;
  bottom: 0;
  left: 0;
  .container {
    display: grid;
    height: 100%;
    grid-auto-flow: column;
    justify-content: space-between;
    align-items: center;
    p {
      color: color('light', 'darkest');
    }
  }
}
</style>
