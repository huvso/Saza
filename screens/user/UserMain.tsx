import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { Ionicons } from '@expo/vector-icons';

export default function UserMain() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>나의 이력</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

      <View style={styles.historyContainer}></View>

      <Text style={styles.title}>설정</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

      <View>
        <Text style={styles.title}>계정 설정</Text>
        <Ionicons name="ios-right"/>
        <Text>사용자 이름, 관심 품목 등을 설정 할 수 있습니다.</Text>
      </View>

      <View>
        <Text style={styles.title}>비밀번호 설정</Text>
        <Ionicons name="ios-right"/>
        <Text>비밀번호를 재설정 할 수 있습니다.</Text>
      </View>

      <View>
        <Text style={styles.title}>이력 관리</Text>
        <Ionicons name="ios-right"/>
        <Text>검색 이력, 제품 확인 이력 등 SAZA앱 사용 이력에 대한 모든 정보를 삭제, 수정 할 수 있습니다.</Text>
      </View>

      <View>
        <Text style={styles.title}>앱 관리</Text>
        <Ionicons name="ios-right"/>
        <Text>첫 페이지, 앱의 테마 등을 설정 할 수 있습니다.</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
    paddingVertical: 10
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
  },
  historyContainer: {
    flex: 1,
    height: 1
  },
  depthCon: {
    marginBottom: 10
  }
});