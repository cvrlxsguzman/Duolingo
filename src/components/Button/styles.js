import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#58CC02",
    height: 50,
    marginVertical: 10,

    alignSelf: "stretch",
    // width: "100%",
    justifyContent: "center",
    alignItems: "center",

    // Borders
    borderRadius: 5,
    borderBottomWidth: 5,
    borderColor: "#57A600",
  },
  disabledContainer: {
    backgroundColor: "lightgrey",
    borderColor: "gray",
  },
  text: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",

    borderColor: "white",
    borderBottomWidth: 1.5,
  },
});

export default styles;
