import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

import Card from '../components/Card'
import colors from '../constants/colors'

const GameScreen = ({handleResult}) => {
    const [currentGuess, setCurrentGuess] = useState()

    useEffect(() => {
        setCurrentGuess(Math.floor(Math.random() * (99-1) + 1))
    }, [])


    return (
        <View style={styles.container}>
            <Text style={styles.textColor}>Suposicion del Oponente</Text>
            <Text style={styles.textColor}>{currentGuess}</Text>
            <Card newStyles={styles.buttonContainer}>
                <Button title='Menor' onPress={() => handleResult("menor", currentGuess)} />
                <Button title='Mayor' onPress={() => handleResult("mayor", currentGuess)} />
            </Card>
        </View>
    )
}

export default GameScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        alignItems: "center",
        backgroundColor: colors.primary,
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: 'space-between',
        marginTop: 20,
        width: '80%',
    },
    textColor:{
        color: colors.secondary,
        fontSize: 20,
    }
})