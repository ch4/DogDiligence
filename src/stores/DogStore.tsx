import { observable, action } from 'mobx'

class DogStore {
  @observable name = 'Hex'
  @observable age = 2
  @observable breed = null
}

export default DogStore
