import React from 'react';
import {
    Text,
    TouchableOpacity
} 
from 'react-native';

const Button = (props) =>{
    const title=props.title ? props.title : "No Title";
    const width = props.width ? props.width : 100;
    const height = props.height ? props.height : 40;
    const backgroundColor=props.backgroundColor ? props.backgroundColor : 'lightgreen';
    const borderRadius=props.borderRadius ? props.borderRadius : 20;
    const onPress = props.onPress
    ? props.onPress
    : () => console.log(`TEST: onPress ${title}`);
    return(
        <React.Fragment>
            <TouchableOpacity 
                                disabled={props.disabled}
                                onPress={onPress}
                                style={{
                                        height,
                                        width, 
                                        borderRadius,
                                        justifyContent:'center',
                                        alignItems:'center',
                                        backgroundColor
                                    }}
                                >
                    <Text style={{
                                    fontSize:15, 
                                    color:'white'
                                }}>
                        {title}
                    </Text>
            </TouchableOpacity>
        </React.Fragment>
    );
}
export default Button;