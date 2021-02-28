import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'

@Module({ name: 'books', stateFactory: true, namespaced: true })
export default class Books extends VuexModule {
  @Action
  public async index() {}

  @Action
  public async create() {}

  @Action
  public async show() {}

  @Action
  public async update() {}

  @Action
  public async destroy() {}
}
