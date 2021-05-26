import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet
}from 'react-native';
import Button from '../AbstractComponent/Button';

class NewSingleTodo extends Component {
    state = { 
        text:''
    }
    render() { 
        return ( 
        <View style={stylyes.mainStyles}>
        {this.props.todo.map(el=>
            <View style={stylyes.singleContainer}
                        key={el.id}>
                        <Button 
                            title={'+'}
                            borderRadius={10}
                            width={40}
                            onPress={()=>this.props.IncrementPerson(el.id)} 
                        />
                        <Button 
                            title={'-'}
                            borderRadius={10}
                            width={40}
                            onPress={()=>this.props.DecrementPerson(el.id)} 
                            disabled={!el.noOfPerson}
                        />
                        <Text>Person{el.noOfPerson}</Text>
                        {
                            el.editing===true ?
                            <View style={stylyes.inputBorderStyle}>
                              <TextInput
                                  defaultValue={el.inputValue} 
                                  onChangeText={(e)=>this.setState({text: e})}>
                              </TextInput>
                            </View>
                            :
                            <View style={stylyes.inputStyle}>
                              <Text>{el.inputValue}</Text>
                            </View>
                         }
                        {
                            el.editing===true ?
                            <Button 
                                    title={'Save'}
                                    borderRadius={10}
                                    width={50}
                                    onPress={()=>this.props.saveText(el.id, this.state.text)} 
                               />
                               :
                            <Button 
                                     title={'Edit'}
                                     borderRadius={10}
                                     width={40}
                                     onPress={()=>this.props.editingText(el.id)} 
                            />
                        }
                <Button title={'Delete'} onPress={()=>this.props.onDelete(el.id)} />
            </View>
            )}
        </View>
        );
    }
}
export default NewSingleTodo;



const stylyes=StyleSheet.create({
    mainStyles:{
        height:100, 
        width:"100%",
    },
    singleContainer:{
        height:80,
        width:"100%",
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center' ,
        borderWidth:1,
        borderColor:'lightgreen'
    },
    inputBorderStyle:{
        height:40, 
        width:80, 
        justifyContent:'center',
        alignItems:'center',
        borderWidth:1,
        borderColor:'lightgreen'
    },
    inputStyle:{
        height:40, 
        width:80, 
        justifyContent:'center',
        alignItems:'center',
        borderColor:'lightgreen'
        
    }
})