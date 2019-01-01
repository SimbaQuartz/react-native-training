import React from 'react'
import Main, { a, b } from './src/Main'
export default class App extends React.Component {

  render() {
    console.log(a)
    return (
      <Main />
    )
  }
}