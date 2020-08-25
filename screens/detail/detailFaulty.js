import React, {useEffect, useState} from 'react';
import { StyleSheet, SafeAreaView, View, Text, Image } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import Constants from 'expo-constants';
import TrafficSign from '../../component/TrafficSign'

export default function DetailFaulty({ route, navigation }) {
  const { params } = route.params;

  const onPress = () => setCount(prevCount => prevCount + 1);
  const { navigate } = navigation;

  const [product, setProductData] = useState([]);

  useEffect(() => {
    fetch(`https://raw.githubusercontent.com/huvso/json/master/01product/${params}.json`)
    .then((response) => response.json())
    .then((json) => setProductData(json))
    .catch((error) => console.error(error));
  }, []);

  const [faulty, setFaultyData] = useState([]);
  
  useEffect(() => {
    fetch(`https://raw.githubusercontent.com/huvso/json/master/04failure/${params}.json`)
    .then((response) => response.json())
    .then((json) => setFaultyData(json))
    .catch((error) => console.error(error));
  }, []);

  console.log(faulty);
  const StatusMsg = ({ fail_grade }) => {
    let bgColor = ''
    let text =''
    let el = ''
    if (fail_grade === 1) {
      bgColor = '#3ae627'
      text = '안심하고 구매해도 좋은 제품입니다.'
    } else if (fail_grade === 2) {
      bgColor = '#FCBC25'
      text = '인증 정보가 없거나 \n유사 제품군 또는 제조사에서 리콜이 많습니다.'
    } else {
      bgColor = '#F2304A'
      text = '해당제품을 구매하지 않는 걸 추천드립니다.'
    }

    el = <View style={{ 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: 60, 
      borderRadius: 5,
      backgroundColor: bgColor,
      marginTop: 10}}>
      <Text style={{color: 'white', fontWeight: 'bold', fontSize: 16}}>{text}</Text>
    </View>

    if (fail_grade === 1 || fail_grade === 2 || fail_grade === 3 ) {
      return (
        <View style={{ 
          justifyContent: 'center', 
          alignItems: 'center', 
          height: 60, 
          borderRadius: 5,
          backgroundColor: bgColor,
          marginTop: 10}}>
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 16}}>{text}</Text>
        </View>
      )
    } else {
      return (
        <View></View>
      )
    }
  }

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
        <View style={{flex: 1, height: '100%', justifyContent:'center', alignItems:'center'}}>
          <TouchableOpacity style={{alignSelf: 'stretch', justifyContent:'center', alignItems:'center'}}
            onPress={() => {
              navigate("DetailCompany", {
                params: params
              });
            }}>
            <Text style={{fontWeight: 'bold', fontSize: 16}}>제조사</Text>
            <Text style={{fontWeight: 'bold', fontSize: 16}}>정보</Text>
            <TrafficSign grade={product.com_grade}/>
          </TouchableOpacity>
        </View>
        <View style={{flex: 1, height: '100%', justifyContent:'center', alignItems:'center', backgroundColor: '#1398FB'}}>
          <TouchableOpacity style={{alignSelf: 'stretch', justifyContent:'center', alignItems:'center'}}
            onPress={() => {
              navigate("DetailFaulty", {
                params: params
              });
            }}>
            <Text style={{fontWeight: 'bold', fontSize: 16, color: '#fff'}}>불량</Text>
            <Text style={{fontWeight: 'bold', fontSize: 16, color: '#fff'}}>정보</Text>
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
      
      <View style={{paddingHorizontal: 10}}>
        <StatusMsg fail_grade={product.fail_grade}></StatusMsg>
      </View>
      
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.innerContainer}>
          
          <Text style={styles.title}>인증 정보</Text>
          <View style={styles.separator}/>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={{flex: 1, height: 80}}>
              <Image style={{flex: 1, width: '70%', height: '70%', transform: [{ scale: 0.9 }]}} source={{uri: 'https://raw.githubusercontent.com/huvso/json/master/dream.png'}}></Image>
            </View>
            <View style={{flex: 1}}>

            </View>
            <View style={{flex: 1}}>

            </View>
            <View style={{flex: 1}}>

            </View>
          </View>

          <Text style={styles.title}>
            유사 불량 사례
            <Text style={{color: '#c9c9c9', fontSize: 14}}>({faulty.country}-{faulty.category})</Text>
          </Text>
          <View style={styles.separator}/>
          <View style={{height: 160, borderColor: '#c9c9c9', borderWidth: 1, borderRadius: 5, marginBottom: 10, justifyContent: 'center', alignItems: 'center'}}>
            <Ionicons name="ios-happy" size={90} color={'#e0e0e0'}></Ionicons>
            <Text style={{fontWeight: 'bold', fontSize: 20, color: '#e0e0e0'}}>
              유사 사례가 없습니다.
            </Text>
          </View>

          <Text style={styles.title}>
            유사 불량 사례
            <Text style={{color: '#c9c9c9', fontSize: 14}}>({faulty.company})</Text>
          </Text>
          <View style={styles.separator}/>
          <View style={{height: 160, borderColor: '#c9c9c9', borderWidth: 1, borderRadius: 5, marginBottom: 10, justifyContent: 'center', alignItems: 'center'}}>
            <Ionicons name="ios-happy" size={90} color={'#e0e0e0'}></Ionicons>
            <Text style={{fontWeight: 'bold', fontSize: 20, color: '#e0e0e0'}}>
              유사 사례가 없습니다.
            </Text>
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
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1398FB'
  },
  separator: {
    marginVertical: 10,
    height: 1,
    width: '100%',
    backgroundColor: "#eee"
  },
})