import React from 'react'
import { compose } from 'ramda'
import { observer } from 'mobx-react'
import injectLocalState from '../componentWrappers/injectLocalState'
import Paper from 'material-ui/Paper'
import updateFoo from '../actions/updateFoo'
import RaisedButton from 'material-ui/RaisedButton'

const defaultState = {
  foo: 'bar',
  baz: 'bash'
}

const Example = ({ localState, changeLocalState, applicationState }) => {
  console.log('sodijfosijsadf')
  const updateFooLocally = () => changeLocalState({ blam: 'fandas' })
  const thisMethodShouldNotWork = () => { applicationState.exampleStore.person.foo = 'osadijfoasijf' }
  const updateFooInAppState = () => { updateFoo('newFooValue') }
  return (
    <div styleName='main'>
      <Paper styleName='container'>
        <pre>{JSON.stringify(localState, null, 3)}</pre>
        <pre>{JSON.stringify(applicationState, null, 3)}</pre>
        <RaisedButton
          label={'update local state'}
          onTouchTap={updateFooLocally}
        />
        <RaisedButton
          label={'this should do nothing'}
          onTouchTap={thisMethodShouldNotWork}
        />
        <RaisedButton
          label={'Update application state'}
          onTouchTap={updateFooInAppState}
        />
      </Paper>
    </div>
  )
}

export default compose(
  injectLocalState(defaultState, ['exampleStore']),
  observer
)(Example)
