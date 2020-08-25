import React, {useState, Component} from 'react';
import { StyleSheet, SafeAreaView, View, Text, Image } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export default class TabView extends Component {
  constructor(props){
    super(props);
    this.state={count:0};
  }

  render () {
    const { navigation } = this.props;
    
    let el;
    if (this.props.selected === 0) {
      el = <View style={{flexDirection: "row", marginTop: 2, height: 30}}>
      <TouchableOpacity style={{width: 80, backgroundColor: '#1398FB', borderWidth: 1, borderColor: '#1398FB', justifyContent:'center', alignItems:'center', paddingVertical: 3}}>
        <Text style={{fontWeight: 'bold', fontSize: 14, color:'white'}}>
          {this.props.firstName}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={{width: 80, borderWidth: 1, borderColor: '#1398FB', justifyContent:'center', alignItems:'center', paddingVertical: 3}}
        onPress={() => {
          navigation.navigate(this.props.changedComName, {params: this.props.params})
        }}>
        <Text  style={{fontWeight: 'bold', fontSize: 14, color: '#1398FB'}}>
          {this.props.secondName}
        </Text>
      </TouchableOpacity>
    </View>
    } else {
      el = <View style={{flexDirection: "row", marginTop: 2, height: 30}}>
      <TouchableOpacity style={{width: 80, borderWidth: 1, borderColor: '#1398FB', color: '#1398FB', justifyContent:'center', alignItems:'center', paddingVertical: 3}}
        onPress={() => {
          navigation.navigate(this.props.changedComName, {params: this.props.params})
        }}
        >
        <Text  style={{fontWeight: 'bold', fontSize: 14, color: '#1398FB'}}>
          {this.props.firstName}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={{width: 80, backgroundColor: '#1398FB', borderWidth: 1, borderColor: '#1398FB', justifyContent:'center', alignItems:'center', paddingVertical: 3}}>
        <Text  style={{fontWeight: 'bold', fontSize: 14, color:'white' }}>
          {this.props.secondName}
        </Text>
      </TouchableOpacity>
    </View>
    }

    return (
      <View>
        {el}
      </View>
    );
  }
}

