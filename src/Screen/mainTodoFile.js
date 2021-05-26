import React, { Component } from 'react';
import {
    View,
    StyleSheet
} 
from 'react-native';
//Components
import Header from '../Component/AbstractComponent/Header';
import Navbar from '../Component/ModuleComponent/Navbar';
import NewSingleTodo from '../Component/ModuleComponent/newSingleTodo';

class MainTodoFile extends Component {
    state={ 
        todo:[],
        inputValue:'',
        value:0,
        editing:false
    }
    addTodo=()=>{
        // console.log(this.state.todo)        
        let a={
            id:Math.random()*10000000,
            inputValue:this.state.inputValue,
            noOfPerson:0,
            editing:false
        }
        this.setState({todo:[...this.state.todo, a]})
        this.setState({inputValue:''})
        // console.log(this.state.todo)  
    }
    ResetPerson = (id) => {
        let list = [...this.state.todo];
        for(let index = 0; index < list.length; index++){
            list[index].noOfPerson=0;   
        }
        this.setState({todo: list});
    }
    IncrementPerson = (id) => {
        let list = [...this.state.todo];
        const index = list.findIndex(t => t.id === id); 
        console.log(index);
        if(index >= 0  ){
            list[index].noOfPerson = list[index].noOfPerson + 1;
            this.setState({todo: list});   
        }
    }
    DecrementPerson = (id) => {
        let list = [...this.state.todo];
        const index = list.findIndex(t => t.id === id); 
        if(index >= 0 && list.noOfPerson !=0 ){
            list[index].noOfPerson = list[index].noOfPerson - 1;
            this.setState({todo: list});     
        }
    }
    editingText = (id) => {
        // console.log('Editing Calling...')
        let list = [...this.state.todo];
        const index = list.findIndex(l =>  l.id === id);
        if(index >= 0){
            list[index].editing = true;
        }
        this.setState({todo: list})
   }
   saveText = (id, text ) =>{
    // console.log('Save Calling...')
    let list = [...this.state.todo];
    const index = list.findIndex(l => l.id === id);
    if(index >= 0){
        list[index].inputValue = text;
        list[index].editing = false;
    }
    this.setState({todo: list})
    }

    onDelete = (_id) => {
        const list = this.state.todo.filter(l => l.id !== _id); 
        this.setState({ todo : list});    
    }
    render() { 
        return ( 
            <View style={{flex:1,backgroundColor:'white'}}>
                <Header label={'Todo App'} />
                    <View style={{height:10}}></View>
                <Navbar 
                    inputValue={this.state.inputValue}
                    onChangeText={(e)=>this.setState({inputValue:e})}
                    addTodo={this.addTodo}
                    ResetPerson={this.ResetPerson}
                />
                    <View style={{height:10}}></View>
                <NewSingleTodo  
                    todo={this.state.todo}
                    IncrementPerson={this.IncrementPerson}
                    DecrementPerson={this.DecrementPerson}
                    editingText={this.editingText}
                    saveText={this.saveText}
                    onDelete={this.onDelete}
                />
            </View>
        );
    }
}

export default MainTodoFile;


const stylyes=StyleSheet.create({
    mainText:{
        height:50,
        width:"100%",
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    }
})