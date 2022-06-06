import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native'
import { useAppSelector, useAppDispatch } from '../reduxConfig/hooks'
import { setCityKeyword } from '../reduxConfig/searchSlice';
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from '../App'
import { StackNavigationProp } from '@react-navigation/stack'

const CitySearch = () => {
    //Navigation, typed props to comply to typescript, redux hooks to push and retrieve state between components
    type CityResultProp = StackNavigationProp<RootStackParamList, 'CityResult'>;
    const [city, setCity] = useState('');
    const navigation = useNavigation<CityResultProp>();
    const dispatch = useAppDispatch()
    
    function handleSearch(searchTerm: string) {
        //Keyword modifying to remove extra whitespaces, make it lowercase, and to replace binding whitespaces with + signs
        let keyword = searchTerm;
        keyword = keyword.trim();
        keyword = keyword.toLowerCase();
        keyword = keyword.replace(/ /g,'+');
            dispatch(
                    setCityKeyword(keyword)
                  );
        navigation.navigate("CityResult");
        }
    

    return (
        <View style={styles.container}>
            <TextInput
            placeholder='Enter a city'
            value={city}
            onChangeText={e => setCity(e)}
            style={styles.input}
            />
            <Pressable style={styles.button} onPress={() => {handleSearch(city)}}>
                <Text style={styles.text}>Search</Text>
            </Pressable>
        </View>
    )
}

export default CitySearch

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
