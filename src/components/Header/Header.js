import React from "react";
import { Text, View } from "react-native";
// Styles
import styles from "./styles";
// Components
import ProgressBar from "../ProgressBar";

const Header = ({ progress }) => {
  return (
    <View style={styles.container}>
      <ProgressBar progress={progress} />
    </View>
  );
};

export default Header;
