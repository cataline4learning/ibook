import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'

@Module({ name: 'books', stateFactory: true, namespaced: true })
export default class Books extends VuexModule {
  private count = 0

  public get $count() {
    return this.count
  }

  @Mutation
  private INCREMENT(number: number) {
    this.count += number
  }

  @Action
  public increment() {
    this.context.commit('INCREMENT', 5)
  }
}
