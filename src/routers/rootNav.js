import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {AppStack} from './AppStack';
import {AuthStack} from './AuthStack';

const RootNav = createSwitchNavigator(
  {
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'Auth',
  },
);

export default createAppContainer(RootNav);
