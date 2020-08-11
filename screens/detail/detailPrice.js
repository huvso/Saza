import React, {useState} from 'react';
import { StyleSheet, SafeAreaView, View, Text, Image } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import Constants from 'expo-constants';


export default function DetailPrice({ route, navigation }) {
  const { params } = route.params;
  const { navigate } = navigation;

  return (
    <View style={styles.container}>
      <View style={styles.adContainer}>
        <Text>광고 플랫폼 자리</Text>
      </View>
      <View style={{height:80, flexDirection: 'row'}}>
        <View style={{flex: 1, height: '100%', justifyContent:'center', alignItems:'center'}}>
          <TouchableOpacity 
            style={{alignSelf: 'stretch', justifyContent:'center', alignItems:'center'}}
            onPress={() => {
              navigate("DetailMain", {
                params: params
              });
            }}
            >
            <Text style={{fontWeight: 'bold', fontSize: 16}}>상품</Text>
            <Text style={{fontWeight: 'bold', fontSize: 16}}>정보</Text>
          </TouchableOpacity>
        </View>
        <View style={{flex: 1, height: '100%', justifyContent:'center', alignItems:'center', backgroundColor: '#1398FB'}}>
          <TouchableOpacity style={{alignSelf: 'stretch', justifyContent:'center', alignItems:'center'}}
            onPress={() => {
              navigate("DetailPrice", {
                params: params
              });
            }}
          >
            <Text style={{fontWeight: 'bold', fontSize: 16, color: '#fff'}}>가격</Text>
            <Text style={{fontWeight: 'bold', fontSize: 16, color: '#fff'}}>정보</Text>
            <Text style={{fontSize: 10, color: '#bababa', fontWeight: 'bold'}}>평균 ￦27,500</Text>
          </TouchableOpacity>
        </View>
        <View style={{flex: 1, height: '100%', justifyContent:'center', alignItems:'center'}}>
          <TouchableOpacity style={{alignSelf: 'stretch', justifyContent:'center', alignItems:'center'}}
            onPress={() => {
              navigate("DetailCompany", {
                params: params
              });
            }}>
            <Text style={{fontWeight: 'bold', fontSize: 16}}>제조사</Text>
            <Text style={{fontWeight: 'bold', fontSize: 16}}>정보</Text>
            <View style={{flexDirection:'row'}}>
              <Text style={{fontSize: 10, color: '#F2304A', marginHorizontal: 2}}>○</Text>
              <Text style={{fontSize: 10, color: '#FCBC25', marginHorizontal: 2}}>○</Text>
              <Text style={{fontSize: 10, color: '#6BFE24', marginHorizontal: 2}}>●</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{flex: 1, height: '100%', justifyContent:'center', alignItems:'center'}}>
          <TouchableOpacity style={{alignSelf: 'stretch', justifyContent:'center', alignItems:'center'}}
            onPress={() => {
              navigate("DetailFaulty", {
                params: params
              });
            }}>
            <Text style={{fontWeight: 'bold', fontSize: 16}}>불량</Text>
            <Text style={{fontWeight: 'bold', fontSize: 16}}>정보</Text>
            <View style={{flexDirection:'row'}}>
              <Text style={{fontSize: 10, color: '#F2304A', marginHorizontal: 2}}>○</Text>
              <Text style={{fontSize: 10, color: '#FCBC25', marginHorizontal: 2}}>○</Text>
              <Text style={{fontSize: 10, color: '#6BFE24', marginHorizontal: 2}}>●</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{flex: 1, height: '100%', justifyContent:'center', alignItems:'center'}}>
          <TouchableOpacity style={{alignSelf: 'stretch', justifyContent:'center', alignItems:'center'}}
            onPress={() => {
              navigate("DetailSafe", {
                params: params
              });
            }}>
            <Text style={{fontWeight: 'bold', fontSize: 16}}>안전</Text>
            <Text style={{fontWeight: 'bold', fontSize: 16}}>정보</Text>
            <Text style={{fontSize: 10}} ><Ionicons name="ios-star" size={10} color={'#ffd52b'} /> 4.5 </Text>
          </TouchableOpacity>
        </View>
      </View>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.innerContainer}>
          <View>
            <TouchableOpacity style={{alignSelf: 'stretch', justifyContent:'center', alignItems:'center'}}
              onPress={() => {
                navigate("DetailSafe", {
                  params: params
                });
              }}>
              <Text style={{fontWeight: 'bold', fontSize: 16}}>Off-Line</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{alignSelf: 'stretch', justifyContent:'center', alignItems:'center'}}
              onPress={() => {
                navigate("DetailSafe", {
                  params: params
                });
              }}>
              <Text style={{fontWeight: 'bold', fontSize: 16}}>On-Line</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  adContainer: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    marginTop: Constants.statusBarHeight,
    backgroundColor: '#fff',
    height: 150,
    backgroundColor: '#e4e6e8',
    justifyContent:'center',
    alignItems:'center'
  },
  innerContainer: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
})