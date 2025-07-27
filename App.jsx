
import React from 'react'
import { Button, Text, View } from 'react-native'
import First from './src/components/First'
import OnPress from './src/components/OnPress'
import UseStateHook from './src/components/UseStateHook'

const App = () => {
  return (
    <View>
      {/* <Text style={{fontSize:60}}>Hi there</Text>
    <Text style={{fontSize:60 , fontStyle:'italic', color:'blue'}}>Hi there</Text>
    <Button title="Click Me" onPress={() => alert('Button Pressed!')}/>
    <First />
    <OnPress /> */}

    <UseStateHook />
    </View>
  )
}

export default App