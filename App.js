import React from "react";
import { Text, View, ScrollView, Image, TextInput } from "react-native";
// Components
import ImageOption from "./src/components/ImageOption";
// Assets
import icon from "./assets/icon.png";
// Data
import question from "./assets/data/oneQuestionWithOption";
// Styles
import styles from "./App.styles";

const App = () => {
  const status = "error";

  return (
    <View style={styles.root}>
      <Text style={styles.title}>{question.question}</Text>

      <View style={styles.optionsContainer}>
        {question.options.map((option) => (
          <ImageOption
            key={option.id}
            image={option.image}
            text={option.text}
          />
        ))}
      </View>
    </View>
  );
};

export default App;
