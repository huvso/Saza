import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, Picker } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { TouchableOpacity, TextInput, BaseButton } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

export default function BarcodeMain() {
  const [hasPermission, setHasPermission] = useState(null);
  useState(true);

  const [selectedValue, setSelectedValue] = useState("code");
  const [value, onChangeText] = useState('');

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = (result: object) => {
    let { type, data } = result

    if (type === 32) {
      alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    }
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

    return (
    <View style={{flex: 1, flexDirection: 'column'}}>
      <View style={{flex: 1, flexDirection: 'row', backgroundColor: 'white', paddingHorizontal: 10, paddingVertical: 10}}>
        <Picker
          style={{ flex:4, marginRight: 10 }}
          selectedValue={selectedValue}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
          mode="dropdown">
          <Picker.Item label="코드" value="code" />
          <Picker.Item label="제품명" value="pname" />
        </Picker>
        <TextInput
          style={{ flex:7, height: 40, borderColor: 'gray', borderWidth: 1, marginRight: 10, paddingHorizontal: 10 }}
          placeholder='바코드 인식 불가 시 입력해주세요.'
          onChangeText={text => onChangeText(text)}
          value={value}
        />
        <Button
          title="확인"
          accessibilityLabel="Learn more about this purple button"
          onPress={alert('미구현')}
        />
      </View>
      <BarCodeScanner 
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

    </View>
  )
}


  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  }
})