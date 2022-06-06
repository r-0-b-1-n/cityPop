import React from 'react'
import { StyleSheet, Text, View, Pressable } from 'react-native'
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from '../App'

type CityResultProp = StackNavigationProp<RootStackParamList, 'CityResult'>;
//First Page - navigation to forms for either city search or country search.

const FirstPage = () => {
    const navigation = useNavigation<CityResultProp>();
    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>CityPop</Text>
            <Pressable style={styles.button} onPress={() => navigation.navigate("CitySearch")}>
                <Text style={styles.text}>Search city</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={() => navigation.navigate("CountrySearch")}>
                <Text style={styles.text}>Search country</Text>
            </Pressable>
        </View>
    )
}

export default FirstPage

const styles = StyleSheet.create({
    title: {
        fontSize: 16,
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
