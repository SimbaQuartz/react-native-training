import React from 'react'
import {View, Text} from 'react-native'
import { Dimensions } from 'react-native'

const {height, width} = Dimensions.get('window')

export default class App extends React.Component {
  render() {
    return(
      <View style={{height, width}}>
        <View style={{backgroundColor: 'red', flex:1, flexDirection: 'row'}}>
          <View style={{backgroundColor: 'green', flex:1}}/>
          <View style={{backgroundColor: 'blue', flex:1}}/>
          <View style={{backgroundColor: 'violet', flex:1}}/>
        </View>
        <View style={{backgroundColor: 'orange', flex:1, flexDirection: 'row'}}>
          <View style={{backgroundColor: 'black', flex:1}}/>
          <View style={{backgroundColor: 'pink', flex:1}}/>
          <View style={{backgroundColor: 'yellow', flex:1}}/>
        </View>
        <View style={{backgroundColor: 'red', flex:1, flexDirection: 'row'}}>
          <View style={{backgroundColor: 'green', flex:1}}/>
          <View style={{backgroundColor: 'blue', flex:1}}/>
          <View style={{backgroundColor: 'violet', flex:1}}/>
        </View>
        <View style={{backgroundColor: 'orange', flex:1, flexDirection: 'row'}}>
          <View style={{backgroundColor: 'black', flex:1}}/>
          <View style={{backgroundColor: 'pink', flex:1}}/>
          <View style={{backgroundColor: 'yellow', flex:1}}/>
        </View>
      </View>
    )
  }
}