import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';

import { BottomTabParamList, TabOneParamList, TabTwoParamList, UserMainParamList, ProductMainParamList, BarcodeMainParamList } from '../types';
import { StyleSheet, View, Text } from 'react-native';
import ProductMain from '../screens/product/ProductMain';
import BarcodeMain from '../screens/barcode/BarcodeMain';
import UserMain from '../screens/user/UserMain';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>

      <BottomTab.Screen
        name="ProductMain"
        component={ProductMainNavigator}
        options={{
          tabBarLabel: 'Product',
          tabBarIcon: ({ color }) => 
            <TabBarIcon 
              name="ios-cart" 
              color={color} 
              size={30} 
              style={{ marginBottom: -3 }}
            />,
        }}
      />

      <BottomTab.Screen
        name="BarcodeMain"
        component={BarcodeMainNavigator}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ focused }) => {
            return (
              <View style={styles.centered}>
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
          tabBarLabel: 'User',
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

const BarcodeMainStack = createStackNavigator<BarcodeMainParamList>();

function BarcodeMainNavigator() {
  return (
    <BarcodeMainStack.Navigator>
      <BarcodeMainStack.Screen
        name="BarcodeMainScreen"
        component={BarcodeMain}
        options={{ headerTitle: 'Barcode Main' }}
      />
    </BarcodeMainStack.Navigator>
  )
}

const ProductMainStack = createStackNavigator<ProductMainParamList>();

function ProductMainNavigator() {
  return (
    <ProductMainStack.Navigator>
      <ProductMainStack.Screen
        name="ProductMainScreen"
        component={ProductMain}
        options={{ headerTitle: 'Product Main' }}
      />
    </ProductMainStack.Navigator>
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
