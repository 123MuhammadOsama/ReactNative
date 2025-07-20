
import React from 'react'
import { Button, Text, View } from 'react-native'

const App = () => {
  return (
    <View>
      <Text style={{fontSize:60}}>Hi there</Text>
    <Text style={{fontSize:60 , fontStyle:'italic', color:'blue'}}>Hi there</Text>
    <Button title="Click Me" onPress={() => alert('Button Pressed!')}/>
    </View>
  )
}

export default App