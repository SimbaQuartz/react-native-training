import React from 'react'
import {View, Text} from 'react-native'
import { Dimensions } from 'react-native'

const {height, width} = Dimensions.get('window')

export default class App extends React.Component {
  render() {
    return(
      <View style={{height, width}}>
        <View style={{backgroundColor: 'red', flex:1}}/>
        <View style={{backgroundColor: 'green', flex:1}}/>
        <View style={{backgroundColor: 'blue', flex:1}}/>
      </View>
    )
  }
}