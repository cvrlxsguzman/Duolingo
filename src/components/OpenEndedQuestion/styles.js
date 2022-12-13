import { StyleSheet } from "react-native";
import * as Constants from "constants";

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    alignSelf: "stretch",
  },
  container: {
    paddingTop: Constants.statusBarHeight,

    alignSelf: "stretch",
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    alignSelf: "flex-start",
  },
  row: {
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",

    margin: 10,
    marginBottom: 0,
  },
  mascot: {
    width: "30%",
    aspectRatio: 3 / 4,
    marginRight: 10,
  },
  sentenceContainer: {
    borderWidth: 1,
    borderColor: "lightgrey",
    borderRadius: 5,
    padding: 10,
  },
  sentence: {
    fontSize: 16,
  },
  textInput: {
    backgroundColor: "rgba(0, 0, 0, 0.05)",
    alignSelf: "stretch",
    flex: 1,
    borderWidth: 1,
    borderColor: "lightgrey",
    borderRadius: 10,
    padding: 10,
    fontSize: 16,
  },
});

export default styles;
