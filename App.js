import React from 'react'
import Main, { a, b } from './src/Main'
import { View, Text, TouchableOpacity } from 'react-native'

export default class App extends React.Component {

  state = {
    selected: 0
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ selected: 1 })
    }, 1000)
  }

  componentDidUpdate() {
    if (this.state.selected === 1) alert('Component Updated')
  }

  render() {
    console.log('render called')
    const a = [
      {
        name: 'Radhika'
      },
      {
        name: 'Joban'
      },
      {
        name: 'Agam'
      }
    ]
    return (
      <View>
        {
          a.map((object, key) => {
            return (
              <TouchableOpacity key={key} onPress={() => this.setState({ selected: key })}>
                <Main
                  name={object.name}
                  color={this.state.selected === key ? 'green' : 'red'}
                >
                  {console.log(object.name, key)}
                </Main>
              </TouchableOpacity>
            )
          })
        }
      </View>
    )
  }
}
