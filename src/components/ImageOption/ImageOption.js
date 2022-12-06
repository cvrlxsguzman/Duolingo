import React from "react";
import { Image, Text, View } from "react-native";
import PropTypes from "prop-types";
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

ImageOption.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  resizeMode: PropTypes.string,
};

ImageOption.defaultProps = {
  resizeMode: "contain",
  text: "Default",
};

export default ImageOption;
