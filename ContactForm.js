import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

// import './ContactForm.css'

export default class App extends Component {
  render() {
    return (

      <View>
        <Input placeholder="nama" type="text" />
        <Input placeholder="email" type="email" />
        <Input placeholder="message" />
        <Input placeholder="nama" type="text" />

        <Button style={{ backgroundColor: "green" }}>
          <Text> Submit </Text>
        </Button>

      </View>

    )
  }
}