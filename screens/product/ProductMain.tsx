import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';

export default function ProductMain() {
  return (
    <View style={styles.container}>
      <Text>
        
      </Text>
    </View>
  )
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
})