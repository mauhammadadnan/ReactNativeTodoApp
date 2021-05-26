import React, { useState } from 'react';
import {
    View,
    StyleSheet
} from 'react-native' 
import Button from '../AbstractComponent/Button';
import InputField from '../AbstractComponent/InputField';

const Navbar = (props) => {
    return(
        <React.Fragment>
             <View style={stylyes.mainText}>
                    <InputField 
                        value={props.inputValue}
                        onChangeText={props.onChangeText}
                        title={'Enter Task'} 
                    />
                        <View style={{width:10}}></View>
                    <Button 
                        onPress={props.addTodo} 
                        title={'Add Task'} 
                    />
                    <Button 
                        onPress={props.ResetPerson} 
                        title={'Reset All'} 
                    />
            </View>
        </React.Fragment>
    );
}
export default Navbar;

const stylyes=StyleSheet.create({
    mainText:{
        height:50,
        width:"100%",
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    }
})