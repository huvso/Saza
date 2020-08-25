import React, { useEffect, useState } from 'react';
import { StyleSheet, SafeAreaView, View, Text, Image } from 'react-native';
import { ScrollView, TouchableOpacity, State } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import Constants from 'expo-constants';
import TrafficSign from '../../component/TrafficSign'

export default function DetailMain({route, navigation}) {
  const { params } = route.params;
  const { navigate } = navigation;

  const [data, setProductData] = useState([]);

  useEffect(() => {
    fetch(`https://raw.githubusercontent.com/huvso/json/master/01product/${params}.json`)
    .then((response) => response.json())
    .then((json) => setProductData(json))
    .catch((error) => console.error(error));
  }, []);
  
  return (
    <View style={styles.container}>
      <View style={styles.adContainer}>
        <Text>광고 플랫폼 자리</Text>
      </View>
      <View style={{height:80, flexDirection: 'row'}}>
        <View style={{flex: 1, height: '100%', justifyContent:'center', alignItems:'center', backgroundColor: '#1398FB'}}>
          <TouchableOpacity 
            style={{alignSelf: 'stretch', justifyContent:'center', alignItems:'center'}}
            onPress={() => {
              navigate("DetailMain", {
                params: params
              });
            }}
            >
            <Text style={{fontWeight: 'bold', fontSize: 16, color: '#fff'}}>상품</Text>
            <Text style={{fontWeight: 'bold', fontSize: 16, color: '#fff'}}>정보</Text>
          </TouchableOpacity>
        </View>
        <View style={{flex: 1, height: '100%', justifyContent:'center', alignItems:'center'}}>
          <TouchableOpacity style={{alignSelf: 'stretch', justifyContent:'center', alignItems:'center'}}
            onPress={() => {
              navigate("DetailPriceOff", {
                params: params
              });
            }}
          >
            <Text style={{fontWeight: 'bold', fontSize: 16}}>가격</Text>
            <Text style={{fontWeight: 'bold', fontSize: 16}}>정보</Text>
            <Text style={{fontSize: 10, color: '#bababa', fontWeight: 'bold'}}>평균 ￦{data.avg_price}</Text>
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
            <TrafficSign grade={data.com_grade}/>
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
            <TrafficSign grade={data.fail_grade}/>
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
            <Text style={{fontSize: 10}} ><Ionicons name="ios-star" size={10} color={'#ffd52b'} /> {data.star_point} </Text>
          </TouchableOpacity>
        </View>
      </View>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.innerContainer}>
          <View style={{height:200, justifyContent:'center', alignItems:'center'}}>
            <Image style={{flex: 1, width: '70%', height: '70%', transform: [{ scale: 0.9 }]}} source={{uri: data.img}}></Image>
          </View>
          <View>
            <View style={{marginVertical: 10}}>
              <Text style={{color: '#cfcfcf'}}>{ data.category }</Text>
            </View>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <Text style={styles.subTitle}>규격(가로x세로x높이)</Text>
              <Text style={{flex: 1}}>{ data.size }</Text>
            </View>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <Text style={styles.subTitle}>내용물중량</Text>
              <Text style={{flex: 1}}>{ data.con_weight }</Text>
            </View>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <Text style={styles.subTitle}>총중량</Text>
              <Text style={{flex: 1}}>{ data.total_weight }</Text>
            </View>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <Text style={styles.subTitle}>출시일</Text>
              <Text style={{flex: 1}}>{ data.pub_date }</Text>
            </View>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <Text style={styles.subTitle}>홈페이지/관련사이트</Text>
              <Text style={{flex: 1}}>{ data.site }</Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
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
  subTitle: {
    flex: 1,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10
  },
})
