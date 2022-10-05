import { StyleSheet, Text, View, Dimensions, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState, useCallback } from 'react'
import { IconUnderlineOn } from '../../assets';
import { WARNA_DISABLE } from '../../utils/constant';
import DropDownPicker from 'react-native-dropdown-picker';

const PesananTab = ({ selectGender, setSelectGender }) => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Apple', value: 'apple' },
        { label: 'Banana', value: 'banana' }
    ]);
    const [companyOpen, setCompanyOpen] = useState(false);
    const [companyValue, setCompanyValue] = useState(null);
    const [company, setComapny] = useState([
        { label: "PUCIT", value: "pucit" },
        { label: "UCP", value: "ucp" },
        { label: "UET", value: "uet" },
    ]);
    const [loading, setLoading] = useState(false);
    const onCompanyOpen = useCallback(() => {
        setGenderOpen(false);
    }, []);
    return (
        <View style={styles.container}>
            <DropDownPicker
                style={styles.dropdown}
                open={companyOpen}
                value={companyValue} //companyValue
                items={company}
                setOpen={setCompanyOpen}
                setValue={setCompanyValue}
                setItems={setComapny}
                placeholder="Select Company"
                placeholderStyle={styles.placeholderStyles}
                loading={loading}
                activityIndicatorColor="#5188E3"
                searchable={true}
                searchPlaceholder="Search your company here..."
                onOpen={onCompanyOpen}
                // onChangeValue={onChange}
                zIndex={1000}
                zIndexInverse={3000}
            />
            {selectGender == "Men's Wear" ? (
                <TouchableOpacity style={styles.navigasi}>
                    <Text style={styles.text}>Men's Wear</Text>
                    <IconUnderlineOn />
                </TouchableOpacity>
            ) : (
                <TouchableOpacity style={styles.navigasi}
                    onPress={() => setSelectGender("Men's Wear")}>
                    <Text style={styles.text2}>Men's Wear</Text>
                </TouchableOpacity>
            )}

            {selectGender == "Women's Wear" ? (
                <TouchableOpacity style={styles.navigasi}>
                    <Text style={styles.text}>Women's Wear</Text>
                    <IconUnderlineOn />
                </TouchableOpacity>
            ) : (
                <TouchableOpacity style={styles.navigasi}
                    onPress={() => setSelectGender("Women's Wear")}>
                    <Text style={styles.text2}>Women's Wear</Text>
                </TouchableOpacity>
            )}

            {selectGender == "Household & Accessories" ? (
                <TouchableOpacity style={styles.navigasi}>
                    <Text style={styles.text}>Household & Accessories</Text>
                    <IconUnderlineOn />
                </TouchableOpacity>
            ) : (
                <TouchableOpacity style={styles.navigasi}
                    onPress={() => setSelectGender("Household & Accessories")}>
                    <Text style={styles.text2}>Household & Accessories</Text>
                </TouchableOpacity>
            )}
        </View>
    )
}

export default PesananTab

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        padding: 10,
        borderRadius: 10,
        marginHorizontal: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 10,
        marginTop: - 0.034 * windowHeight,
        flexGrow: 1,
    },
    navigasi: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
    },
    text: {
        fontSize: 16,
        fontFamily: 'TitilliumWeb-SemiBold',
        color: '#000000'
    },
    text2: {
        fontSize: 16,
        fontFamily: 'TitilliumWeb-SemiBold',
        color: WARNA_DISABLE
    }
})