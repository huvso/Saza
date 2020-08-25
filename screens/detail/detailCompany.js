import React, { useEffect, useState } from 'react';
import { StyleSheet, SafeAreaView, View, Text, Image } from 'react-native';
import { ScrollView, TouchableOpacity, FlatList } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import Constants from 'expo-constants';
import TrafficSign from '../../component/TrafficSign'

export default function DetailCompany({ route, navigation }) {
  const { params } = route.params;
  const { navigate } = navigation;

  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`https://raw.githubusercontent.com/huvso/json/master/03company/${params}.json`)
    .then((response) => response.json())
    .then((json) => setData(json))
    .catch((error) => console.error(error));
  }, []);

  const [product, setProductData] = useState([]);

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
            <Text style={{fontSize: 10, color: '#bababa', fontWeight: 'bold'}}>평균 ￦{ product.avg_price }</Text>
          </TouchableOpacity>
        </View>
        <View style={{flex: 1, height: '100%', justifyContent:'center', alignItems:'center', backgroundColor: '#1398FB'}}>
          <TouchableOpacity style={{alignSelf: 'stretch', justifyContent:'center', alignItems:'center'}}
            onPress={() => {
              navigate("DetailCompany", {
                params: params
              });
            }}>
            <Text style={{fontWeight: 'bold', fontSize: 16, color: '#fff'}}>제조사</Text>
            <Text style={{fontWeight: 'bold', fontSize: 16, color: '#fff'}}>정보</Text>
            <TrafficSign grade={product.com_grade}/>
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
            <TrafficSign grade={product.fail_grade}/>
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
            <Text style={{fontSize: 10}} ><Ionicons name="ios-star" size={10} color={'#ffd52b'} /> { product.star_point } </Text>
          </TouchableOpacity>
        </View>
      </View>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.innerContainer}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <Text style={styles.subTitle}>제조국가</Text>
          <Text style={{flex: 2}}>{ data.country }</Text>
          </View>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <Text style={styles.subTitle}>제조사/생산자</Text>
            <Text style={{flex: 2}}>{ data.company }</Text>
          </View>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <Text style={styles.subTitle}>판매자</Text>
            <Text style={{flex: 2}}>{ data.seller }</Text>
          </View>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <Text style={styles.subTitle}>업체주소 (도로명주소)</Text>
            <View style={{flex: 2}}>
              <Text style={{flex: 2, marginBottom: -10}}>{ data.ji_juso }</Text>
              <Text style={{flex: 2}}>{ data.doro_juso }</Text>
            </View>
          </View>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <Text style={styles.subTitle}>대표전화</Text>
            <Text style={{flex: 2}}>{ data.phone }</Text>
          </View>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <Text style={styles.subTitle}>수정일</Text>
            <Text style={{flex: 2}}>{ data.update_date }</Text>
          </View>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <Text style={styles.subTitle}>고객센터</Text>
            <Text style={{flex: 2}}>{ data.cs }</Text>
          </View>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <Text style={styles.subTitle}>국내리콜횟수</Text>
            <Text style={{flex: 2}}>{ data.recall_cnt }</Text>
          </View>

          <View style={{flex: 1, flexDirection: 'row'}}>
            <Text style={styles.subTitle}>뉴스 정보</Text>
          </View>    
          <View style={{ flexDirection: 'row', height: 130, borderRadius: 5, borderWidth: 1, borderColor: '#cfcfcf', marginBottom: 10}}>
            <View style={{ flex: 8, padding:5, borderRadius: 5 }}> 
              <Text style={{ fontWeight: 'bold', marginBottom: 4}}>{ data.news1_title }</Text>
              <Text style={{ fontSize: 12}}>{ data.news1_text }</Text>
            </View>
            <View style={{ flex: 4, padding:5, borderRadius: 5 }}>
              <Image style={{flex: 1, width: '100%', height: '100%', borderRadius: 5 }} source={{uri: data.news1_img}}></Image>
            </View>
          </View>
          <View style={{ flexDirection: 'row', height: 130, borderRadius: 5, borderWidth: 1, borderColor: '#cfcfcf', marginBottom: 10}}>
            <View style={{ flex: 8, padding:5, borderRadius: 5 }}> 
              <Text style={{ fontWeight: 'bold', marginBottom: 4}}>{ data.news2_title }</Text>
              <Text style={{ fontSize: 12}}>{ data.news2_text }</Text>
            </View>
            <View style={{ flex: 4, padding:5, borderRadius: 5 }}>
              <Image style={{flex: 1, width: '100%', height: '100%', borderRadius: 5 }} source={{uri: data.news2_img}}></Image>
            </View>
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
  subTitle: {
    flex: 1,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10
  },
})