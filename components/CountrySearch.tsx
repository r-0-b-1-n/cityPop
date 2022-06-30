import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native'
import { useAppDispatch } from '../reduxConfig/hooks'
import { setCountryKeyword, setCountryTitle } from '../reduxConfig/searchSlice';
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from '../App'
import { StackNavigationProp } from '@react-navigation/stack'
import { countryCode } from '../Alpha2Code'

const CountrySearch = () => {
    
    //Typed navigation props
    type CountryResultProp = StackNavigationProp<RootStackParamList, 'CountryResult'>;
    type HomeProp = StackNavigationProp<RootStackParamList, 'Home'>;
    
    //Form hook
    const [country, setCountry] = useState('');
    
    //Navigation hooks
    const navigationCountryRes = useNavigation<CountryResultProp>();
    const navigationHome = useNavigation<HomeProp>();
    
    //Redux dispatch hook
    const dispatch = useAppDispatch()
    
    //Keyword handler
    function handleSearch(searchTerm: string) {
        //Modifying state to make search keyword into alpha 2 country code in compliance with API.
        let keyword = searchTerm;
        keyword = keyword.trim();
        keyword = keyword.toLowerCase();
        
        //All country codes are in a separate object
        if (countryCode.hasOwnProperty(keyword)) {
            dispatch(
                setCountryKeyword(countryCode[keyword])
            )
            dispatch(
                setCountryTitle(keyword.toUpperCase())
            )
        }
        else {
            //XX is the code for unknown country in Alpha2code 
            dispatch(
                setCountryKeyword('XX')
            )
        }
        navigationCountryRes.navigate("CountryResult");
    }
    
    return (
        <View style={styles.container}>
            <TextInput
            placeholder='Enter a country'
            value={country}
            onChangeText={e => setCountry(e)}
            style={styles.input}
            />
            <Pressable style={styles.button} onPress={() => {handleSearch(country)}}>
                <Text style={styles.text}>Search</Text>
            </Pressable>
            <Pressable style={styles.back} onPress={() => navigationHome.navigate("Home")}>
                <Text style={styles.text} >Back</Text>
            </Pressable>
        </View>
    )
}

export default CountrySearch

const styles = StyleSheet.create({
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
    back: {
        position: 'absolute',
        zIndex: 999,
        top: 72,
        left: 24,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
    },
    input: {
        color: 'black',
        alignSelf: 'stretch',
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'black',
        borderWidth: 4,
        height: 50,
        paddingLeft: 12,
        width: 400,
    },
})
