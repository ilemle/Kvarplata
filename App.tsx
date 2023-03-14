import React from 'react'
import FlashMessage from "react-native-flash-message";

import { Provider } from 'react-redux'

import MainNavigator from './src/navigation'
import { setupStore } from './src/store'

const store = setupStore()

const App = () => {

  return (
    <Provider store={store}>
      <MainNavigator />
      <FlashMessage/>
    </Provider>
  )
}

export default App;