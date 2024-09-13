import {Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import { Bars3BottomLeftIcon } from "react-native-heroicons/solid";
import { moderateScale } from 'react-native-size-matters';
// import MetaAiLogo from '../assets/logo_s.jpeg'

const CustumHeader = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.subContainer}>
            <TouchableOpacity>
                <Bars3BottomLeftIcon size={moderateScale(20)} color={'#fff'} />
                {/* <Image source={MetaAiLogo} style={styles.logoStyle}/> */}
            </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default CustumHeader;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: 'rgba(20,25,46,1)',
    borderBottomWidth: 0.18,
    borderBottomColor: 'rgba(62,62,63,1)',
  },
  subContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 10,
  },
  logoStyle:{
    width: moderateScale(30),
    height:moderateScale(30)

  }
});
