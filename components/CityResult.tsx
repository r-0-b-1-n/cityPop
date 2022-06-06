import React from 'react'
import { Text, StyleSheet, View, ActivityIndicator } from 'react-native'
import { useAppSelector } from '../reduxConfig/hooks'

export default class CityResult extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {
            isLoading: true,
            dataSource: [],
        }
    }
    //APi-fetch template with hook-value from search form
    componentDidMount() {
        const keyword = useAppSelector((state) => state.search.cityKeyword)
        const searchTermCity = keyword;
        const endpoint = `https://api.api-ninjas.com/v1/city?name=${searchTermCity}`;
        console.log(searchTermCity)
        
        return fetch(endpoint, {
        method: "GET",
        headers: { 'X-Api-Key': 'QCzDb8zHUhWDBVrzF8KrPA==0tjQVXhLVDEJ8NZl'},
        })
        .then(response => response.json()) 
        .then( (responseJson) => {
            console.log(responseJson)
            this.setState({
                isLoading: false,
                dataSource: responseJson,
        })
            console.log(this.state.dataSource)
        })
    }

    // If-chain in render to get dynamic results based on API-retrieval
    render() {
        //Loading screen, doesnt show that long, there is probably a more suitable solution out there.
        if(this.state.loading == false ) {
            return (
                <View style={styles.container}>
                    <View>

                    </View>
                    <View style={styles.li}>
                        <ActivityIndicator />
                    </View>
                </View>
                )
        }
        //Nothing was found screen
        else if(this.state.dataSource.length == 0) {
            return (
            <View style={styles.container}>
                <View style={styles.li}>
                    <Text>Unfortunately, no city was found</Text>
                </View>
            </View>
            )
        }
        //Success screen maps api retrieval and returns it on screen.
        else {
            let cities = this.state.dataSource.map((item: any, key: React.Key | null | undefined) => {
                return <View key={key} style={styles.li}>
                    <Text>{item.name}</Text>
                    <Text>Population</Text>
                    <Text>{item.population}</Text>
                </View>
            })
            return (
                <View style={styles.container}>
                    {cities}
                </View>
            );
        }
    }   
}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    li: {
        height: 50,
        width: 400,
        borderColor: 'black',
        borderWidth: 2,
        color: 'black',
        alignSelf: 'stretch',
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',

    }
})
