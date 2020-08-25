import React, {useEffect, useState} from 'react';
import { StyleSheet, SafeAreaView, View, Text, FlatList } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import Constants from 'expo-constants';
import TabView from '../../component/TabView'
import TrafficSign from '../../component/TrafficSign'

export default function DetailPriceOn({ route, navigation }) {
  const { params } = route.params;
  const { navigate } = navigation;

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://raw.githubusercontent.com/huvso/json/master/02price/${params}-on.json`)
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
  
  const Item = ({ seller, price, delivery, pd }) => (
    <View style={{flex: 1, flexDirection: 'row', borderBottomColor: '#bdbdbd', borderBottomWidth: 1}}>
      <View style={{flex: 2, justifyContent:'center', alignItems:'center', height: 45}}>
        <Text>{seller}</Text>
      </View>
      <View style={{flex: 2, justifyContent:'center', alignItems:'center', height: 45}}>
        <Text>{price}</Text>
      </View>
      <View style={{flex: 2, justifyContent:'center', alignItems:'center', height: 45}}>
        <Text>{delivery}</Text>
      </View>
      <View style={{flex: 2, justifyContent:'center', alignItems:'center', height: 45}}>
        <Text>{pd}</Text>
      </View>
      <View style={{flex: 1, justifyContent:'center', alignItems:'center', height: 45}}>
          <Text style={{fontWeight: 'bold'}}>
            <Ionicons name="ios-link" size={18} color={'black'} />
          </Text>
      </View>
    </View>
  );

  const renderItem = ({ item }) => (
    <Item 
      seller={item.seller}
      price={item.price}
      delivery={item.delivery}
      pd={item.pd}
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
        <View style={{flex: 1, height: '100%', justifyContent:'center', alignItems:'center', backgroundColor: '#1398FB'}}>
          <TouchableOpacity style={{alignSelf: 'stretch', justifyContent:'center', alignItems:'center'}}
            onPress={() => {
              navigate("DetailPriceOff", {
                params: params
              });
            }}
          >
            <Text style={{fontWeight: 'bold', fontSize: 16, color: '#fff'}}>가격</Text>
            <Text style={{fontWeight: 'bold', fontSize: 16, color: '#fff'}}>정보</Text>
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
            <TrafficSign grade={product.com_grade}/>
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
      
      
      <View style={{flex: 1, paddingHorizontal: 20, backgroundColor: 'white'}}>
        <View style={{marginTop: 5}}>
          <TabView
            firstName="Off-Line"
            secondName="On-Line"
            selected={1}
            changedComName="DetailPriceOff"
            params={params}
            navigation={navigation}
          />
        </View>

        <View style={{flexDirection: 'row', height: 80, backgroundColor: 'white' }}>
          <View style={{flex: 1, justifyContent:'center', alignItems:'center', backgroundColor: '#fff'}}>
            <Text style={{fontSize: 30, fontWeight: 'bold'}}>최고</Text>
            <Text style={{fontSize: 15, fontWeight: 'bold', color: 'red'}}>{data.max}</Text>
          </View>
          <View style={{flex: 1, justifyContent:'center', alignItems:'center'}}>
            <Text style={{fontSize: 30, fontWeight: 'bold'}}>평균</Text>
            <Text style={{fontSize: 15, fontWeight: 'bold', color: '#6e6e6e'}}>{data.avg}</Text>
          </View>
          <View style={{flex: 1, justifyContent:'center', alignItems:'center'}}>
            <Text style={{fontSize: 30, fontWeight: 'bold'}}>최저</Text>
            <Text style={{fontSize: 15, fontWeight: 'bold', color: '#1398FB'}}>{data.min}</Text>
          </View>
        </View>

        <View style={{flexDirection: 'row', borderBottomColor: '#bdbdbd', borderBottomWidth: 1, marginTop: 20}}>
          <View style={{flex: 2, justifyContent:'center', alignItems:'center', height: 40}}>
            <Text style={{fontWeight: 'bold', fontSize: 18}}>판매처</Text>
          </View>
          <View style={{flex: 2, justifyContent:'center', alignItems:'center', height: 40}}>
            <Text style={{fontWeight: 'bold', fontSize: 18}}>가격</Text>
          </View>
          <View style={{flex: 2, justifyContent:'center', alignItems:'center', height: 40}}>
            <Text style={{fontWeight: 'bold', fontSize: 18}}>배송비</Text>
          </View>
          <View style={{flex: 2, justifyContent:'center', alignItems:'center', height: 40}}>
            <Text style={{fontWeight: 'bold', fontSize: 14}}>가격+배송비</Text>
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
              style={{marginBottom: 10}}
            />
      </View>
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