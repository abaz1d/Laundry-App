import { ImageBackground, Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { SplashBackground, Logo } from '../../assets'

const Splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('MainApp');
    }, 1000);
  }, [navigation]);

  return (
    <ImageBackground source={SplashBackground} style={styles.background}>
      <Image source={Logo} style={styles.logo} />
    </ImageBackground>
  )
}

export default Splash

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 186,
    height: 66,
  },
})