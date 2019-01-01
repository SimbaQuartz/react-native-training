import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Dimensions } from 'react-native'

const { height, width } = Dimensions.get('window')

export default class App extends React.Component {

  state = {
    text: 1,
    text2: 'B'
  }

  render() {
    return (
      <View style={{ height, width }}>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <TouchableOpacity style={{ backgroundColor: 'green', flex: 1, alignItems: 'center', justifyContent: 'center' }}
            onPress={async () => {
              await this.setState({
                text: this.state.text + 1
              })
              console.log(this.state.text)
            }
            }>
            <Text style={{ fontSize: 20, color: 'white' }}>{this.state.text}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ backgroundColor: 'green', flex: 1, alignItems: 'center', justifyContent: 'center' }}
            onPress={() => this.setState({
              text: this.state.text + 1
            })}>
            <Text style={{ fontSize: 20, color: 'white' }}>{this.state.text}</Text>
          </TouchableOpacity>
          <View style={{ backgroundColor: 'violet', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 20, color: 'rgba(255, 255, 255, 0.5)' }}>1</Text>
          </View>
        </View>
        <View style={{ backgroundColor: 'orange', flex: 1, flexDirection: 'row' }}>
          <View style={{ backgroundColor: 'black', flex: 1 }} />
          <View style={{ backgroundColor: 'pink', flex: 1 }} />
          <View style={{ backgroundColor: 'yellow', flex: 1 }} />
        </View>
        <View style={{ backgroundColor: 'red', flex: 1, flexDirection: 'row' }}>
          <View style={{ backgroundColor: 'green', flex: 1 }} />
          <View style={{ backgroundColor: 'blue', flex: 1 }} />
          <View style={{ backgroundColor: 'violet', flex: 1 }} />
        </View>
        <View style={{ backgroundColor: 'orange', flex: 1, flexDirection: 'row' }}>
          <View style={{ backgroundColor: 'black', flex: 1 }} />
          <View style={{ backgroundColor: 'pink', flex: 1 }} />
          <View style={{ backgroundColor: 'yellow', flex: 1 }} />
        </View>
      </View>
    )
  }
}