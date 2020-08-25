import React, { useEffect, useState } from 'react';
import { StyleSheet, SafeAreaView, View, Text, Picker, FlatList, TextInput } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Constants from 'expo-constants';
import TabView from '../../component/TabView'

export default function ProductAuth({route, navigation}) {
  const { params } = route.params;
  const { navigate } = navigation;

  const [selectedValue, setSelectedValue] = useState("java");

  const [mValue, onChangeMText] = useState('');
  const [cValue, onChangeCText] = useState('');
  
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://raw.githubusercontent.com/huvso/json/master/07auth/list.json`)
    .then((response) => response.json())
    .then((json) => setData(json))
    .catch((error) => console.error(error));
  }, []);

  const DATA = data.list

  const Item = ({ no, company, product, isComplete }) => (
    <TouchableOpacity onPress={() => {
      navigate("ProductAuthDetail", {
        params: params
      });
    }}>
      <View style={{flex: 1, flexDirection: 'row', borderBottomColor: '#bdbdbd', borderBottomWidth: 1}}>
        <View style={{flex: 0.5, justifyContent:'center', alignItems:'center', height: 45}}>
          <Text>{no}</Text>
        </View>
        <View style={{flex: 2, justifyContent:'center', alignItems:'center', height: 45}}>
          <Text>{company}</Text>
        </View>
        <View style={{flex: 3, justifyContent:'center', alignItems:'center', height: 45}}>
          <Text>{product}</Text>
        </View>
        <View style={{flex: 1.5, justifyContent:'center', alignItems:'center', height: 45}}>
          <Text>{isComplete}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  const renderItem = ({ item }) => (
    <Item 
      no={item.no}
      company={item.company}
      product={item.product}
      isComplete={item.isComplete}
     />
  );

  return (
    <View style={styles.container}>
      <View style={styles.adContainer}>
        <Text>광고 플랫폼 자리</Text>
      </View>

      <View style={{flex: 1, marginTop: 10, paddingHorizontal: 10}}>
        <TabView 
          firstName="리콜정보"
          secondName="인증정보"
          selected={1}
          changedComName="ProductRcall"
          navigation={navigation}
        />

        <View style={{flexDirection: 'row', justifyContent:'center', alignItems:'center' }}>
          <View style={{flex: 6}}>
            <View style={{flexDirection: 'row', justifyContent:'center', alignItems:'center' }}>
              <Text style={styles.subTitle}>인증제</Text>
              <Picker
                selectedValue={selectedValue}
                style={{ flex: 6, height: 40, width: 150 }}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
              >
                <Picker.Item label="행복드림표지제" value="java" />
              </Picker>
            </View>
            <View style={{flexDirection: 'row', justifyContent:'center', alignItems:'center'}}>
              <Text style={styles.subTitle}>모델명</Text>
              <TextInput
                style={{ flex:6, borderColor: 'gray', borderWidth: 1, marginRight: 10, paddingHorizontal: 10, backgroundColor: '#fff', borderRadius: 5, height: 40 }}
                placeholder='모델명'
                onChangeText={text => onChangeMText(text)}
                value={mValue}
              />
            </View>
            <View style={{flexDirection: 'row', justifyContent:'center', alignItems:'center'}}>
              <Text style={styles.subTitle}>제조사명</Text>
              <TextInput
                style={{ flex:6, borderColor: 'gray', borderWidth: 1, marginRight: 10, paddingHorizontal: 10, backgroundColor: '#fff', borderRadius: 5, height: 40 }}
                placeholder='제조사명'
                onChangeText={text => onChangeCText(text)}
                value={cValue}
              />
            </View>
          </View>
          <View style={{flex: 1}}>

            <TouchableOpacity style={{height: 120, backgroundColor:'#1398FB', alignItems: 'center', justifyContent: 'center', borderRadius: 5, }}>
              <Text style={{fontWeight:'bold', color: 'white'}}>검색</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{flexDirection: 'row', borderBottomColor: '#bdbdbd', borderBottomWidth: 1, marginTop: 20}}>
          <View style={{flex: 0.5, justifyContent:'center', alignItems:'center', height: 40}}>
            <Text style={{fontWeight: 'bold', fontSize: 18}}>번호</Text>
          </View>
          <View style={{flex: 2, justifyContent:'center', alignItems:'center', height: 40}}>
            <Text style={{fontWeight: 'bold', fontSize: 18}}>사업자명</Text>
          </View>
          <View style={{flex: 3, justifyContent:'center', alignItems:'center', height: 40}}>
            <Text style={{fontWeight: 'bold', fontSize: 18}}>상품명</Text>
          </View>
          <View style={{flex: 1.5, justifyContent:'center', alignItems:'center', height: 40}}>
            <Text style={{fontWeight: 'bold', fontSize: 18}}>발급상태</Text>
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
    paddingHorizontal: 20,
    paddingVertical: 5,
    marginTop: Constants.statusBarHeight,
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
  historyContainer: {
    flex: 1,
  },
  setContainer: {
    marginBottom: 30
  },
  subTitle: {
    flex: 2,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10
  },
  subText: {
    fontSize: 14,
    color: '#9A9898'
  }
})
