// 사진 저장시 jpg, jpeg로
import * as React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Entypo} from '@expo/vector-icons'

export default function CameraButton({ title, onPress, icon, color,size }){
    if(size==undefined){
        size=28
    }
    return(
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <Entypo name={icon} size={size} color={color ? color : '#f1f1f1'} />
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'center',
    },
    text: {
        fontWeight:'bold',
        fontSize: 16,
        color: '#f1f1f1',
        marginLeft: 10
    }
})
