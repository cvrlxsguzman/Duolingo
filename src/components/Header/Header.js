import React from "react";
import { Text, View, Image } from "react-native";
// Styles
import styles from "./styles";
// Components
import ProgressBar from "../ProgressBar";
// Assets
import heart from "../../../assets/images/heart.png";

const Header = ({ progress, lives }) => {
  return (
    <View style={styles.container}>
      <ProgressBar progress={progress} />

      <Image source={heart} style={styles.icon} resizeMode="contain" />
      <Text style={styles.lives}>{lives}</Text>
    </View>
  );
};

export default Header;
