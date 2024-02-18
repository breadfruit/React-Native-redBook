import React, { useEffect, useRef, useState } from 'react'
import {Text, View, StyleSheet} from 'react-native'
const ViewDemo = () => {
    const [height, setHeight] = useState(100)
    const viewRef = useRef<View | null>(null)
    useEffect(() => {
        setTimeout(() => {
            setHeight(200)
            viewRef.current?.setNativeProps({
                style: {
                    backgroundColor: 'blue'
                }
            })
        }, 3000)
    })
    return (
        <View
         style={styles.root}
         >
            <View 
                style={[styles.subView, {height}]}
                onLayout=   {(e) => {
                    console.log(e.nativeEvent)
                }}
                ref={viewRef}
            ></View>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        flexDirection: 'column',
        width: '100%',
        height: '100%'
    },
    subView: {
        width: 100,
        backgroundColor: 'red'
    }
})

export default ViewDemo