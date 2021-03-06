import React, {useEffect, useState} from 'react';
import { StyleSheet, SafeAreaView, View, Text, Image, FlatList } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import Constants from 'expo-constants';
import TrafficSign from '../../component/TrafficSign'


export default function DetailSafe({route, navigation}) {
  const { params } = route.params;
  const { navigate } = navigation;

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://raw.githubusercontent.com/huvso/json/master/05safe/${params}.json`)
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

  const DATA = data.list

  const Item = ({ category, review, star_point, emotion, url }) => (
    <View style={{flex: 1, flexDirection: 'row', borderBottomColor: '#bdbdbd', borderBottomWidth: 1, paddingHorizontal: 10}}>
      <View style={{flex: 1.5, justifyContent:'center', alignItems:'center', height: 70}}>
        <Text>{category}</Text>
      </View>
      <View style={{flex: 4, justifyContent:'center', height: 70}}>
        <Text style={{fontSize:10}}>{review}</Text>
      </View>
      <View style={{flex: 1.5, justifyContent:'center', alignItems:'center', height: 70}}>
        <Text><Ionicons name="ios-star" size={18} color={'red'} /></Text>
        <Text>{star_point}/5.0</Text>
      </View>
      <View style={{flex: 1, justifyContent:'center', alignItems:'center', height: 70}}>
        <Text>{emotion}</Text>
      </View>
      <View style={{flex: 1, justifyContent:'center', alignItems:'center', height: 70}}>
          <Text style={{fontWeight: 'bold'}}>
            <Ionicons name="ios-link" size={18} color={'black'} />
          </Text>
      </View>
    </View>
  );

  const renderItem = ({ item }) => (
    <Item 
      category={item.category}
      review={item.review}
      star_point={item.star_point}
      emotion={item.emotion}
      url={item.url}
     />
  );

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
        <View style={{flex: 1, height: '100%', justifyContent:'center', alignItems:'center', backgroundColor: '#1398FB'}}>
          <TouchableOpacity style={{alignSelf: 'stretch', justifyContent:'center', alignItems:'center'}}
            onPress={() => {
              navigate("DetailSafe", {
                params: params
              });
            }}>
            <Text style={{fontWeight: 'bold', fontSize: 16, color: '#fff'}}>안전</Text>
            <Text style={{fontWeight: 'bold', fontSize: 16, color: '#fff'}}>정보</Text>
            <Text style={{fontSize: 10}} ><Ionicons name="ios-star" size={10} color={'#ffd52b'} /> { product.star_point } </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{flexDirection: 'row', borderBottomColor: '#bdbdbd', borderBottomWidth: 1, paddingHorizontal: 10}}>
        <View style={{flex: 1.5, justifyContent:'center', alignItems:'center', height: 40}}>
          <Text style={{fontWeight: 'bold', fontSize: 18}}>구분</Text>
        </View>
        <View style={{flex: 4, justifyContent:'center', alignItems:'center', height: 40}}>
          <Text style={{fontWeight: 'bold', fontSize: 18}}>리뷰</Text>
        </View>
        <View style={{flex: 1.5, justifyContent:'center', alignItems:'center', height: 40}}>
          <Text style={{fontWeight: 'bold', fontSize: 18}}>별점</Text>
        </View>
        <View style={{flex: 1, justifyContent:'center', alignItems:'center', height: 40}}>
          <Text style={{fontWeight: 'bold', fontSize: 18}}>감정</Text>
        </View>
        <View style={{flex: 1, justifyContent:'center', alignItems:'center', height: 40}}>
          <Text style={{fontWeight: 'bold', fontSize: 18}}>
            <Ionicons name="ios-link" size={20} color={'black'} />
          </Text>
        </View>
      </View>

      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={{marginBottom: 25}}
      />
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