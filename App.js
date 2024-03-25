import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-web';
import React, { useState } from 'react';

export default function App() {

  const [textInputValue, setTextInputValue] = useState('');

  const handleTextChange = (text) => {
    setTextInputValue(text);
  };

  return (
    <View style={styles.container}>
      <Text>第一種TextInput判斷 顯示即時顯示輸入的號碼</Text>
      <TextInput
        style={styles.TextInput1}
        value={textInputValue}
        onChangeText={handleTextChange}
      />

      <Text>第二種 TextInput判斷 顯示是否是正確判斷</Text>
      <TextInput
        style={styles.TextInput1}
        value={textInputValue}
        onChangeText={handleTextChange}
      />

      <StatusBar style="auto" />
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  TextInput1: {
    borderColor: "gray",
    width: "30%",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  }
});
