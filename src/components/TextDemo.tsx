import React from "react"
import {Text, StyleSheet, View, Platform} from 'react-native'

const TextDemo = () => {
    return (
        <View style={style.root}>
            <Text 
            numberOfLines={1} 
            selectable={true}  
            ellipsizeMode="middle"
            onPress={() => {
                console.log('onPress')
            }}
            onLongPress={() => {
                console.log('onLongPress')
            }}
            allowFontScaling={true}
            style={style.txt}
            >
                <Text  style={style.txtNormal}>First part and</Text>
                <Text style={style.txtBlod}>second part</Text>
            </Text>
            <Text style={style.txt_center}>
                居中
            </Text>
        </View>
    )
}

const style = StyleSheet.create({
    root: {
        width: '100%',
        height: '100%',
        backgroundColor: '#f0f0f0',

    },
    txt: {
        color: 'yellow'
    },
    txtNormal: {
        fontWeight: 'normal',
        fontFamily: '',
        fontSize: 40
    },
    txtBlod: {
        fontWeight: 'bold',
        fontSize: 50,
        color: 'black'
    },
    txt_center : {
        textAlign: 'center',
        color: '#3025ff',
        backgroundColor: '#c0c0c0',
        height: 50,
        width: 300,
        fontSize: 20,
        ...Platform.select({
            ios: {
                lineHeight: 50
            },
            android: {
                textAlignVertical: 'center'
            }
        })
    }
})

export default TextDemo