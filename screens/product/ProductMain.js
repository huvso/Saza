import React, { useEffect, useState } from 'react';
import { StyleSheet, SafeAreaView, View, Text, FlatList } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Constants from 'expo-constants';

export default function ProductMain() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/huvso/json/master/01product/8809299237669.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.innerContainer}>
        <Text>{data.total_weight}</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  innerContainer: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    marginTop: Constants.statusBarHeight,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
})
