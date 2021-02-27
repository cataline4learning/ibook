<template>
  <form class="login-form" @submit.prevent="login">
    <input v-model="form.email" type="email" placeholder="E-mail" />
    <input v-model="form.password" type="password" placeholder="Senha" />
    <button type="submit">Entrar</button>
  </form>
</template>

<script lang="ts">
import Vue from 'vue'
import { auth } from '@/store'

export default Vue.extend({
  data() {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    async login() {
      try {
        await auth.create(this.form)
        this.$router.push('/dashboard')
      } catch (error) {
        console.log(error)
      }
    }
  }
})
</script>

<style lang="scss" scoped>
.login-form {
  display: grid;
  grid-gap: 0.5rem;
  input {
    background: transparent;
    border: 1px solid rgba(color('light'), 0.5);
    padding: 0.5rem 1rem;
    border-radius: 5rem;
    color: color('light');
    font-size: 1.1rem;
    transition: all 300ms ease;
    &:focus {
      border: 1px solid color('light');
    }
  }
  button {
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    border-radius: 5rem;
    background-color: color('light');
    color: color('dark', 'darkest');
    transition: all 300ms ease;
    font-size: 1.1rem;
    cursor: pointer;
    &:hover {
      transform: scale(1.05);
    }
  }
}
</style>
