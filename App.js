import React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title='Go to Profile' onPress={() => navigation.navigate('Profile')} />
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Pankaj kumar</Text>
    </View>
  )
}

function MyStack() {
  return (
    <stack.Navigator>
      <stack.Screen name='Home' component={HomeScreen} />
      <stack.Screen name='Profile' component={ProfileScreen} />
    </stack.Navigator>
  )
}

const stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  )
}