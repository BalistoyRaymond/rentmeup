import React from "react";
import { Text, View, StyleSheet}from 'react-native';


export default function ButtonText1(props) {


    const styles = StyleSheet.create({

        button: {
        marginTop:5,
        paddingVertical: 15,
        
        borderRadius: 10,
        backgroundColor: props.backgroundColor,
        alignItems:'center',
        elevation:2


        },
        text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
        },
    });


    return (
        <View style={styles.button}>
            <Text style={styles.text}>{props.text}</Text>
        </View>
    );
}
        