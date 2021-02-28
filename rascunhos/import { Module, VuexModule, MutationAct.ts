import { Module, VuexModule, MutationAction } from 'vuex-module-decorators'
import { $axios } from '~/utils/nuxt-instance'

@Module({ name: 'books', stateFactory: true, namespaced: true })
export default class Books extends VuexModule {
  count = 0

  get $count() {
    return this.count
  }

  @MutationAction({ mutate: ['count'] })
  async increment() {
    await $axios.$get('/')
    return { count: 5 }
  }
}
