import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native'
import { useAppDispatch } from '../reduxConfig/hooks'
import { setCityKeyword } from '../reduxConfig/searchSlice';
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from '../App'
import { StackNavigationProp } from '@react-navigation/stack'

const CitySearch = () => {
    //Typed navigation props
    type CityResultProp = StackNavigationProp<RootStackParamList, 'CityResult'>;
    type HomeProp = StackNavigationProp<RootStackParamList, 'Home'>;
   
    //Navigation hooks
    const navigationCity = useNavigation<CityResultProp>();
    const navigationHome = useNavigation<HomeProp>();
    
    //Form hook
    const [city, setCity] = useState('');
    
    //Redux dispatch hook
    const dispatch = useAppDispatch()
    
    //Search handler, dispatch keyword to redux
    function handleSearch(searchTerm: string) {
        let keyword = searchTerm;
        keyword = keyword.trim();
        keyword = keyword.replace(/ /g,'+');
            dispatch(
                    setCityKeyword(keyword)
                  );
            navigationCity.navigate("CityResult");
    }
    
    return (
        <View style={styles.container}>
            <TextInput
            placeholder='Enter a city'
            value={city}
            onChangeText={e => setCity(e)}
            style={styles.input}
            />
            <Pressable style={styles.button} onPress={() =>handleSearch(city)}>
                <Text style={styles.text}>Search</Text>
            </Pressable>
            <Pressable style={styles.back} onPress={() => navigationHome.navigate("Home")}>
                <Text style={styles.text} >Back</Text>
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
