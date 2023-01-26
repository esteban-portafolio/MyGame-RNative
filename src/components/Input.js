import { StyleSheet, Text, TextInput, View } from 'react-native'

import React from 'react'

const Input = ({ newStyle, ...restProps }) => {
    return (
        <TextInput style={{ ...styles.input, ...newStyle }} {...restProps} />
    )
}

export default Input

const styles = StyleSheet.create({
    input: {
        height: 30,
        borderBottomColor: "black",
        borderBottomWidth: 2,
        marginVertical: 10,
        width: 80,
    }
})