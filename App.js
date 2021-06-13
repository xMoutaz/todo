import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button,TouchableWithoutFeedback, TextInput, Alert, FlatList, TouchableOpacity, Keyboard } from 'react-native';
import Header from './components/header'
import TodoItem from './components/todoelm'
import AddTodo from './components/addTodo';

export default function App() {
  const [todos, setTodos] = useState([
    {text: 'Buy a coffee', _id: '1'},
    {text: 'Buy a bread', _id: '2'},
    {text: 'Buy a cup', _id: '3'},
    {text: 'Play photball', _id: '4'},
    {text: 'Do Kunooz Meeting', _id: '5'},
    {text: 'Call Attas', _id: '6'},
  ])

  const deleteTodo = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((item) => item._id !==key)
    })
  }
  const addTodo = (todo) => {
    if(todo.length > 3) {
      setTodos((prevTodos) => {
          return [
            {text: todo, 'key':todos.length -1},
            ...prevTodos
          ]
        })
    } else {
      Alert.alert('Ops', 'Todo must be over 3 char long', [
        {text: 'understood'},
      ])
    }
   
  }

  return (
    // <Sandbox/>
    <TouchableWithoutFeedback onPress={() => {
      // Keyboard.dismiss();
      console.log('dismissed keyboard')
    }}>
    <View style={styles.container}>
      {/* header */}
      <Header/>
      <View style={styles.content}>
            <AddTodo addTodo={addTodo} />
        {/* to form */}
        <View style={styles.list}>
          <FlatList 
          keyExtractor={(item) => item._id}
          data={todos}
          renderItem={({ item }) => (
            <TodoItem item={item} pressHandler={deleteTodo} />
          )}
          />
        </View>
      </View>
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
  },
  content: {
    flex:1,
    padding:40,
  },
  list: {
    marginTop:20,
    flex:1,
  },
  item: {
    marginTop:24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24
  }
});
