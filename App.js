import { StyleSheet, useColorScheme, View, Text } from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigation from './navigation/MainNavigation';

import Home from './screens/Home/Home';

function App() {

  return (
    <SafeAreaProvider>
      <AppContent />
    </SafeAreaProvider>
  );
}

function AppContent() {
  const insets  = useSafeAreaInsets();

  return (
    <View
       style={{
        flex: 1,
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
       }} 
      >
      <NavigationContainer>
        <MainNavigation />
      </NavigationContainer>
    </View>
  );
}

export default App;
