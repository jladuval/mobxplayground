import React from 'react'
import { compose } from 'ramda'
import { observer } from 'mobx-react'
import injectLocalState from '../componentWrappers/injectLocalState'
import updateFoo from '../actions/updateFoo'
import RaisedButton from 'material-ui/RaisedButton'

const defaultState = {
  foo: 'bar',
  baz: 'bash'
}

const Example = ({ localState, changeLocalState, applicationState }) => {
  const updateFooLocally = (e) => changeLocalState({ foo: e.target.value })
  const thisMethodShouldNotWork = (e) => { applicationState.exampleStore.person.importantThing = e.target.value }
  //changeLocalState({ foo: applicationState.exampleStore.person.importantThing })
  const updateFooInAppState = () => { updateFoo('newFooValue') }
  return (
    <div styleName='main'>
      <div styleName='container'>
        <pre>{JSON.stringify(localState, null, 3)}</pre>
        <pre>{JSON.stringify(applicationState, null, 3)}</pre>
        <input type="text" value={applicationState.exampleStore.person.importantThing} onChange={thisMethodShouldNotWork} />
        <input type="text" value={localState.foo} onChange={updateFooLocally}/>
        <button
          onClick={updateFooInAppState}
        >Update application state</button>
      </div>
    </div>
  )
}

export default compose(
  injectLocalState(defaultState, ['exampleStore']),
  observer
)(Example)
