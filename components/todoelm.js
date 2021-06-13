import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 

export default function TodoItem({item, pressHandler}) {
  
    return (
      <TouchableOpacity>
        <View style={styles.item}>
        <MaterialIcons onPress={() => pressHandler(item._id)} name="delete" size={24} color="#333" />
        <Text style={styles.text}>{item.text}</Text>
        </View>
          
      </TouchableOpacity>
    );
  }
  
  const styles = StyleSheet.create({
    item: {
      padding: 16,
      flexDirection: 'row',
      marginTop: 16,
      borderColor: '#bbb',
      borderWidth: 1,
      borderstyle: 'dashed',
      borderRadius: 10,
    },
    text: {
      marginLeft: 10
    },
  });