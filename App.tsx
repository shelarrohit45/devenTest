import * as React from 'react';

import { Routes } from './src/routes';


import { Alert, StatusBar } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { persistStore, persistReducer } from "redux-persist";
import ReduxThunk from "redux-thunk";
import { PersistGate } from "redux-persist/integration/react";

import rootReducer from "./src/redux/reducers";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  // whitelist: ["auth"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = createStore(persistedReducer, applyMiddleware(ReduxThunk));
let persistor = persistStore(store);


export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <StatusBar
              barStyle='dark-content'
              hidden={false}
              backgroundColor='#fff'
              translucent={true}
            />
            <Routes />
          </PersistGate>
        </Provider>
    </GestureHandlerRootView>
  );
}
