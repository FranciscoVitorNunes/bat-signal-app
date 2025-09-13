import React from "react";
import { View, Image, StyleSheet } from "react-native";
import BatButton from "../BatButton/BatButton";

interface Props {
  imageSize: number;
  buttonText: string;
  onPress: () => void;
}

export default function BatLogo({ imageSize, buttonText, onPress }: Props) {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://imgs.search.brave.com/JP7nkIwt8JKjN9rEDGPedNTIh9QE6qrQ4AQu28ECePk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZnJlZXBuZ2xvZ29z/LmNvbS91cGxvYWRz/L3llbGxvdy1ibGFj/ay1iYXRtYW4tbG9n/by1wbmctMi5wbmc" }}
        style={{ width: 190, height: imageSize, marginBottom: 70 }}
      />
      <BatButton text={buttonText} onPress={onPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center"
  }
});
