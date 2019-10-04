import { observable, action } from 'mobx'

class UserStore {
  @observable username = 'ksaitor'

  @observable loading = false
  @observable success = null
  @observable err = null
}

export default new UserStore()
