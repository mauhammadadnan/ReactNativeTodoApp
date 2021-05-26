import React from 'react';
import {
    View,
    TextInput,
    StyleSheet
} 
from 'react-native';

const InputField = (props) =>{
    const title = props.title ? props.title : "No Title";
    const onChangeText = props.onChangeText
                        ? props.onChangeText
                        : (text) => console.log(`TEST onChangeText ${title} VALUE: ${text}`);
    return(
        <React.Fragment>
            <View style={stylyes.mainStyles}
                    >
                   <TextInput
                        onChangeText={onChangeText}
                        value={props.value}
                        placeholder={title}>
                    </TextInput>
             </View>
             </React.Fragment>
    );
}
export default InputField;

const stylyes=StyleSheet.create({
    mainStyles:{
        height:40,
        width:100, 
        borderRadius:10, 
        justifyContent:'center',
        alignItems:'center',
        borderColor:'lightgreen',
        borderWidth:1
    }
})