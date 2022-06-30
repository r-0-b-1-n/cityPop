import React from 'react'
import { StyleSheet, Text, View, Pressable } from 'react-native'
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from '../App'
import { StackNavigationProp } from '@react-navigation/stack'

//First Page - navigation to forms for either city search or country search.

const FirstPage = () => {
    //Typed navigation props
    type CitySearchProp = StackNavigationProp<RootStackParamList, 'CitySearch'>;
    type CountrySearchProp = StackNavigationProp<RootStackParamList, 'CitySearch'>;
   
    //Navigation hooks
    const navigationCity = useNavigation<CitySearchProp>();
    const navigationCountry = useNavigation<CountrySearchProp>();
    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>CityPop</Text>
            <Pressable style={styles.button} onPress={() => navigationCity.navigate("CitySearch")}>
                <Text style={styles.text}>Search city</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={() => navigationCountry.navigate("CountrySearch")}>
                <Text style={styles.text}>Search country</Text>
            </Pressable>
        </View>
    )
}

export default FirstPage

const styles = StyleSheet.create({
    title: {
        position: 'absolute',
        top: 80,
        fontSize: 32,
        fontWeight: 'bold',
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
      },
    button: {
        width: 200,
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
      },
})
