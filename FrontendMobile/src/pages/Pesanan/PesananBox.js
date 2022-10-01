import { ImageBackground, StyleSheet, Text, View, Dimensions, Image, ScrollView } from 'react-native'
import React from 'react'
import { ImagePesananHeader, Avatar } from '../../assets'
import { ButtonIcon, PesananAktif, SearchBox, PesananHeader, TopNavBox } from '../../components'
import { WARNA_ABU_ABU } from '../../utils/constant'

const Pesanan = () => {
  return (
    <View style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground source={ImagePesananHeader} style={styles.header}>
          <PesananHeader />
        </ImageBackground>
        <SearchBox />
        <View style={styles.pesananAktif}>
          <Text style={styles.label}>Pesanan Aktif</Text>
          <PesananAktif noinvoice="Pesanan No. 0002142" status="Order Placed "/>
          <PesananAktif noinvoice="Pesanan No. 0002142" status="Order Picked"/>
          <PesananAktif noinvoice="Pesanan No. 0002142" status="Order Processing"/>
          <PesananAktif noinvoice="Pesanan No. 0002142" status="Order Delivered"/>
          <PesananAktif noinvoice="Pesanan No. 0002142" status="Order Completed"/>
          <PesananAktif noinvoice="Pesanan No. 0002142" status="Order Completed"/>
          <PesananAktif noinvoice="Pesanan No. 0002142" status="Order Completed"/>
          <PesananAktif noinvoice="Pesanan No. 0002142" status="Order Completed"/>
        </View>
      </ScrollView>
    </View>
  )
}

export default Pesanan

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
  label: {
    fontSize: 18,
    color: '#000000',
    fontFamily: 'TitilliumWeb-Bold',
    marginLeft: 30,
    paddingTop: 15,
  },
  iconLayanan: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginHorizontal: 30,
    marginTop: 10,
  },
  pesananAktif: {
    backgroundColor: WARNA_ABU_ABU,
    flex: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  }
})