import React, { useState } from "react";
import { Text, View, ScrollView, Image, TextInput } from "react-native";
// Components
import ImageOption from "./src/components/ImageOption";
import Button from "./src/components/Button";
// Assets
import icon from "./assets/icon.png";
// Data
import question from "./assets/data/oneQuestionWithOption";
// Styles
import styles from "./App.styles";

const App = () => {
  const [selected, setSelected] = useState(null);

  const onButtonPress = () => {
    console.warn("Pressed");
  };

  return (
    <View style={styles.root}>
      <Text style={styles.title}>{question.question}</Text>

      <View style={styles.optionsContainer}>
        {question.options.map((option) => (
          <ImageOption
            key={option.id}
            image={option.image}
            text={option.text}
            isSelected={selected?.id === option.id}
            onPress={() => setSelected(selected === option ? null : option)}
          />
        ))}
      </View>

      <Button
        text="Check"
        onPress={onButtonPress}
        disabled={selected === null}
      />
    </View>
  );
};

export default App;
