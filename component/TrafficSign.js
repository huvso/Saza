import React, {useState, Component} from 'react';
import { StyleSheet, SafeAreaView, View, Text, Image } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export default class TrafficSign extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    let el;
    console.log(this.props.grade)
    if (this.props.grade === 3) {
      el= <View style={{flexDirection:'row'}}>
        <Text style={{fontSize: 10, color: '#F2304A', marginHorizontal: 2}}>●</Text>
        <Text style={{fontSize: 10, color: '#FCBC25', marginHorizontal: 2}}>○</Text>
        <Text style={{fontSize: 10, color: '#6BFE24', marginHorizontal: 2}}>○</Text>
      </View>
    } else if (this.props.grade === 2) {
      el= <View style={{flexDirection:'row'}}>
        <Text style={{fontSize: 10, color: '#F2304A', marginHorizontal: 2}}>○</Text>
        <Text style={{fontSize: 10, color: '#FCBC25', marginHorizontal: 2}}>●</Text>
        <Text style={{fontSize: 10, color: '#6BFE24', marginHorizontal: 2}}>v</Text>
      </View>
    } else {
      el= <View style={{flexDirection:'row'}}>
        <Text style={{fontSize: 10, color: '#F2304A', marginHorizontal: 2}}>○</Text>
        <Text style={{fontSize: 10, color: '#FCBC25', marginHorizontal: 2}}>○</Text>
        <Text style={{fontSize: 10, color: '#6BFE24', marginHorizontal: 2}}>●</Text>
      </View>
      
    }

    return (
      <View>
        {el}
      </View>
    )
  }
}