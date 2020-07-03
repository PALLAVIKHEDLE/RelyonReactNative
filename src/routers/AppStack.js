import {createStackNavigator} from 'react-navigation-stack'; //'react-navigation';
import Dashboard from '../components/features/dashboard/Dashboard';
import Colors from '../style/colors';

const routeConfiguration = {
  dashboardScreen: {
    screen: Dashboard,
  },
};

const stackNavigatorConfiguration = {
  initialRouteName: 'dashboardScreen',
  defaultNavigationOption: {
    headerStyle: {
      backgroundColor: Colors.bgHeaderOrange,
    },
  },
};

export const AppStack = createStackNavigator(
  routeConfiguration,
  stackNavigatorConfiguration,
);
