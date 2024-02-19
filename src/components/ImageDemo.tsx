import React, { useEffect, useRef } from 'react'
import {Text, View, StyleSheet, Image} from 'react-native'
import icon_collection from '../assets/icon_collection.png'
const ImageDemo = () => {
    const ImageRef = useRef(null)
    useEffect(() => {
        // Image.getSize("https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d8ac9688ad874809be4a0447ae532219~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=2000&h=2000&s=761857&e=png&a=1&b=06afed", 
        // (width, height) => {
        //     console.log('width', width, 'height', height)
        // }, (error) => {
        //     console.log('error', error)
        // });
        Image.prefetch("https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d8ac9688ad874809be4a0447ae532219~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=2000&h=2000&s=761857&e=png&a=1&b=06afed").then((data) => {
            console.log('prefetch', data)
        })
    }, [])
  
    return (
        <View
         style={styles.root}
         >
          <Image
          ref={ImageRef}
          style={styles.image}
        //   blurRadius={9}
          source={icon_collection}
          fadeDuration={300}
        //   onLoad={(event) => {
        //     console.log('onLoading', event.nativeEvent)
        //   }}
        //   onLoadStart={() => {
        //     console.log('onLoadStart...')
        //   }}
        //   onLoadEnd={() => {
        //     console.log('onLoadEnd...')
        //   }}
          
        />
        <Text>tintColor</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        height: "100%",
        width: "100%",
        // backgroundColor: '#000'
    },
    image: {
        width: 200,
        height: 200,
        resizeMode:"cover",
        tintColor: 'red'
    }
})

export default ImageDemo