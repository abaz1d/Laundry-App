import { ImageBackground, StyleSheet, Text, View, Dimensions, Image, ScrollView } from 'react-native'
import React from 'react'
import { ImageHeader, Avatar } from '../../assets'
import { ButtonIcon, PesananAktif, SearchBox } from '../../components'
import { WARNA_ABU_ABU } from '../../utils/constant'

const Home = () => {
  return (
    <View style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground source={ImageHeader} style={styles.header}>
          <Image source={Avatar} style={styles.avatar} />
          <View style={styles.greet}>
            <Text style={styles.hai}>Hai, <Text style={styles.username}>Kamu</Text></Text>
            <Text style={styles.datang}>Selamat Datang</Text>
          </View>
        </ImageBackground>
        <SearchBox />
        <View style={styles.layanan}>
          <Text style={styles.label}>Layanan Kami</Text>
          <View style={styles.iconLayanan}>
            <ButtonIcon title="Cuci Komplit" type="layanan" />
            <ButtonIcon title="Cuci Kering" type="layanan" />
            <ButtonIcon title="Setrika Aja" type="layanan" />
            <ButtonIcon title="Paket Bulanan" type="layanan" />
            <ButtonIcon title="Paket Tahunan" type="layanan" />
            <ButtonIcon title="Paket Urgent" type="layanan" />
          </View>
        </View>
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

export default Home

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFFFFF',
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
    margin: 5,
    flex: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  }
})