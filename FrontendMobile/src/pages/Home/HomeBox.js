import { ImageBackground, StyleSheet, Text, View, Dimensions, Image } from 'react-native'
import React from 'react'
import { ImageHeader, Avatar } from '../../assets/images/images'
import { SearchBox } from '../../components/components'

const Home = () => {
  return (
    <View style={styles.page}>
      <ImageBackground source={ImageHeader} style={styles.header}>
        <Image source={Avatar} style={styles.avatar} />
        <View style={styles.greet}>
          <Text style={styles.hai}>Hai, <Text style={styles.username}>Kamu</Text></Text>
          <Text style={styles.datang}>Selamat Datang</Text>
        </View>
      </ImageBackground>
      <SearchBox />
    </View>
  )
}

export default Home

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  header: {
    width: windowWidth,
    height: windowHeight * 0.3,
    paddingHorizontal: 30,
    paddingTop: 30,
  },
  avatar: {
    width: windowWidth * 0.12,
    height: windowHeight * 0.061,
  },
  greet: {
    marginTop: 20,
  },
  hai: {
    fontSize: 20,
    color: '#000000',
    fontFamily: 'TitilliumWeb-Regular',
  },
  username: {
    fontSize: 24,
    color: '#000000',
    fontFamily: 'TitilliumWeb-SemiBold',
  },
  datang: {
    fontSize: 30,
    color: '#000000',
    fontFamily: 'TitilliumWeb-Bold',
  },
})