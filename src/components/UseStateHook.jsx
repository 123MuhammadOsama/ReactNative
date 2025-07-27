import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'

const UseStateHook = () => {

    const [name, setName] = useState('Leo');


  return (
    <View>
      <Text style={{fontSize: 30}}>UseStateHook</Text>
      <Text style={{fontSize: 30}}>name: {name}</Text>
      <Button title="Change Name" onPress={() => setName('John')} />
    </View>
  )
}

export default UseStateHook
