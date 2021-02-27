<template>
  <div class="logo" @click="$emit('click')">
    <img src="@/assets/img/logo.svg" alt="Ibook" />
  </div>
</template>

<style lang="scss" scoped>
.logo {
  width: 100%;
  img {
    width: 100%;
  }
}
</style>
