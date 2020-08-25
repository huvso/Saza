import React, { useEffect, useState } from 'react';
import { StyleSheet, SafeAreaView, View, Text, Picker, FlatList, Image } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Constants from 'expo-constants';
import TabView from '../../component/TabView'

export default function ProductRcallOut({route, navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.adContainer}>
        <Text>광고 플랫폼 자리</Text>
      </View>
      <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.title}>Recall details</Text>
        <View style={styles.separator}/>

        <View style={{flex: 1, flexDirection: 'row'}}>
          <Text style={styles.subTitle}>Date</Text>
          <Text style={{flex: 1}}>2020-08-11</Text>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Text style={styles.subTitle}>Jurisdiction of recall</Text>
          <Text style={{flex: 1}}>United States</Text>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Text style={styles.subTitle}>Original alert</Text>
          <Text style={{flex: 1}}>https://www.cpsc.gov/Recalls/2020/Transform-Recalls-Four-Drawer-Chests-Due-to-Tip-Over-and-Entrapment-Hazards-Sold-Exclusively-at-Kmart</Text>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Text style={styles.subTitle}>Economy</Text>
          <Text style={{flex: 1}}>Brazil</Text>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Text style={styles.subTitle}>Manufacturer name</Text>
          <Text style={{flex: 1}}>Brazil</Text>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Text style={styles.subTitle}>Manufacturer website</Text>
          <Text style={{flex: 1}}>-</Text>
        </View>
        <View style={{flex: 1, flexDirection: 'row', marginBottom: 20}}>
          <Text style={styles.subTitle}>Image</Text>
          <Image style={{flex: 1, width: '90%', height: 150, transform: [{ scale: 1 }]}} source={{uri: 'https://globalrecalls.oecd.org/ws/getdocument.xqy?uri=http%3A%2F%2FPoliciesApplications.oecd.org%2FGlobalRecalls%2FRecall%2FEN%2FUS%2F20161%2F192154AM.png'}}></Image>  
        </View>

        <Text style={styles.title}>Product details</Text>
        <View style={styles.separator}/>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Text style={styles.subTitle}>Type</Text>
          <Text style={{flex: 1}}>-</Text>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Text style={styles.subTitle}>Name</Text>
          <Text style={{flex: 1}}>Essential Home Belmont 2.0 four-drawer chests</Text>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Text style={styles.subTitle}>Description</Text>
          <Text style={{flex: 1}}>This recall involves 4-drawer chests with plastic drawer glides sold by Transform under the Essential Home brand and identified as the “Belmont 2.0” model. The chests measure approximately 29.8 inches in height and 27.7 inches in width, and were sold in four colors including black, pine, walnut, and white. The manufacturer’s name, “Kappesberg Moveis,” and the model number “F214” can be found on the instruction manual that came with each chest. Kmart Item Number Mfr. Model Number UPC Color 01832577-9 F214-PRF 7-89515563264-9 Black 01832593-6 F214-MEF 7-89515563273-1 Pine 01832637-1 F214-WAF 7-89515563285-4 Walnut 01833166-0 F214-BRF 7-89515590807-2 White</Text>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Text style={styles.subTitle}>Model & Volume</Text>
          <Text style={{flex: 1}}>-</Text>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Text style={styles.subTitle}>Hazard</Text>
          <Text style={{flex: 1}}>The recalled chests are unstable and can tip over if not anchored to the wall, posing serious tip-over and entrapment hazards that can result in death or injuries to children.</Text>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Text style={styles.subTitle}>Injury</Text>
          <Text style={{flex: 1}}>None reported.</Text>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Text style={styles.subTitle}>Action</Text>
          <Text style={{flex: 1}}>Consumers should immediately stop using the recalled chests if they are not properly anchored to a wall and place them in an area that children cannot access. For chests purchased on or after February 11, 2019, contact Transform to receive a free anchoring kit and upon request, a one-time, free in-home installation of the wall anchor kit. For chests purchased before February 11, 2019, contact Transform to receive a free anchoring kit.</Text>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Text style={styles.subTitle}>Units</Text>
          <Text style={{flex: 1}}>About 19,900</Text>
        </View>

        <Text style={styles.title}>Distribution/Importer details</Text>
        <View style={styles.separator}/>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Text style={styles.subTitle}>Name</Text>
          <Text style={{flex: 1}}>Sears Holdings Management Corp., of Hoffman Estates, Ill. ; Transform SR Holding Management LLC, of Hoffman Estates, Ill. (on or after February 11, 2019), Sears Holdings Management Corporation, of Hoffman Estates, Ill. (before February 11, 2019)</Text>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Text style={styles.subTitle}>Website</Text>
          <Text style={{flex: 1}}>-</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  adContainer: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    marginTop: Constants.statusBarHeight,
    backgroundColor: '#fff',
    height: 150,
    backgroundColor: '#e4e6e8',
    justifyContent:'center',
    alignItems:'center'
  },
  scrollView: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  innerContainer: {
    paddingHorizontal: 10,
    paddingVertical: 5,
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
  },
  setContainer: {
    marginBottom: 30
  },
  subTitle: {
    flex: 0.5,
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