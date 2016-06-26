import updateFooAppState from '../mutators/updateFoo'

const updateFoo = (newFoo) => {
  // do some api call
  updateFooAppState(newFoo)
}

export default updateFoo
