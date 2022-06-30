import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, ActivityIndicator, Pressable } from 'react-native'
import { useAppSelector } from '../reduxConfig/hooks'
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from '../App'
import { StackNavigationProp } from '@react-navigation/stack'

//Typed API array
interface city {
    country: string,
    is_capital: boolean,
    longitude: number,
    latitude: number,
    name: string,
    population: number,
}

const CityResult = () => {
    
    //typed navigation props
    type HomeProp = StackNavigationProp<RootStackParamList, 'Home'>;
   
    //Navigation hooks
    const navigationHome = useNavigation<HomeProp>();
    
    //API array hook
    const [CityResult, setCityResult] = useState<city[]>([]);
    
    //Delay hook for loading screen
    const [delay, setDelay] = useState<boolean>(true);

    //Redux selector
    const selectCity = useAppSelector(state => state.search.cityKeyword)

    //Time function to get loading feature
    setTimeout(() => {
        setDelay(false);
      }, 2500);

    const getRequest = async () => {
            let searchTermCity = selectCity
            let endpoint = `https://api.api-ninjas.com/v1/city?name=${searchTermCity}`;
            
            let r = await fetch(endpoint, {
            method: "GET",
            headers: { 'X-Api-Key': 'QCzDb8zHUhWDBVrzF8KrPA==0tjQVXhLVDEJ8NZl'},
            });
            let result = await r.json();
            setCityResult(result);
            console.log(result)
    }

    useEffect(() => {
        getRequest();
    }, []);
    
    return (
        <View style={styles.body}>
            { delay ? null: (
                            <Pressable style={styles.button} onPress={() => navigationHome.navigate("Home")}>
                                <Text style={styles.text}>Back</Text>
                            </Pressable>
                        )}
            <View style={styles.container}>
                { CityResult.length === 0 ?  
                    (<View style={styles.container}>
                        <View style={styles.li}>
                        { delay ? <ActivityIndicator /> : <Text>Unfortunately, no city was found</Text> }
                        </View>
                    </View>
                    ) : CityResult.length >= 1 ? 
                    (
                        <View style={styles.container}>
                            { delay ? (<ActivityIndicator />) : (
                                CityResult.map((item: any, key: React.Key | null | undefined) => (
                                    <View key={key} style={styles.li}>
                                        <Text>{item.name}</Text>
                                        <Text>Population</Text>
                                        <Text>{item.population}</Text>
                                    </View>
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
    

export default CityResult

const styles = StyleSheet.create({
    body: {
        height: '100%',
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
    li: {
        height: 60,
        width: 400,
        borderColor: 'black',
        borderWidth: 2,
        color: 'black',
        alignSelf: 'stretch',
        margin: 10,
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
})
