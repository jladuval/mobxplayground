import { observable } from 'mobx'

const exampleStore = {
  person: observable({
    foo: 'app state',
    importantThing: 'This is coming from app state'
  })
}

export default exampleStore
