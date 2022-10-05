import { ImageBackground, StyleSheet, View, Dimensions, Image, ScrollView, Text } from 'react-native'
import React, { useState } from 'react'
import { ImagePesananHeader } from '../../assets'
import { ButtonIcon, PesananAktif, SearchBox, LayananHeader, TopNavBox } from '../../components'
import PesananTab from '../../components/PesananHeader/PesananTab'

const CuciKomplit = () => {
  const [selectGender, setSelectGender] = useState('');
  return (
    <View style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground source={ImagePesananHeader} style={styles.header}>
          <LayananHeader namaLayanan={'Cuci Komplit'} />
        </ImageBackground>
        <PesananTab selectGender={selectGender} setSelectGender={setSelectGender} />
        {/* {selectGender === "Men's Wear" ? (
          <Text>"Men's Wear"</Text>
        ) : selectGender === "Women's Wear" ? (
          <Text>"Women's Wear"</Text>
        ) : (
          <Text>"Household & Accessories"</Text>
        )} */}


      </ScrollView>
    </View>
  )
}

export default CuciKomplit

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    width: windowWidth,
    height: windowHeight * 0.17,
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
  layanan: {
    marginLeft: 5,
    paddingTop: 5,
  },
  iconLayanan: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginHorizontal: 30,
    marginTop: 10,
  },
  pesananAktif: {
    flex: 1,
    marginTop: 30,
    marginBottom: 30,
  }
})