import * as React from 'react';
import { View, Text } from 'react-native';
function HomeScreen() {
    return (
    <View 
        style={{ 
            flex: 1, 
            alignItems: 'center', 
            justifyContent: 'center',
            backgroundColor: 'white'
        }}
    >
        <Text>页面A</Text>
      </View>
    );
  }

  export default HomeScreen