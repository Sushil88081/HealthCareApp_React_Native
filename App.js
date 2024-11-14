import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import HomeScreens from "./src/screens/homeScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello world this is sushil kumkdnqdqkn</Text>
      <HomeScreens />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-end",
    justifyContent: "center",
  },
});
