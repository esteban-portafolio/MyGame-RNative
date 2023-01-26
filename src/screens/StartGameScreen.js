import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

import Card from '../components/Card'
import Input from '../components/Input'
import colors from '../constants/colors'

const StartGameScreen = () => {

    const [value, setValue] = useState("")

    const handleInput = (text) => {
        console.log(text)
        setValue(text.replace(/[^0-9]/g, ""))
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Comenzar Juego</Text>
            <Card>
                <Text style={styles.subTitle}>Elija un numero</Text>
                <Input blurOnSubmit autoCapitalize="none"
                    autoCorrect={false} keyboardType="numeric"
                    maxLength={2} value={value}
                    onChangeText={handleInput} />
                <View style={styles.buttonContainer}>
                    <Button
                        color={colors.disableColor}
                        title='Limpiar'
                        onPress={() => console.log("limpiar")} />

                    <Button
                        color={colors.actionColor}
                        title='Confirmar'
                        onPress={() => console.log("confirmar")} />
                </View>
            </Card>
        </View>
    )
}

export default StartGameScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        alignItems: "center",
        backgroundColor: colors.primary,
    },
    title: {
        fontSize: 20,
        marginVertical: 10,
        color: colors.secondary

    },
    subTitle: {
        color: "black",
    },
    buttonContainer: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        paddingHorizontal: 15,
        marginTop: 10,
    },
    cleanButton: {
        width: 100,
    },
    confirmButton: {
        width: 100,
    },

})