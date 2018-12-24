import React from 'react'
import { View, Text } from 'react-native'

export default class App extends React.Component{
  render() {
    return(
      <View style={{height: 100, width: 100, backgroundColor: 'red', alignItems: 'center', justifyContent: 'center'}}>
        <Text>Hello Simba</Text>
      </View>
    )
  }
}