import React from 'react'

import { Provider } from 'react-redux'

import MainNavigator from './src/navigation'
import { setupStore } from './src/store'

const store = setupStore()

const App = () => {

  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  )
}

export default App;