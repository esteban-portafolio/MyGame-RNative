import { StyleSheet, View } from 'react-native';

import GameScreen from './src/screens/GameScreen'
import Header from './src/components/Header';
import ResultScreen from './src/screens/ResultScreen';
import StartGameScreen from './src/screens/StartGameScreen';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { useState } from 'react'

export default function App() {
  const [loaded] = useFonts({
    UnboundedBold: require("./src/assets/fonts/Unbounded-ExtraBold.ttf")
  })
  const [userNumber, setUserNumber] = useState()
  const [winOrLose, setWinOrLose] = useState(false)
  const [result, setResult] = useState("")

  const handleStartGame = selectedNumber => {
    setUserNumber(selectedNumber)
  }


  const handleFinishGame = (selection, number) => {
    if ((selection === "menor" && userNumber < number) ||
      (selection === "mayor" && userNumber > number)
    ) {
      setResult("Win")
    } else {
      setResult("Lose")
    }
    setWinOrLose(true)
  }

  let content = <StartGameScreen onStartGame={handleStartGame} />

  if (userNumber && winOrLose === true) {
    content = <ResultScreen result={result}/>
  } else if (userNumber) {
    content = <GameScreen handleResult={handleFinishGame} />
  }

  if (!loaded) {
    return null
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header title={"Adivina tu Numero"} newStyles={{ fontFamily: "UnboundedBold" }} />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
