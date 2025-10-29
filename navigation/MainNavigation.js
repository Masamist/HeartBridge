import {createStackNavigator} from '@react-navigation/stack';
import { Routes } from './Routes';
import Home from '../screens/Home/Home';
import MemberList from '../screens/MemberList.js/MemberList';
const Stack = createStackNavigator();

const  MainNavigation = ({screens}) => {
  return (
    <Stack.Navigator screenOptions={{header: () => null, headerShown: false}}>
      <Stack.Screen name={Routes.Home} component={Home} />
      <Stack.Screen name={Routes.MemberList} component={MemberList} />
    </Stack.Navigator>

  );
}

export default MainNavigation;