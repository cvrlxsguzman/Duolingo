import React from "react";
import { Image, Text, View, Pressable } from "react-native";
import PropTypes from "prop-types";
// Styles
import styles from "./styles";

const ImageOption = ({ image, resizeMode, text, isSelected, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.optionContainer,
        isSelected ? styles.selectedContainer : {},
      ]}
    >
      <Image
        source={{
          uri: image,
        }}
        resizeMode={resizeMode ? resizeMode : "contain"}
        style={styles.optionImage}
      />
      <Text style={isSelected ? styles.selectedText : styles.optionText}>
        {text}
      </Text>
    </Pressable>
  );
};

ImageOption.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  resizeMode: PropTypes.string,
  isSelected: PropTypes.bool,
  onPress: PropTypes.func,
};

ImageOption.defaultProps = {
  resizeMode: "contain",
  text: "Default",
  isSelected: false,
  onPress: () => {},
};

export default ImageOption;
