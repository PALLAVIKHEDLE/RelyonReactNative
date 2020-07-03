import {createStackNavigator} from 'react-navigation-stack'; //'react-navigation';
import Login from '../components/features/login/Login';

const rootConfiguration = {
  loginPage: {screen: Login},
};

const stackNavigatorConfiguration = {
  initialRouteName: 'loginPage',
  headerMode: 'none',
};

export const AuthStack = createStackNavigator(
  rootConfiguration,
  stackNavigatorConfiguration,
);
