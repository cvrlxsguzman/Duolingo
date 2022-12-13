import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  Pressable,
  Keyboard,
  SafeAreaView,
} from "react-native";
import PropTypes, { string } from "prop-types";
// Styles
import styles from "./styles";
// Assets
import mascot from "../../../assets/images/mascot.png";
// Components
import Button from "../Button";

const OpenEndedQuestion = ({ question, onCorrect, onWrong }) => {
  const [input, setInput] = useState("");
  const onButtonPress = () => {
    if (question.answer.toLowerCase().trim() === input.toLowerCase().trim()) {
      onCorrect();
    } else {
      onWrong();
    }
  };

  return (
    <>
      <Pressable onPress={() => Keyboard.dismiss()} style={styles.container}>
        <SafeAreaView style={styles.safeArea}>
          <Text style={styles.title}>Translate this sentence</Text>
          <View style={styles.row}>
            <Image source={mascot} style={styles.mascot} resizeMode="contain" />
            <View style={styles.sentenceContainer}>
              <Text style={styles.sentence}>{question.text}</Text>
            </View>
          </View>
          <TextInput
            value={input}
            onChangeText={setInput}
            placeholder="Type in english"
            style={styles.textInput}
            textAlignVertical="top"
            multiline
          />

          <Button text="Check" onPress={onButtonPress} disabled={false} />
        </SafeAreaView>
      </Pressable>
    </>
  );
};

OpenEndedQuestion.prototypes = {
  question: PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
  }),
};

export default OpenEndedQuestion;
