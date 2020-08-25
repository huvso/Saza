import React, {useEffect, useState} from 'react';
import { StyleSheet, SafeAreaView, View, Text, FlatList, Image } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import Constants from 'expo-constants';
import TabView from '../../component/TabView'
import TrafficSign from '../../component/TrafficSign'

export default function ProductAuthDetail({ route, navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.adContainer}>
        <Text>광고 플랫폼 자리</Text>
      </View>
      <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.title}>표지발급정보</Text>
        <View style={styles.separator}/>

        <View style={{flex: 1, flexDirection: 'row'}}>
          <Text style={styles.subTitle}>발급기관</Text>
          <Text style={{flex: 1}}>공정거래위원회</Text>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Text style={styles.subTitle}>표지명</Text>
          <Text style={{flex: 1}}>행복드림표지</Text>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Text style={styles.subTitle}>발급상태</Text>
          <Text style={{flex: 1}}>발급완료</Text>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Text style={styles.subTitle}>등록표지</Text>
          <Text style={{flex: 1}}></Text>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Text style={styles.subTitle}>상품명</Text>
          <Text style={{flex: 1}}>아임쏘이우리콩전두부 300g</Text>
        </View>
        <View style={{flex: 1, flexDirection: 'row', marginBottom: 20}}>
          <Text style={styles.subTitle}>표지발급일</Text>
          <Text style={{flex: 1}}>2018-04-05</Text>
        </View>

        <Text style={styles.title}>상품정보</Text>
        <View style={styles.separator}/>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Text style={styles.subTitle}>상품명</Text>
          <Text style={{flex: 1}}>아임쏘이우리콩전두부 300g</Text>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Text style={styles.subTitle}>유통표준코드</Text>
          <Text style={{flex: 1}}>8809610960009</Text>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Text style={styles.subTitle}>분류명</Text>
          <Text style={{flex: 1}}>가공및보존처리식품</Text>
        </View>
        <View style={{flex: 1, flexDirection: 'row', height: 80}}>
          <Text style={styles.subTitle}>상품 이미지</Text>
          <Image style={{flex: 1, width: '30%', transform: [{ scale: 1 }]}} source={{uri: 'https://www.consumer.go.kr/site/consumer/upload/sicGoodsImage/PRDT_000000003518459_20181018172158118.jpg'}}></Image>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Text style={styles.subTitle}>원재료명 및 함량</Text>
          <Text style={{flex: 1}}>대두 국산100%, 응고제(트랜스글루타미나아제,염화마그네슘), 정제수, 천일염</Text>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Text style={styles.subTitle}>영양성분</Text>
          <Text style={{flex: 1}}>1회 제공당 함량-1회 제공량 (150g)/총 2회 제공량(300g) ()안의 수치는 1일 영양소가 기준치에 대한 비율임 열량 100kcal / 탄수화물 22g(7%) / 식이섬유 4g/ 당류1g / 단백질 18g(13%) / 지방 3.8g (8%) 포화지방2g(7%) / 트랜스지방 0g / 콜레스테롤 0mg (0%)/ 나트륨 105mg (5%) 칼슘 44mg(6%) / 철 1.1mg (7%) / 비타민 C 0mg(0%) / 비타민A0ugRE (0%</Text>
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
  scrollView: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 20,
    backgroundColor: '#fff',
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
  historyContainer: {
    flex: 1,
  },
  setContainer: {
    marginBottom: 30
  },
  subTitle: {
    flex: 0.5,
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