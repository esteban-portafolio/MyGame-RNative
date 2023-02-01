import {
    Button,
    Dimensions,
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableWithoutFeedback,
    View
} from 'react-native'
import React, { useEffect, useState } from 'react'

import Card from '../components/Card'
import Input from '../components/Input'
import colors from '../constants/colors'

const ancho = Dimensions.get("window").width
const alto = Dimensions.get("window").height
const os = Platform.OS


const StartGameScreen = ({ onStartGame }) => {
    const [value, setValue] = useState("")
    const [confirmed, setConfirmed] = useState(false)
    const [selectedNumber, setselectedNumber] = useState("")


    useEffect(() => {
        console.log(ancho, alto, os)
    }, [])


    const handleInput = (text) => {
        console.log(text)
        setValue(text.replace(/[^0-9]/g, ""))
    }
    const handleResetInput = () => {
        setValue("")
        setConfirmed(false)
    }
    const handleConfirmation = () => {
        const newValue = parseInt(value)
        if (newValue === NaN || newValue <= 0 || newValue > 99) return

        setConfirmed(true)
        setselectedNumber(newValue)
        setValue("")
        Keyboard.dismiss()
    }

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={os === "ios" ? "padding" : "height"}>
            <ScrollView style={{backgroundColor: colors.primary}}>

                <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
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
                                    onPress={handleResetInput} />
                                <Button
                                    color={colors.actionColor}
                                    title='Confirmar'
                                    onPress={handleConfirmation} />
                            </View>
                        </Card>
                        {confirmed && (
                            <Card newStyles={styles.selectedCard}>
                                <Text style={{ color: "black", textDecorationLine: "underline" }}>
                                    Numero elegido es:
                                </Text>
                                <Text style={styles.selectedNumber}>
                                    {selectedNumber}
                                </Text>
                                <View style={styles.confirmButton}>
                                    <Button title='Comenzar Juego' onPress={() => onStartGame(selectedNumber)} />
                                </View>

                            </Card>
                        )}
                    </View>
                </TouchableWithoutFeedback>
            </ScrollView>
        </KeyboardAvoidingView>
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
        marginVertical: ancho > 900 ? 20 : 10,
        color: colors.secondary

    },
    subTitle: {
        color: "black",
    },
    buttonContainer: {
        flexDirection: "row",
        width: ancho < 400 ? "100%" : 500,
        justifyContent: "space-between",
        paddingHorizontal: 15,
        marginTop: 10,
    },
    cleanButton: {
        width: 100,
    },
    confirmButton: {
        width: 100,
        marginTop: 5,
    },
    selectedCard: {
        marginTop: 30,
        width: "50%",
    },
    selectedNumber: {
        color: "black",
        marginVertical: 20,
        fontSize: 35
    }

})