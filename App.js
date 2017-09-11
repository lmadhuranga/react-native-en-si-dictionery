import React, { Component } from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { Dictionary } from './src/Dictionary';

export default class App extends React.Component {
    render() {
        return (
            <View>
              <Text>First Page content</Text>
              <Dictionary/>
            </View>
        );
    }
}
