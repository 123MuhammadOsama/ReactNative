import { View, Text, Button } from 'react-native'
import React from 'react'

const OnPress = () => {

    const getName = () => {
        console.log('Button Pressed!');
        console.warn('Button Pressed!');
    }
  return (
    <View>
      <Button title="Press Me" onPress={getName} />
    </View>
  )
}

export default OnPress