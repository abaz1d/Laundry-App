import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { PesananAktif } from '../../components';

const DalamProses = () => {
  return (
    <View style={styles.pesananAktif}>
      <PesananAktif noinvoice="Pesanan No. 0002142" status="Order Placed " />
      <PesananAktif noinvoice="Pesanan No. 0002142" status="Order Picked" />
      <PesananAktif noinvoice="Pesanan No. 0002142" status="Order Processing" />
      <PesananAktif noinvoice="Pesanan No. 0002142" status="Order Delivered" />
    </View>
  )
}

export default DalamProses

const styles = StyleSheet.create({
  pesananAktif: {
    flex: 1,
    marginTop: 30,
    marginBottom: 30,
  }
})