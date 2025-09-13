import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import BatForm from "../Components/BatForm/BatForm";

export default function Tela2() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <BatForm />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    justifyContent: "center"
  }
});
