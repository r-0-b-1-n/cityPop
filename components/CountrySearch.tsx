import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native'
import { useAppDispatch } from '../reduxConfig/hooks'
import { setCountryKeyword } from '../reduxConfig/searchSlice';
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from '../App'
import { StackNavigationProp } from '@react-navigation/stack'

const CountrySearch = () => {
    type CountryResultProp = StackNavigationProp<RootStackParamList, 'CountryResult'>;
    const [country, setCountry] = useState('');
    const navigation = useNavigation<CountryResultProp>();
    const dispatch = useAppDispatch()
    
    function handleSearch(searchTerm: string) {
        //Modifying state to make search keyword into alpha 2 country code in compliance with API.
        let keyword = searchTerm;
        keyword = keyword.trim();
        keyword = keyword.toLowerCase();

        if (keyword == "united states") {
            dispatch(
                setCountryKeyword("US")
              );
        }
        else if (keyword == "usa") {
            dispatch(
                setCountryKeyword("US")
              );
        }

        else if (keyword == "united states of america") {
            dispatch(
                setCountryKeyword("US")
              );
        }
        else if (keyword == "andorra") {
            dispatch(
                setCountryKeyword("US")
              );
        }

        else if (keyword == "united arab emirates") {
            dispatch(
                setCountryKeyword("AE")
              );
        }

        else if (keyword == "afghanistan") {
            dispatch(
                setCountryKeyword("AF")
              );
        }

        else if (keyword == "antigua and barbuda") {
            dispatch(
                setCountryKeyword("AG")
              );
        }
        
        else if (keyword == "anguilla") {
            dispatch(
                setCountryKeyword("AI")
              );
        }

        else if (keyword == "albania") {
            dispatch(
                setCountryKeyword("AL")
              );
        }
        
        else if (keyword == "armenia") {
            dispatch(
                setCountryKeyword("AM")
              );
        }

        else if (keyword == "angola") {
            dispatch(
                setCountryKeyword("AO")
              );
        }
        
        else if (keyword == "antarctica") {
            dispatch(
                setCountryKeyword("AQ")
              );
        }

        else if (keyword == "argentina") {
            dispatch(
                setCountryKeyword("AR")
              );
        }

        else if (keyword == "american samoa") {
            dispatch(
                setCountryKeyword("AS")
              );
        }

        else if (keyword == "austria") {
            dispatch(
                setCountryKeyword("AT")
              );
        }

        else if (keyword == "australia") {
            dispatch(
                setCountryKeyword("AU")
              );
        }

        else if (keyword == "aruba") {
            dispatch(
                setCountryKeyword("AW")
              );
        }

        else if (keyword == "åland islands") {
            dispatch(
                setCountryKeyword("AX")
              );
        }

        else if (keyword == "azerbaijan") {
            dispatch(
                setCountryKeyword("AZ")
              );
        }

        else if (keyword == "bosnia and herzegovina") {
            dispatch(
                setCountryKeyword("BA")
              );
        }

        else if (keyword == "barbados") {
            dispatch(
                setCountryKeyword("BB")
              );
        }

        else if (keyword == "bangladesh") {
            dispatch(
                setCountryKeyword("BD")
              );
        }

        else if (keyword == "belgium") {
            dispatch(
                setCountryKeyword("BE")
              );
        }

        else if (keyword == "burkina faso") {
            dispatch(
                setCountryKeyword("BF")
              );
        }

        else if (keyword == "bulgaria") {
            dispatch(
                setCountryKeyword("BG")
              );
        }

        else if (keyword == "bahrain") {
            dispatch(
                setCountryKeyword("BH")
              );
        }

        else if (keyword == "burundi") {
            dispatch(
                setCountryKeyword("BI")
              );
        }

        else if (keyword == "benin") {
            dispatch(
                setCountryKeyword("BJ")
              );
        }

        else if (keyword == "saint bathélemy") {
            dispatch(
                setCountryKeyword("BL")
              );
        }

        else if (keyword == "brunei darrussalam") {
            dispatch(
                setCountryKeyword("BN")
              );
        }

        else if (keyword == "bolivia") {
            dispatch(
                setCountryKeyword("BO")
              );
        }

        else if (keyword == "bonaire") {
            dispatch(
                setCountryKeyword("BQ")
              );
        }

        else if (keyword == "brazil") {
            dispatch(
                setCountryKeyword("BR")
              );
        }

        else if (keyword == "bahamas") {
            dispatch(
                setCountryKeyword("BS")
              );
        }

        else if (keyword == "bhutan") {
            dispatch(
                setCountryKeyword("BT")
              );
        }

        else if (keyword == "belarus") {
            dispatch(
                setCountryKeyword("BY")
              );
        }

        else if (keyword == "belize") {
            dispatch(
                setCountryKeyword("BY")
              );
        }

        else if (keyword == "canada") {
            dispatch(
                setCountryKeyword("CA")
              );
        }

        else if (keyword == "cocos islands") {
            dispatch(
                setCountryKeyword("CC")
              );
        }

        else if (keyword == "democratic republic of congo") {
            dispatch(
                setCountryKeyword("CD")
              );
        }

        else if (keyword == "central african republic") {
            dispatch(
                setCountryKeyword("CD")
              );
        }

        else if (keyword == "congo") {
            dispatch(
                setCountryKeyword("CG")
              );
        }

        else if (keyword == "switzerland") {
            dispatch(
                setCountryKeyword("CH")
              );
        }

        else if (keyword == "cote d'ivoire") {
            dispatch(
                setCountryKeyword("CI")
              );
        }

        else if (keyword == "cook islands") {
            dispatch(
                setCountryKeyword("CK")
              );
        }

        else if (keyword == "chile") {
            dispatch(
                setCountryKeyword("CL")
              );
        }

        else if (keyword == "colombia") {
            dispatch(
                setCountryKeyword("CO")
              );
        }

        else if (keyword == "costa rica") {
            dispatch(
                setCountryKeyword("CR")
              );
        }

        else if (keyword == "cuba") {
            dispatch(
                setCountryKeyword("CU")
              );
        }

        else if (keyword == "cabo verde") {
            dispatch(
                setCountryKeyword("CV")
              );
        }

        else if (keyword == "curaco") {
            dispatch(
                setCountryKeyword("CW")
              );
        }

        else if (keyword == "christmas island") {
            dispatch(
                setCountryKeyword("cx")
              );
        }

        else if (keyword == "cyprus") {
            dispatch(
                setCountryKeyword("CY")
              );
        }

        else if (keyword == "czech republic") {
            dispatch(
                setCountryKeyword("CZ")
              );
        }

        else if (keyword == "germany") {
            dispatch(
                setCountryKeyword("DE")
              );
        }

        else if (keyword == "djibouti") {
            dispatch(
                setCountryKeyword("DJ")
              );
        }

        else if (keyword == "denmark") {
            dispatch(
                setCountryKeyword("DK")
              );
        }

        else if (keyword == "dominican republic") {
            dispatch(
                setCountryKeyword("DO")
              );
        }

        else if (keyword == "algeria") {
            dispatch(
                setCountryKeyword("DZ")
              );
        }

        else if (keyword == "ecuador") {
            dispatch(
                setCountryKeyword("EC")
              );
        }

        else if (keyword == "estonia") {
            dispatch(
                setCountryKeyword("EE")
              );
        }

        else if (keyword == "eqypt") {
            dispatch(
                setCountryKeyword("EG")
              );
        }

        else if (keyword == "western sahara") {
            dispatch(
                setCountryKeyword("EH")
              );
        }
       
        else if (keyword == "eritrea") {
            dispatch(
                setCountryKeyword("ER")
              );
        }
    
            navigation.navigate("CountryResult");
        }
    

    return (
        <View style={styles.container}>
            <TextInput
            placeholder='Enter a city'
            value={country}
            onChangeText={e => setCountry(e)}
            style={styles.input}
            />
            <Pressable style={styles.button} onPress={() => {handleSearch(country)}}>
                <Text style={styles.text}>Search</Text>
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
