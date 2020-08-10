import React, { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView, Button, Picker } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';

export default function ProductMain() {
  const [selectedValue, setSelectedValue] = useState("code");
  const [value, onChangeText] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.title}>최근 리콜 정보(국내)</Text>    
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <View style={{flex: 1, flexDirection: 'row', backgroundColor: 'white', marginBottom: 20}}>
          <View style={{flex: 5, flexDirection: 'column', backgroundColor: 'white'}}>
            <View style={{flex: 1, flexDirection: 'row', backgroundColor: 'white'}}>
              <Picker
                style={{ flex:4, borderRadius: 5, borderColor: 'gray', borderWidth: 1 }}
                selectedValue={selectedValue}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                mode="dropdown">
                <Picker.Item label="전체" value="code" />
                <Picker.Item label="하하" value="pname" />
              </Picker>

              <TextInput
                style={{ flex:7, height: 40, borderRadius: 5, borderColor: 'gray', borderWidth: 1, paddingHorizontal: 10}}
                placeholder='상품명, 사업자명 또는 출처를 입력'
                onChangeText={text => onChangeText(text)}
                value={value}
              />
            </View>
            <View style={{flex: 1, flexDirection: 'row', backgroundColor: 'white'}}>
              <TextInput
                style={{ flex:7, height: 40, borderRadius: 5, borderColor: 'gray', borderWidth: 1, paddingHorizontal: 10 }}
                placeholder='공표 시작일'
                onChangeText={text => onChangeText(text)}
                value={value}
              />
              <Text style={{marginHorizontal: 5}}>~</Text>
              <TextInput
                style={{ flex:7, height: 40, borderRadius: 5, borderColor: 'gray', borderWidth: 1, paddingHorizontal: 10 }}
                placeholder='공표 종료일'
                onChangeText={text => onChangeText(text)}
                value={value}
              />
            </View>
          </View>
          <View style={{ flex: 1, marginLeft: 5}}>
            <TouchableOpacity style={{backgroundColor: '#1398FB', height: '100%', width: '100%', alignItems: 'center', justifyContent: 'center', borderRadius: 5}}>
              <Text style={styles.buttonText}>검색</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Text style={styles.title}>최근 리콜 정보(국외)</Text>    
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <View style={{flex: 1, flexDirection: 'row', backgroundColor: 'white', marginBottom: 20}}>
          <View style={{flex: 5, flexDirection: 'column', backgroundColor: 'white'}}>
            <View style={{flex: 1, flexDirection: 'row', backgroundColor: 'white'}}>
              <View style={{flex: 1, flexDirection: 'row', backgroundColor: 'white', justifyContent:'center',alignItems:'center',alignSelf:'center'}}>
                <Text style={styles.subTitle}>국가</Text>
              </View>
              <Picker
                style={{ flex:3, borderRadius: 5, borderColor: 'gray', borderWidth: 1, backgroundColor:'red' }}
                selectedValue={selectedValue}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                mode="dropdown">
                <Picker.Item label="전체" value="code" />
                <Picker.Item label="하하" value="pname" />
              </Picker>

              <View style={{flex: 1, flexDirection: 'row', backgroundColor: 'white', justifyContent:'center',alignItems:'center',alignSelf:'center'}}>
                <Text style={styles.subTitle}>분류</Text>
              </View>
              <Picker
                style={{ flex:3, borderRadius: 5, borderColor: 'gray', borderWidth: 1, backgroundColor:'red' }}
                selectedValue={selectedValue}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                mode="dropdown">
                <Picker.Item label="전체" value="code" />
                <Picker.Item label="하하" value="pname" />
              </Picker>
            </View>
            <View style={{flex: 1, flexDirection: 'row', backgroundColor: 'white'}}>
              <TextInput
                style={{ flex:7, height: 40, borderRadius: 5, borderColor: 'gray', borderWidth: 1, paddingHorizontal: 10 }}
                placeholder='공표 시작일'
                onChangeText={text => onChangeText(text)}
                value={value}
              />
              <Text style={{marginHorizontal: 5}}>~</Text>
              <TextInput
                style={{ flex:7, height: 40, borderRadius: 5, borderColor: 'gray', borderWidth: 1, paddingHorizontal: 10 }}
                placeholder='공표 종료일'
                onChangeText={text => onChangeText(text)}
                value={value}
              />
            </View>
          </View>
          <View style={{ flex: 1, marginLeft: 5}}>
            <TouchableOpacity style={{backgroundColor: '#1398FB', height: '100%', width: '100%', alignItems: 'center', justifyContent: 'center', borderRadius: 5}}>
              <Text style={styles.buttonText}>검색</Text>
            </TouchableOpacity>
          </View>
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
    paddingVertical: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1398FB'
  },
  separator: {
    marginVertical: 10,
    height: 1,
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold'
  },
  subTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10
  },
})