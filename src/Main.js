import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Dimensions } from 'react-native'

const { height, width } = Dimensions.get('window')

export default class Main extends React.Component {

    state = {
        text: 1
    }

    componentWillUnmount() {
        alert('Main unmounted')
    }

    render() {
        return (
            <Text style={{ color: this.props.color, margin: 100, fontSize: 30 }}>{this.props.name}
            </Text>
        )
    }
}
const a = 0
const b = 0

export { a, b } 