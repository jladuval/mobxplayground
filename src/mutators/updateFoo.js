import { exampleStore } from '../stores/'
import { action } from 'mobx'

const updateFoo = action((newFoo) => {
  exampleStore.person.foo = newFoo
})

export default updateFoo
