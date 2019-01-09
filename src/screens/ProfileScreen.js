import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Dimensions } from 'react-native'
import { Actions } from 'react-native-router-flux';

const { height, width } = Dimensions.get('window')

export default class ProfileScreen extends React.Component {

    state = {
        text: 1
    }

    render() {
        return (
            <TouchableOpacity
                style={{ height, width, justifyContent: 'center', alignItems: 'center' }}
                onPress={Actions.pop}
            >
                <Text>Go To Home Screen</Text>
            </TouchableOpacity>
        )
    }
}
const a = 0
const b = 0
export { a, b } 