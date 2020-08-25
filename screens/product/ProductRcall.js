import React, { useEffect, useState } from 'react';
import { StyleSheet, SafeAreaView, View, Text, FlatList, Picker, TouchableOpacity, Image } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import Constants from 'expo-constants';
import DateTimePicker from '@react-native-community/datetimepicker';
import TabView from '../../component/TabView'

export default function ProductRcall({route, navigation}) {
  const { params } = route;
  const { navigate } = navigation;

  const [selectedValue, setSelectedValue] = useState("java");
  const [inBoardValue, onChangeText] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.adContainer}>
        <Text>광고 플랫폼 자리</Text>
      </View>

      <View style={{marginTop: 10, marginBottom: -1, paddingHorizontal: 10}}>
        <TabView 
          firstName="리콜정보"
          secondName="인증정보"
          selected={0}
          changedComName="ProductAuth"
          navigation={navigation}
        />
      </View>

      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          
          <Text style={styles.title}>최근 리콜 정보(국내)</Text>
          <View style={styles.separator}/>
          <View style={{flexDirection: 'row'}}>
            <View style={{flex: 10}}>
              <View>
                <TextInput
                  style={{ flex:7, borderColor: 'gray', borderWidth: 1, marginRight: 10, paddingHorizontal: 10, backgroundColor: '#fff', borderRadius: 5, marginBottom: 5 }}
                  placeholder='상품명, 사업자명 또는 출처를 입력'
                  onChangeText={text => onChangeText(text)}
                  value={inBoardValue}
                />
              </View>
              <View style={{flexDirection: 'row'}}>
                <TextInput
                  style={{ flex:1, borderColor: 'gray', borderWidth: 1, paddingHorizontal: 10, backgroundColor: '#fff', borderRadius: 5, marginBottom: 5 }}
                  placeholder='공표시작일'
                  onChangeText={text => onChangeText(text)}
                  value={inBoardValue}
                />
                <Text style={{ flex: 0.1 }}>~</Text>
                <TextInput
                  style={{ flex:1, borderColor: 'gray', borderWidth: 1, marginRight: 10, paddingHorizontal: 10, backgroundColor: '#fff', borderRadius: 5, marginBottom: 5 }}
                  placeholder='공표종료일'
                  onChangeText={text => onChangeText(text)}
                  value={inBoardValue}
                />
              </View>
            </View>
            <View style={{flex: 2}}>
              <TouchableOpacity style={{height: 65, backgroundColor:'#1398FB', alignItems: 'center', justifyContent: 'center', borderRadius: 5, }}>
                <Text style={{fontWeight:'bold', color: 'white'}}>검색</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{flexDirection: "row"}}>
            <TouchableOpacity style={{flex: 1, height: 90, backgroundColor:'#1398FB', alignItems: 'center', justifyContent: 'center', marginRight: 5, borderRadius: 5}}
              onPress={() => {
                navigate("ProductRcallIn");
              }}
            >
              <Image style={{flex: 1, width: '100%', transform: [{ scale: 1 }]}} source={{uri: 'https://www.consumer.go.kr/site/consumer/upload/recall/RCLL_000000000336450_20200731030001873.PNG'}}></Image>
            </TouchableOpacity>
            <TouchableOpacity style={{flex: 1, height: 90, backgroundColor:'#1398FB', alignItems: 'center', justifyContent: 'center', marginRight: 5, borderRadius: 5}}>
              <Image style={{flex: 1, width: '100%', transform: [{ scale: 1 }]}} source={{uri: 'https://www.consumer.go.kr/site/consumer/upload/recall/RCLL_000000000333259_20200715030002189.png'}}></Image>
            </TouchableOpacity>
            <TouchableOpacity style={{flex: 1, height: 90, backgroundColor:'#1398FB', alignItems: 'center', justifyContent: 'center', marginRight: 5, borderRadius: 5}}>
              <Image style={{flex: 1, width: '100%', transform: [{ scale: 1 }]}} source={{uri: 'https://www.consumer.go.kr/site/consumer/upload/recall/RCLL_000000000333291_20200731030002629.png'}}></Image>
            </TouchableOpacity>
            <TouchableOpacity style={{flex: 1, height: 90, backgroundColor:'#1398FB', alignItems: 'center', justifyContent: 'center', borderRadius: 5}}>
              <Image style={{flex: 1, width: '100%', transform: [{ scale: 1 }]}} source={{uri: 'https://www.consumer.go.kr/site/consumer/upload/recall/RCLL_000000000333233_20200711030001909.jpg'}}></Image>
            </TouchableOpacity>
          </View>

          <ScrollView style={{height: 150, marginTop: 5, borderRadius: 5, borderWidth: 1, borderColor: '#d1d1d1', marginBottom: 20, padding: 10}}>
            <Text>파워보드 내 부품불량으로 인한 전류 증가 현상 발생 및 전기적 과열이 발생할 수 있음</Text>
            <Text>~인증번호: XL090008-16212, XL090008-16192, XL090008-16187, XL090008-17224, XL090008-16216, XL090008-17244, XL090008-17245, XL090008-19295, XL090008-19277, XL090008-18250, XL090008-16197, XL090008-17228, XL090008-17233, XL090008-17249, XL090008-18276</Text>
          </ScrollView>

          <Text style={styles.title}>최근 리콜 정보(국외)</Text>
          <View style={styles.separator}/>

          <View style={{flexDirection: 'row'}}>
            <View style={{flex: 10}}>
              <View style={{flexDirection: 'row'}}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                  <Text style={styles.subTitle}>국가</Text>
                </View>
                <Picker
                  style={{ flex:1, marginRight: 10, borderColor: 'yello', borderWidth: 1, backgroundColor: '#fff', borderRadius: 5}}
                  selectedValue={selectedValue}
                  onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                  mode="dialog">
                  <Picker.Item label="EU" value="code" />
                  <Picker.Item label="일본" value="pname" />
                </Picker>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                  <Text style={styles.subTitle}>분류</Text>
                </View>
                <Picker
                  style={{ flex:1, marginRight: 10, borderColor: 'yello', borderWidth: 1, backgroundColor: '#fff', borderRadius: 5}}
                  selectedValue={selectedValue}
                  onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                  mode="dialog">
                  <Picker.Item label="전체" value="code" />
                </Picker>
              </View>
              <View style={{flexDirection: 'row'}}>
                <TextInput
                  style={{ flex:7, borderColor: 'gray', borderWidth: 1, marginRight: 10, paddingHorizontal: 10, backgroundColor: '#fff', borderRadius: 5, marginBottom: 5 }}
                  placeholder='상품명, 사업자명 또는 출처를 입력'
                  onChangeText={text => onChangeText(text)}
                  value={inBoardValue}
                />
              </View>
            </View>
            <View style={{flex: 2}}>
              <TouchableOpacity style={{height: 65, backgroundColor:'#1398FB', alignItems: 'center', justifyContent: 'center', borderRadius: 5, }}>
                <Text style={{fontWeight:'bold', color: 'white'}}>검색</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{flexDirection: "row"}}>
            <TouchableOpacity style={{flex: 1, height: 90, backgroundColor:'#1398FB', alignItems: 'center', justifyContent: 'center', marginRight: 5, borderRadius: 5}}
              onPress={() => {
                navigate("ProductRcallOut");
              }}>
              <Image style={{flex: 1, width: '100%', transform: [{ scale: 1 }]}} source={{uri: 'https://globalrecalls.oecd.org/ws/getdocument.xqy?uri=http%3A%2F%2FPoliciesApplications.oecd.org%2FGlobalRecalls%2FRecall%2FEN%2FUS%2F20161%2F192154AM.png'}}></Image>
            </TouchableOpacity>
            <TouchableOpacity style={{flex: 1, height: 90, backgroundColor:'#1398FB', alignItems: 'center', justifyContent: 'center', marginRight: 5, borderRadius: 5}}>
              <Image style={{flex: 1, width: '100%', transform: [{ scale: 1 }]}} source={{uri: 'https://globalrecalls.oecd.org/ws/getdocument.xqy?uri=http%3A%2F%2FPoliciesApplications.oecd.org%2FGlobalRecalls%2FRecall%2FEN%2FAU%2FPS1082903%2F1-ALINTA_fairwater_S_02%20(1).jpg'}}></Image>
            </TouchableOpacity>
            <TouchableOpacity style={{flex: 1, height: 90, backgroundColor:'#1398FB', alignItems: 'center', justifyContent: 'center', marginRight: 5, borderRadius: 5}}>
              <Image style={{flex: 1, width: '100%', transform: [{ scale: 1 }]}} source={{uri: 'https://globalrecalls.oecd.org/ws/getdocument.xqy?uri=http%3A%2F%2FPoliciesApplications.oecd.org%2FGlobalRecalls%2FRecall%2FEN%2FAU%2FPS1084502%2F1-BRP%20Harness%20Photo.jpg'}}></Image>
            </TouchableOpacity>
            <TouchableOpacity style={{flex: 1, height: 90, backgroundColor:'#1398FB', alignItems: 'center', justifyContent: 'center', borderRadius: 5}}>
              <Image style={{flex: 1, width: '100%', transform: [{ scale: 1 }]}} source={{uri: 'https://globalrecalls.oecd.org/ws/getdocument.xqy?uri=http%3A%2F%2FPoliciesApplications.oecd.org%2FGlobalRecalls%2FRecall%2FEN%2FAU%2FPS1084732%2F1-pott%20shooter%20cropped%20v%202.jpg(11433995.1).jpg'}}></Image>
            </TouchableOpacity>
          </View>

          <ScrollView style={{height: 150, marginTop: 5, borderRadius: 5, borderWidth: 1, borderColor: '#d1d1d1', marginBottom: 10, padding: 10}}>
            <Text>This recall involves 4-drawer chests with plastic drawer glides sold by Transform under the Essential Home brand and identified as the “Belmont 2.0” model. The chests measure approximately 29.8 inches in height and 27.7 inches in width, and were sold in four colors including black, pine, walnut, and white. The manufacturer’s name, “Kappesberg Moveis,” and the model number “F214” can be found on the instruction manual that came with each chest. Kmart Item Number Mfr. Model Number UPC Color 01832577-9 F214-PRF 7-89515563264-9 Black 01832593-6 F214-MEF 7-89515563273-1 Pine 01832637-1 F214-WAF 7-89515563285-4 Walnut 01833166-0 F214-BRF 7-89515590807-2 White</Text>
          </ScrollView>

        </ScrollView>
      </SafeAreaView>


    </View>
  );
}

const formatDate = (date, time) => {
  return `${date.getDate()}/${date.getMonth() +
    1}/${date.getFullYear()} ${time.getHours()}:${time.getMinutes()}`;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginTop: Constants.statusBarHeight,
    marginBottom: 20,
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
