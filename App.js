import {} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import WelcomeScreen from './screens/WelcomeScreen';
import UserScreen from './screens/UserScreen';

const BottomTab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <BottomTab.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: '#0c7313' },
          headerTintColor: 'white',
          tabBarActiveTintColor: '#0c7313'
        }}
      >
        <BottomTab.Screen
          name='Welcome'
          component={WelcomeScreen}
          options={{
            tabBarIcon: ({color, size}) => (
              <Ionicons name='home' color={color} size={size}/>
            )
          }}
        />
        <BottomTab.Screen
          name='User'
          component={UserScreen}
          options={{
            tabBarIcon: ({color, size}) => (
              <Ionicons name='person' color={color} size={size}/>
            )
          }}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}
