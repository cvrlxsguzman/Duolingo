import React from "react";
import { Image, Text, View } from "react-native";
// Styles
import styles from "./styles";

const ImageOption = ({ image, resizeMode, text }) => {
  return (
    <View style={styles.optionContainer}>
      <Image
        source={{
          uri: image,
        }}
        resizeMode={resizeMode ? resizeMode : "contain"}
        style={styles.optionImage}
      />
      <Text style={styles.optionText}>{text}</Text>
    </View>
  );
};

export default ImageOption;
