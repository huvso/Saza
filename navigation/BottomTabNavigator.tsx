import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';

import UserMain from '../screens/user/UserMain';

import { BottomTabParamList, TabOneParamList, TabTwoParamList, UserMainParamList } from '../types';
import { StyleSheet, View, Text } from 'react-native';
import { withSafeAreaInsets } from 'react-native-safe-area-context';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="products"
        tabstyle={{  backgroundColor: '#fff', }}
        component={TabOneNavigator}
        options={{
          tabBarLabel: 'Products',
          tabBarIcon: ({ color }) => 
            <TabBarIcon 
              name="ios-cart" 
              color={color} 
              size={30} 
              style={{ marginBottom: -3}}
            />,
        }}
      />

      <BottomTab.Screen
        name="camera"
        component={TabTwoNavigator}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ focused }) => {
            return (
              <View style={styles.centered }>
                <Ionicons color={'#fff'} name="ios-search" size={30} />
              </View>
            )
          }
        }}
      />

      <BottomTab.Screen
        name="UserMain"
        component={UserMainNavigator}
        options={{
          tabBarIcon: ({ color }) => 
            <TabBarIcon 
              name="ios-person" 
              color={color} 
              size={30} 
              style={{ marginBottom: -3 }}
            />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string; size: number; style: object }) {
  return <Ionicons {...props} />;
}

function TabBarCenterIcon(props: {}) {
  return <View>
    <Text>asdfasdf</Text>
  </View>
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="TabOneScreen"
        component={TabOneScreen}
        options={{ headerTitle: 'Tab One Title' }}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{ headerTitle: 'Tab Two Title' }}
      />
    </TabTwoStack.Navigator>
  );
}

const UserMainStack = createStackNavigator<UserMainParamList>();

function UserMainNavigator() {
  return (
    <UserMainStack.Navigator>
      <UserMainStack.Screen
        name="UserMainScreen"
        component={UserMain}
        options={{ headerTitle: 'User Main' }}
      />
    </UserMainStack.Navigator>
  )
}

const styles = StyleSheet.create({
  centered: {
    backgroundColor: '#1398FB', 
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10, 
    width: 80, 
    height: 80, 
    borderWidth: 10,
    borderColor: '#fff',
    borderRadius: 40,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 8,
      height: 16,
    },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
  }
});
