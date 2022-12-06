import React, { useState } from "react";
import { Alert, Text, View } from "react-native";
import PropTypes from "prop-types";
// Styles
import styles from "./styles";
// Components
import ImageOption from "../ImageOption";
import Button from "../Button";

const ImageMultipleChoiceQuestion = ({ question, onCorrect, onWrong }) => {
  const [selected, setSelected] = useState(null);
  const onButtonPress = () => {
    if (selected.correct) {
      // Move on to the next question
      onCorrect();
      setSelected(null);
    } else {
      onWrong();
    }
  };

  return (
    <>
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
    </>
  );
};

ImageMultipleChoiceQuestion.prototypes = {
  question: PropTypes.shape({
    question: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        text: PropTypes.string,
        image: PropTypes.string,
        correct: PropTypes.bool,
      })
    ).isRequired,
  }).isRequired,
};

export default ImageMultipleChoiceQuestion;
