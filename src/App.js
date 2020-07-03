/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

// import React, {Fragment, Component} from 'react';
// import {StyleSheet, View, Text} from 'react-native';

// import Login from '../src/components/features/login/Login';
// import configureStore from './redux/store/configureStore';
// import {PersistGate} from 'redux-persist/integration/react';

// import {Provider} from 'react-redux';
// import rootNav from '../src/routers/rootNav';

import React, {Fragment, Component} from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';

import configureStore from './redux/store/configureStore';
import RootNav from './routers/rootNav';
import NavigationService from './utils/navigationService';
import Colors from './style/colors';

const {store, persistor} = configureStore();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Fragment>
            <StatusBar
              barStyle="dark-content"
              backgroundColor={Colors.bgHeaderOrange}
            />
            <SafeAreaView
              style={{flex: 1}}
              forceInset={{bottom: 'never', top: 'never'}}>
              <RootNav
                ref={navigatorRef => {
                  NavigationService.setTopLevelNavigator(navigatorRef);
                }}
              />
            </SafeAreaView>
          </Fragment>
        </PersistGate>
      </Provider>
    );
  }
}
