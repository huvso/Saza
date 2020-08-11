import * as React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import UserMain from './screens/user/UserMain'
import BarcodeMain from './screens/barcode/BarcodeMain'
import ProductMain from './screens/product/ProductMain'
import DetailMain from './screens/detail/detailMain';
import DetailPrice from './screens/detail/detailPrice';
import DetailCompany from './screens/detail/detailCompany';
import DetailFaulty from './screens/detail/detailFaulty';
import DetailSafe from './screens/detail/detailSafe';


function DetailsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center',  alignItems: 'center' }}>
      <Text>Details!</Text>
    </View>
  );
}

function Details2Screen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center',  alignItems: 'center' }}>
      <Text>Details!</Text>
    </View>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>  
      <Text>Home screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details2')}
      />
    </View>
  );
}

function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

const HomeStack = createStackNavigator();
function HomeStackScreen() {
 return (
   <HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={HomeScreen} />             
    <HomeStack.Screen name="Details" component={DetailsScreen} />
    <HomeStack.Screen name="Details2" component={Details2Screen} />
   </HomeStack.Navigator>
  );
}
const SettingsStack = createStackNavigator();
function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
      <SettingsStack.Screen name="Details" component={DetailsScreen} />
    </SettingsStack.Navigator>
  );
}

const BarcodeStack = createStackNavigator();
function BarcodeStackScreen() {
  return(
    <BarcodeStack.Navigator 
      screenOptions={{
        headerShown: false,
        animationEnabled: false,
      }}
    >
      <BarcodeStack.Screen name="BarcodeMain" component={BarcodeMain} />
      <BarcodeStack.Screen name="DetailMain" component={DetailMain} />
      <BarcodeStack.Screen name="DetailPrice" component={DetailPrice} />
      <BarcodeStack.Screen name="DetailCompany" component={DetailCompany} />
      <BarcodeStack.Screen name="DetailFaulty" component={DetailFaulty} />
      <BarcodeStack.Screen name="DetailSafe" component={DetailSafe} />
    </BarcodeStack.Navigator>
  )
}

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#1398FB',
          inactiveTintColor: 'gray',
        }}>

        <Tab.Screen 
          name="ProductsMain" 
          component={ProductMain} 
          options={{
            tabBarLabel: 'Products',
            tabBarIcon: ({ color }) => {
              return <Ionicons name='ios-cart' size={30} color={color} />
            }
          }}  
        />
        
        <Tab.Screen 
          name="BarcodeMain" 
          component={BarcodeStackScreen} 
          options={{
            tabBarLabel:'',
            tabBarIcon: () => {
              return (
                <View style={styles.centered}>
                  <Ionicons color={'#fff'} name="ios-search" size={30} />
                </View>
              )
            }
          }}
        />

        <Tab.Screen 
          name="UserMain" 
          component={UserMain} 
          options={{
            tabBarLabel: 'User',
            tabBarIcon: ({ color }) => {
              return <Ionicons name='ios-person' size={30} color={color} />
            }
          }}
        
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  centered: {
    backgroundColor: '#1398FB', 
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10, 
    width: 70, 
    height: 70, 
    borderWidth: 10,
    borderColor: '#fff',
    borderRadius: 40,
    marginBottom: 10,
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
