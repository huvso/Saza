import React, { useEffect, useState } from 'react';
import { StyleSheet, SafeAreaView, View, Text, Picker, FlatList, TextInput, Image } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Constants from 'expo-constants';
import TabView from '../../component/TabView'

export default function ProductRcallIn({route, navigation}) {
  return(
    <View style={styles.container}>
      <View style={styles.adContainer}>
        <Text>광고 플랫폼 자리</Text>
      </View>
      <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.title}>리콜대상 상품정보</Text>
        <View style={styles.separator}/>

        <View style={{flex: 1, flexDirection: 'row'}}>
          <Text style={styles.subTitle}>상품명</Text>
          <Text style={{flex: 1}}>텔레비전수상기</Text>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Text style={styles.subTitle}>사업자명</Text>
          <Text style={{flex: 1}}>LG전자(주)</Text>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Text style={styles.subTitle}>제조사</Text>
          <Text style={{flex: 1}}>LG전자(주)</Text>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Text style={styles.subTitle}>모델명</Text>
          <Text style={{flex: 1}}>OLED65E6, OLED65G6, OLED77G6, OLED65B7, OLED65C7, OLED65E7, OLED65G7, OLED65W7, OLED77G7, OLED77W7, OLED65G8, OLED65W8, OLED77C8, OLED77W8, OLED65W9, OLED77B9, OLED77C9, OLED77W9</Text>
        </View>
        <View style={{flex: 1, flexDirection: 'row', marginBottom: 20}}>
          <Text style={styles.subTitle}>상품 이미지</Text>
          <Image style={{flex: 1, width: '90%', height: 150, transform: [{ scale: 1 }]}} source={{uri: 'https://www.consumer.go.kr/site/consumer/upload/recall/RCLL_000000000336450_20200731030002140.PNG'}}></Image>
        </View>

        <Text style={styles.title}>리콜 이유</Text>
        <View style={styles.separator}/>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Text style={styles.subTitle}>리콜구분</Text>
          <Text style={{flex: 1}}>기타</Text>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Text style={styles.subTitle}>리콜공표기간</Text>
          <Text style={{flex: 1}}>2020.07.24 ~</Text>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Text style={styles.subTitle}>출처</Text>
          <Text style={{flex: 1}}>국가기술표준원</Text>
        </View>
        <View style={{flex: 1, flexDirection: 'row', height: 80}}>
          <Text style={styles.subTitle}>위해원인 및 결과</Text>
          <Text style={{flex: 1}}>파워보드 내 부품불량으로 인한 전류 증가 현상 발생 및 전기적 과열이 발생할 수 있음</Text>
        </View>

        <Text style={styles.title}>소비자 유의사항</Text>
        <View style={styles.separator}/>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Text style={styles.subTitle}>소비자 행동요령</Text>
          <Text style={{flex: 1}}>교환,개선조치</Text>
        </View>

        <Text style={styles.title}>리콜방법</Text>
        <View style={styles.separator}/>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Text style={styles.subTitle}>리콜기간, 리콜장소 및 구체적인 리콜절차</Text>
          <Text style={{flex: 1}}>~
인증번호: XL090008-16212,
XL090008-16192,
XL090008-16187,
XL090008-17224,
XL090008-16216,
XL090008-17244,
XL090008-17245,
XL090008-19295,
XL090008-19277,
XL090008-18250,
XL090008-16197,
XL090008-17228,
XL090008-17233,
XL090008-17249,
XL090008-18276</Text>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Text style={styles.subTitle}>기타 정보</Text>
          <Text style={{flex: 1}}>브랜드명: LG올레드TV</Text>
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