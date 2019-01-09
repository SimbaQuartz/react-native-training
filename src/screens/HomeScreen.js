import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Dimensions } from 'react-native'
import { Actions, ActionConst } from 'react-native-router-flux'

const { height, width } = Dimensions.get('window')

export default class HomeScreen extends React.Component {

    state = {
        text: 1
    }

    render() {
        return (
            <TouchableOpacity
                style={{ height, width, justifyContent: 'center', alignItems: 'center' }}
                onPress={() => Actions.profile({ type: ActionConst.RESET })}
            >
                <Text>Go To Profile Screen</Text>
            </TouchableOpacity>
        )
    }
}
const a = 0
const b = 0
export { a, b } 