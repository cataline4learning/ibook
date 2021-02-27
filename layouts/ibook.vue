<template>
  <div class="ibook-layout">
    <Header />
    <Nuxt class="content" />
    <Footer />
  </div>
</template>

<style lang="scss" scoped>
.ibook-layout {
  margin-top: 4.313rem;
  display: grid;
  grid-gap: 6.75rem;
  .content {
    padding-bottom: 6.75rem;
  }
}
</style>
