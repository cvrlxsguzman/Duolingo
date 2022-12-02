import React from "react";
import { Text, View, ScrollView, Image, TextInput } from "react-native";
// Components
import ImageOption from "./src/components/ImageOption";
// Assets
import icon from "./assets/icon.png";
// Styles
import styles from "./App.styles";

const App = () => {
  const status = "error";

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Which of these is "the glass"?</Text>

      <View style={styles.optionsContainer}>
        <ImageOption
          image="https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/glass.png"
          text="Glass"
        />
        <ImageOption
          image="https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png"
          text="Cup"
        />
      </View>
    </View>
  );
};

export default App;
