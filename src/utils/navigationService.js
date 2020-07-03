/**
 *  Navigation Service to provide access to
 * routes outside the components
 */

import {NavigationActions, StackActions} from 'react-navigation';

let _navigator;

function setTopLevelNavigator(navigatorRef) {
  _navigator = navigatorRef;
}

function navigate(routeName, params) {
  _navigator.dispatch(
    NavigationActions.navigate({
      type: NavigationActions.NAVIGATE,
      routeName,
      params,
    }),
  );
}

function reset(routeName) {
  _navigator.dispatch(
    StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({routeName: routeName})],
    }),
  );
}

export default {
  navigate,
  setTopLevelNavigator,
  reset,
};
