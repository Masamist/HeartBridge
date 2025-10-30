import {createStackNavigator} from '@react-navigation/stack';
import { Routes } from './Routes';

import Login from '../screens/Login/Login';
import Registration from '../screens/Registration/Registration';
import Home from '../screens/Home/Home';
import MemberList from '../screens/MemberList.js/MemberList';

const Stack = createStackNavigator();

export const NonAuthenticated = () => {
  return (
    <Stack.Navigator
      initialRouteName={Routes.Login}
      screenOptions={{header: () => null, headerShown: false}}>
      <Stack.Screen name={Routes.Login} component={Login} />
      <Stack.Screen name={Routes.Registration} component={Registration} />
    </Stack.Navigator>
  );
};

export const Authenticated = () => {
  return (
    <Stack.Navigator
      initialRouteName={Routes.Login}
      screenOptions={{header: () => null, headerShown: false}}
    >
      <Stack.Screen name={Routes.Home} component={Home} />
      <Stack.Screen name={Routes.MemberList} component={MemberList} />
    </Stack.Navigator>

  );
};