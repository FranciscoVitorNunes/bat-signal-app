import React from "react";
import { ScrollView, StyleSheet, Image } from "react-native";
import BatForm from "../Components/BatForm/BatForm";
import BatLogo from "../Components/BatLogo/BatLogo";

export default function Tela2() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={{ uri: "https://imgs.search.brave.com/JP7nkIwt8JKjN9rEDGPedNTIh9QE6qrQ4AQu28ECePk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZnJlZXBuZ2xvZ29z/LmNvbS91cGxvYWRz/L3llbGxvdy1ibGFj/ay1iYXRtYW4tbG9n/by1wbmctMi5wbmc" }}
        style={{ width: 90, height: 60, marginBottom: 20 }}
      />
      <BatForm />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  }
});
