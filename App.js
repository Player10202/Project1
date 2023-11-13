import React, { Component } from "react";
import * as Font from "expo-font";

import DailyPic from "./screens/DailyPic";
import BottomTabNavigator from "./components/BottomTabNavigator";
import SpaceCraft from "./screens/SpaceCraft";
import StarMap from "./screens/StarMap";
import Home from "./screens/Home";

import { createSwitchNavigator, createAppContainer } from "react-navigation";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      fontLoaded: false
    };
  }

  

 

  
}

const AppSwitchNavigator = createSwitchNavigator(
  {
    DailyPic: {
      screen: DailyPic
    },
    SpaceCraft: {
      screen: SpaceCraft
    },
    StarMap: {
      screen: StarMap
    },
    BottomTab: {
      screen: BottomTabNavigator
    },
    Home: {
      screen: Home
    }
  },
  {
    initialRouteName: "Login"
  }
);

const AppContainer = createAppContainer(AppSwitchNavigator);
function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
      HeaderShown:false
}}>
  <Stack.Screen name="Home" Component={Home}/>
  <Stack.Screen name="SpaceCraft" Component={SpaceCraft}/>
  <Stack.Screen name="StarMap" Component={StarMap}/>
  <Stack.Screen name="DailyPic" Component={DailyPic}/>

</Stack.Navigator>
    </NavigationContainer>
  );
}