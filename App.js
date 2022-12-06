import React, { useState, useEffect } from "react";
import { Text, View, ScrollView, Image, TextInput, Alert } from "react-native";
// Components
import ImageMultipleChoiceQuestion from "./src/components/ImageMultipleChoiceQuestion";
// Assets
import icon from "./assets/icon.png";
// Data
import questions from "./assets/data/imageMulatipleChoiceQuestions";
// Styles
import styles from "./App.styles";

const App = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(
    questions[currentQuestionIndex]
  );

  useEffect(() => {
    if (currentQuestionIndex >= questions.length) {
      Alert.alert("You won");
      setCurrentQuestionIndex(0);
    } else {
      setCurrentQuestion(questions[currentQuestionIndex]);
    }
  }, [currentQuestionIndex]);

  const onCorrect = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const onWrong = () => {
    Alert.alert("Wrong");
  };

  return (
    <View style={styles.root}>
      <ImageMultipleChoiceQuestion
        question={currentQuestion}
        onCorrect={onCorrect}
        onWrong={onWrong}
      />
    </View>
  );
};

export default App;
