import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, ActivityIndicator, Pressable } from 'react-native'
import { useAppSelector } from '../reduxConfig/hooks'
import { setCityKeyword, setCountryTitle } from '../reduxConfig/searchSlice';
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from '../App'
import { StackNavigationProp } from '@react-navigation/stack'
import { useAppDispatch } from '../reduxConfig/hooks'

interface city {
    country: string,
    is_capital: boolean,
    longitude: number,
    latitude: number,
    name: string,
    population: number,
}

const CountryResult = () => {
    //Typed navigation props
    type HomeProp = StackNavigationProp<RootStackParamList, 'Home'>;
    type CityResultProp = StackNavigationProp<RootStackParamList, 'CityResult'>;

    //Navigation hooks
    const navigationHome = useNavigation<HomeProp>();
    const navigationCity = useNavigation<CityResultProp>();

    //API hook
    const [CountryResult, setCountryResult] = useState<city[]>([]);
    
    //Delay hook, loading screen
    const [delay, setDelay] = useState<boolean>(true);
    

    //Redux keyword selectors
    const selectCountry = useAppSelector(state => state.search.countryKeyword)
    const selectTitle = useAppSelector(state => state.search.countryTitle)
    
    //Redux dispatch hook
    const dispatch = useAppDispatch()

    //Time function to get loading feature
    setTimeout(() => {
        setDelay(false);
      }, 1500);
    
    // Click handler, showing city population 
    function handleClick(searchTerm: string) {
        let keyword = searchTerm;
        keyword = keyword.trim();
        keyword = keyword.replace(/ /g,'+');
            dispatch(
                    setCityKeyword(keyword)
                  );
            navigationCity.navigate("CityResult");
    }

    const handleBack = () => {
            dispatch(
                    setCountryTitle('')
                  );
            navigationHome.navigate("Home");
    }

    const getRequest = async () => {
            let searchTermCountry = selectCountry;
            let endpoint = `https://api.api-ninjas.com/v1/city?country=${searchTermCountry}&&limit=5`;
            
            let r = await fetch(endpoint, {
            method: "GET",
            headers: { 'X-Api-Key': 'QCzDb8zHUhWDBVrzF8KrPA==0tjQVXhLVDEJ8NZl'},
            });
            let result = await r.json();
            setCountryResult(result);
            console.log(result)
    }

    useEffect(() => {
        getRequest();
    }, []);
    
    return (
        <View style={styles.body}>
            { delay ? null: (
                <Pressable style={styles.button} onPress={() => handleBack()}>
                    <Text style={styles.text}>Back</Text>
                </Pressable>
            )}
            {delay ? null : (<Text style={styles.title}>{selectTitle.length > 0 ? selectTitle: "" }</Text>)}
            <View style={styles.container}>
                { CountryResult.length === 0 ?  
                    (
                    <View style={styles.container}>
                        <View style={styles.li}>
                        { delay ? <ActivityIndicator /> : <Text>Unfortunately, no countries were found</Text> }
                        </View> 
                    </View>
                    ) : CountryResult.length >= 1 ? 
                    (
                        <View style={styles.container}>
                            { delay ? (<ActivityIndicator />) : (
                                CountryResult.map((item: any, key: React.Key | null | undefined) => (
                                    <Pressable key={key} style={styles.li} onPress={() => handleClick(item.name)}>
                                        <Text>{item.name}</Text>
                                    </Pressable>
                                )))
                                
                            }
                        </View>
                    ) : ( 
                    <View style={styles.container}>
                        <View style={styles.li}>
                        { delay ? <ActivityIndicator /> : <Text>Error, something unexpected happened. </Text>}
                        </View>
                    </View>
                    )  
                }
            </View>
        </View>
    );   
}
    // Conditional chain based on Request result last is because an empty keyword returns an error, delay state wrapped in option chain to enable loading screen

export default CountryResult

const styles = StyleSheet.create({
    body: {
        height: '100%',
    },
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1,
        minHeight: '100%',
    },
    title: {
        textAlign: 'center',
        top: 170,
        left: 0,
        right: 0,
        fontSize: 32,
        fontWeight: 'bold',
        color: 'black',
        zIndex: 997,
    },
    li: {
        height: 60,
        width: 400,
        borderColor: 'black',
        borderWidth: 2,
        color: 'black',
        alignSelf: 'stretch',
        margin: 20,
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
        marginTop: 20,
        position: 'absolute',
        zIndex: 999,
        top: 50,
        left: 20,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
      },
})