import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {
  IconCuciKomplit,
  IconCuciKering,
  IconSetrikaAja,
  IconCuciBulanan,
  IconCuciTahunan,
  IconCuciUrgent,
} from '../../assets';
import {WARNA_SEKUNDER, WARNA_UTAMA} from '../../utils/constant';

const ButtonIcon = ({title, type}) => {
  const Icon = () => {

    if (title === 'Cuci Komplit') return <IconCuciKomplit />;

    if (title === 'Cuci Kering') return <IconCuciKering />;

    if (title === 'Setrika Aja') return <IconSetrikaAja />;

    if (title === 'Paket Bulanan') return <IconCuciBulanan />;

    if (title === 'Paket Tahunan') return <IconCuciTahunan />;

    if (title === 'Paket Urgent') return <IconCuciUrgent />;

    return <IconCuciKomplit />;
  };

  return (
    <TouchableOpacity style={styles.container(type)}>
      <View style={styles.button(type)}>
        <Icon />
      </View>
      <Text style={styles.text(type)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonIcon;

const styles = StyleSheet.create({
  container: (type) => ({
      marginBottom : type === "layanan" ? 12 : 0,
      marginRight : type === "layanan" ? 5 : 0
  }), 
  button: (type) => ({
    backgroundColor: WARNA_UTAMA,
    padding: type === 'layanan' ? 12 : 7,
    borderRadius: 10,
    
  }),
  text: (type) => ({
    fontSize: type === 'layanan' ? 14 : 10,
    fontFamily:type === 'layanan' ? 'TitilliumWeb-Light' : 'TitilliumWeb-Regular',
    textAlign: 'center',
    marginTop: type === 'layanan' ? 0 : 3,
    color: '#000000',
  }),

});
