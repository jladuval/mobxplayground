import React from 'react'
import { curry, reduce } from 'ramda'
import { merge } from 'lodash/fp'
import { observer } from 'mobx-react'
import { observable, asStructure, action, computed, toJSON } from 'mobx'
import * as stores from '../stores/'

const injectLocalState = curry((defaultState, appStores, Component) => {
  class StateContainer extends React.Component {
    applicationState = reduce((acc, store) => ({ ...acc, [store]: stores[store] }), {}, appStores)

    statePointer = observable(asStructure({
      localState: defaultState
    }))

    changeLocalState = action((state) => {
      this.statePointer.localState = {
        ...this.statePointer.localState,
        ...state
      }
    })

    render () {
      return (<Component
        applicationState={this.applicationState}
        localState={this.statePointer.localState}
        changeLocalState={this.changeLocalState}
      />)
    }
  }

  return observer(StateContainer)
})

export default injectLocalState
