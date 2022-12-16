import React, { useState, useEffect } from "react";
import { View, Alert, ActivityIndicator } from "react-native";
import AsyncStore from "@react-native-async-storage/async-storage/src";
// Components
import ImageMultipleChoiceQuestion from "./src/components/ImageMultipleChoiceQuestion";
import OpenEndedQuestion from "./src/components/OpenEndedQuestion";
import Header from "./src/components/Header";
// Data
import questions from "./assets/data/allQuestions";
// Styles
import styles from "./App.styles";

const App = () => {
  // Set state variables
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(
    questions[currentQuestionIndex]
  );
  const [lives, setLives] = useState(5);
  const [hasLoaded, setHasLoaded] = useState(false);

  // Update question index and Alert win
  useEffect(() => {
    if (currentQuestionIndex >= questions.length) {
      Alert.alert("You won");
      setCurrentQuestionIndex(0);
    } else {
      setCurrentQuestion(questions[currentQuestionIndex]);
    }
  }, [currentQuestionIndex]);

  // Load data
  useEffect(() => {
    getData().then((r) => console.log("Game Data loaded"));
  }, []);

  // Save data
  useEffect(() => {
    if (hasLoaded) {
      storeData().then((r) => console.log("Game Saved!"));
    }
  }, [lives, currentQuestionIndex, hasLoaded]);

  // Restart game
  const restart = () => {
    setLives(5);
    setCurrentQuestionIndex(0);
  };

  // Update current question index on correct
  const onCorrect = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  // Alert wrong and start over when player loses
  const onWrong = () => {
    if (lives <= 1) {
      Alert.alert("Game Over", "Try again", [
        {
          text: "Try again",
          onPress: restart,
        },
      ]);
    } else {
      Alert.alert("Wrong");
      setLives(lives - 1);
    }
  };

  // Store data function
  const storeData = async () => {
    await AsyncStore.setItem("lives", lives.toString());
    await AsyncStore.setItem(
      "currentQuestionIndex",
      currentQuestionIndex.toString()
    );
  };

  // Load data function
  const getData = async () => {
    const loadedLives = await AsyncStore.getItem("lives");
    const loadedIndex = await AsyncStore.getItem("currentQuestionIndex");
    if (loadedLives) {
      setLives(parseInt(loadedLives));
    }
    if (loadedIndex) {
      setCurrentQuestionIndex(parseInt(loadedIndex));
    }

    setHasLoaded(true);
  };

  if (!hasLoaded) {
    return <ActivityIndicator />;
  }

  return (
    <View style={styles.root}>
      <Header
        progress={currentQuestionIndex / questions.length}
        lives={lives}
      />

      {currentQuestion.type === "IMAGE_MULTIPLE_CHOICE" && (
        <ImageMultipleChoiceQuestion
          question={currentQuestion}
          onCorrect={onCorrect}
          onWrong={onWrong}
        />
      )}

      {currentQuestion.type === "OPEN_ENDED" && (
        <OpenEndedQuestion
          question={currentQuestion}
          onCorrect={onCorrect}
          onWrong={onWrong}
        />
      )}
    </View>
  );
};

export default App;
