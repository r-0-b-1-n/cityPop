import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from "react-redux";
import { store } from "./reduxConfig/store";
import FirstPage from './components/FirstPage'
import CitySearch from './components/CitySearch';
import CountryResult from './components/CountryResult';
import CountrySearch from './components/CountrySearch';
import CityResult from './components/CityResult';

//Typing for stack navigator in compliance with Typescript
export type RootStackParamList = {
  Home: undefined,
  CitySearch: undefined; 
  CityResult: undefined;
  CountrySearch: undefined;
  CountryResult: undefined;
};

export default function App() {
  const Stack = createStackNavigator<RootStackParamList>();

  //Redux Provider wrapped
  //React navigation screen routing. 

  return (
    <Provider store={store}>
      <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
              <Stack.Screen
                name="Home"
                component={FirstPage}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="CitySearch"
                component={CitySearch}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="CountrySearch"
                component={CountrySearch}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="CountryResult"
                component={CountryResult}
                options={{
                  headerShown: false,
                }}
              />

              <Stack.Screen
                name="CityResult"
                component={CityResult}
                options={{
                  headerShown: false,
                }}
              />
            </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}