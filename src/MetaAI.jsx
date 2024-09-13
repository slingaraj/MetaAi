import { ImageBackground, StyleSheet, Text } from 'react-native'
import React from 'react';
import WANG from './assets/w_bg.png';
import CustumHeader from './components/CustumHeader';

const MetaAI = () => {
  return (
    <ImageBackground resizeMode='cover' source={WANG} style={styles.container}>
      <CustumHeader/>
      <Text>MetaAI</Text>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container:{flex:1}
})
export default MetaAI