import React from 'react';
import {
    View,
    Text,
    StyleSheet
} 
from 'react-native';

const Header = (props) =>{
    const label=props.label ? props.label : "No Title";
    return(
         <View style={stylyes.mainLabel}>
            <Text style={stylyes.lbeText}>
                {label}
            </Text>
        </View>
    );
}
export default Header;

const stylyes=StyleSheet.create({
    mainLabel:{
        height:40,
        width:"100%",
        backgroundColor:'lightgreen',
        justifyContent:'center',
        alignItems:'center'
    },
    lbeText:{
        color:'white', 
        fontSize:20
    }
})