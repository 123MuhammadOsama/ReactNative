import { View, Text, TextInput, Button } from 'react-native'
import React, { useState } from 'react'

const InputText = () => {
    const [userName, setUserName] = useState('Your Name');
    return (
        <View>
            <Text style={{fontSize:30}}>InputText</Text>
            <Text style={{fontSize:30}}>Your Name: {userName}</Text>
            <TextInput 
                placeholder="Enter your name" value={userName}
                style={{height: 40, borderColor: 'gray', borderWidth: 1, backgroundColor: 'pink'}}
                onChangeText={(data) => setUserName(data)}
            />
        <Button title='Clear' onPress={() => setUserName('')}/>
        </View>
    )
}

export default InputText