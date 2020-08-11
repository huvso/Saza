import React, {Component} from 'react';
import { StyleSheet, SafeAreaView, View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import Constants from 'expo-constants';

export default function UserMain() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.title}>나의 이력</Text>
        <View style={styles.separator}/>

        <View style={styles.historyContainer}></View>

        <Text style={styles.title}>설정</Text>
        <View style={styles.separator}/>

        <View style={styles.setContainer}>
          <Text style={styles.subTitle}>
            계정 설정 <Ionicons name="ios-arrow-forward" size={20} color={'#1398FB'} />
          </Text>
          
          <Text style={styles.subText}>
            사용자 이름, 관심 품목 등을 설정 할 수 있습니다.
          </Text>
        </View>

        <View style={styles.setContainer}>
          <Text style={styles.subTitle}>
            비밀번호 설정 <Ionicons name="ios-arrow-forward" size={20} color={'#1398FB'} />
          </Text>
          <Text style={styles.subText}>
            비밀번호를 재설정 할 수 있습니다.
          </Text>
        </View>

        <View style={styles.setContainer}>
          <Text style={styles.subTitle}>
            이력 관리 <Ionicons name="ios-arrow-forward" size={20} color={'#1398FB'} />
          </Text>
          <Text style={styles.subText}>
            검색 이력, 제품 확인 이력 등 SAZA앱 사용 이력에 대한 모든 정보를 삭제, 수정 할 수 있습니다.
          </Text>
        </View>

        <View style={styles.setContainer}>
          <Text style={styles.subTitle}>
            앱 관리 <Ionicons name="ios-arrow-forward" size={20} color={'#1398FB'} />
          </Text>
          <Text style={styles.subText}>
            첫 페이지, 앱의 테마 등을 설정 할 수 있습니다.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

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
    height: 300
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