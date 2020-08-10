import * as React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { Ionicons } from '@expo/vector-icons';
import Constants from 'expo-constants';
import { ScrollView } from 'react-native-gesture-handler';

export default function UserMain() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.title}>나의 이력</Text>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

        <View style={styles.historyContainer}></View>

        <Text style={styles.title}>설정</Text>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

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

  scrollContainer: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  setContainer: {
    marginBottom: 30
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1398FB'
  },
  subTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10
  },
  separator: {
    marginVertical: 10,
    height: 1,
    width: '100%',
  },
  historyContainer: {
    flex: 1,
    height: 300
  },
  depthCon: {
    marginBottom: 10
  },
  subText: {
    color: '#9A9898'
  }
});