import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { PesananAktif } from '../../components';

const RiwayatPesanan = () => {
  return (
    <View style={styles.pesananAktif}>
      <PesananAktif noinvoice="Pesanan No. 0002142" status="Order Completed" />
      <PesananAktif noinvoice="Pesanan No. 0002142" status="Order Completed" />
      <PesananAktif noinvoice="Pesanan No. 0002142" status="Order Completed" />
      <PesananAktif noinvoice="Pesanan No. 0002142" status="Order Completed" />
    </View>
  )
}

export default RiwayatPesanan
const styles = StyleSheet.create({
  pesananAktif: {
    flex: 1,
    marginTop: 30,
    marginBottom: 30,
  }
})