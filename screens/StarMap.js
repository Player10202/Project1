import {WebView} from 'react-native-webview'
import React, { Component } from "react";
import {Text, Image, Style} from 'react-native'
<WebView
    scalesPageToFit={true}
    source={{uri:path}}
    style={{marginTop:20,marginBottom:20,}}
    />

<TextInput
style={{height:40,borderColor:'grey',borderWidth:1}}
placeholder="Enter Your Latitude"
placeholderTextColor='#ffff#000000'
onChangeText={(text)}=>{
    this.setState({
        latitude:text
    })
}
/>

const {longitude,latitude}=this.state;
const path='https://virtualsky.lco.global/embed/index.html?longitude=${longitude}&latitude=${latitude}&constelleatons=true&constelleatonlabels=true&showstarlabels=true&gridlines_az=true&live=true&projection=stereo&showdate=false&showposition=false'
