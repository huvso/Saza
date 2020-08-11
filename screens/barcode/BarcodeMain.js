import React, {useState} from 'react';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { StyleSheet, SafeAreaView, View, Text, Dimensions, Picker, Button } from 'react-native';
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import Constants from 'expo-constants';

export default function BarcodeMain() {
  const [hasPermission, setHasPermission] = useState(null);
  useState(true);

  const [selectedValue, setSelectedValue] = useState("code");
  const [value, onChangeText] = useState('');
  const navigation = useNavigation();

  const handleBarCodeScanned = (result) => {
    let { type, data } = result

    if (type === 32) {
      navigation.navigate('DetailMain', {
        params: data
      })
    }
  };

  return (
    <View style={{flex: 1, flexDirection: 'column', marginTop: Constants.statusBarHeight}}>
      
      <BarCodeScanner
        barCodeTypes={['ean13']}
        onBarCodeScanned={handleBarCodeScanned}
        style={{flex: 16, backgroundColor:'black', justifyContent:'center', alignItems:'center', height:'100%' }}
      > 
        <View style={{justifyContent:'center',alignItems:'center',alignSelf:'center', position:'absolute'}}>
          <View
            style={{
              flex: 1,flexDirection:'row', justifyContent:'center', alignItems:'center',
              height: 250,
              width: 250,
              borderColor: 'rgba(255, 255, 255, .5)',
              borderWidth: 15
            }}>
            <Ionicons name="ios-add" size={90} color={'rgba(255, 255, 255, .5)'} />
          </View>
        </View>
      </BarCodeScanner>
      <View style={{justifyContent:'center',alignItems:'center',alignSelf:'center', position:'absolute', width: '100%'}}>
        <View style={{flex: 1, flexDirection: 'row', paddingHorizontal: 10, paddingVertical: 10}}>
          <Picker
            style={{ flex:3, marginRight: 10, borderColor: 'yello', borderWidth: 1, backgroundColor: '#fff', borderRadius: 5}}
            selectedValue={selectedValue}
            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            mode="dialog">
            <Picker.Item label="코드" value="code" />
            <Picker.Item label="제품명" value="pname" />
          </Picker>
          <TextInput
            style={{ flex:7, borderColor: 'gray', borderWidth: 1, marginRight: 10, paddingHorizontal: 10, backgroundColor: '#fff', borderRadius: 5 }}
            placeholder='바코드 인식 불가 시 입력해주세요.'
            onChangeText={text => onChangeText(text)}
            value={value}
          />
          <View style={{flex: 3, height: '100%'}}>
            <TouchableOpacity style={{flex:1, height: '100%', backgroundColor: '#1398FB', alignItems: 'center', justifyContent: 'center', borderRadius: 5}}>
              <Text style={styles.buttonText}>검색</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height
  },
  innerContainer: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    marginTop: 45,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  barCodeReader: {
    flex: 1, 
    backgroundColor:'white', 
    justifyContent:'center', 
    alignItems:'center', 
    height:'100%'
  },
  scanner: {
    flex: 1,
    flexDirection:'row', 
    justifyContent:'center', 
    alignItems:'center',
    height: 250,
    width: 250,
    borderColor: 'rgba(255, 255, 255, .5)',
    borderWidth: 15
  }
})