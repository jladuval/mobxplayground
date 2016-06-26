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
  const updateFooLocally = () => changeLocalState({ blam: 'fandas' })
  const thisMethodShouldNotWork = () => { applicationState.exampleStore.person.foo = 'osadijfoasijf' }
  const updateFooInAppState = () => { updateFoo('newFooValue') }
  return (
    <div styleName='main'>
      <div styleName='container'>
        <pre>{JSON.stringify(localState, null, 3)}</pre>
        <pre>{JSON.stringify(applicationState, null, 3)}</pre>
        <button
          label={'update local state'}
          onClick={updateFooLocally}
        />
        <button
          label={'this should do nothing'}
          onClick={thisMethodShouldNotWork}
        />
        <button
          label={'Update application state'}
          onClick={updateFooInAppState}
        />
      </div>
    </div>
  )
}

export default compose(
  injectLocalState(defaultState, ['exampleStore']),
  observer
)(Example)
