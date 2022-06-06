import React from 'react'
import { Text, StyleSheet, View, Pressable, ActivityIndicator } from 'react-native'
import { useAppSelector } from '../reduxConfig/hooks'
import { useAppDispatch } from '../reduxConfig/hooks'
import { setCityKeyword } from '../reduxConfig/searchSlice';
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '../App'

export default class CountryResult extends React.Component<any, any> {

    

    constructor(props: any) {
        super(props);
        this.state = {
            isLoading: true,
            dataSource: [],
        }

    }

    handleClick = (city: string) => {
        const dispatch = useAppDispatch();
        const navigation = useNavigation<CityResultProp>();
        type CityResultProp = StackNavigationProp<RootStackParamList, 'CityResult'>;
        let keyword = city;
        keyword = keyword.trim();
        keyword = keyword.toLowerCase();
        keyword = keyword.replace(/ /g,'+');
            dispatch(
                    setCityKeyword(keyword)
                  );
        navigation.navigate("CityResult");

    }

    componentDidMount() {
        const keyword = useAppSelector((state) => state.search.cityKeyword)
        const searchTermCountry = keyword;
        const endpoint = `https://api.api-ninjas.com/v1/city?country=${searchTermCountry}&limit=5` ;
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

    render() {
        if(this.state.loading == false ) {
            return (
                <View style={styles.container}>
                    <View style={styles.li}>
                        <ActivityIndicator />
                    </View>
                </View>
                )
        }
        else if(this.state.dataSource.length == 0) {
            return (
            <View style={styles.container}>
                <View style={styles.li}>
                    <Text>Unfortunately, no cities was found</Text>
                </View>
            </View>
            )
        }
        else {
            let cities = this.state.dataSource.map((item: any, key: React.Key | null | undefined) => {
                return <Pressable key={key} style={styles.li} onPress={() => {this.handleClick(item.name)}}>
                            <Text>{item.name}</Text>
                    </Pressable>
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
        flex: 1,
        color: 'black',
        alignSelf: 'stretch',
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',

    }
})
