import React from 'react'
import FlashMessage from "react-native-flash-message";

import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';

import MainNavigator from './src/navigation'
import { persistor, store } from './src/store'



const App = () => {

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}></PersistGate>
      <MainNavigator />
      <FlashMessage />
    </Provider>
  )
}

export default App;