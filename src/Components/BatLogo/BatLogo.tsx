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
        source={{ uri: "./../../../assets/bat-logo.png" }}
        style={{ width: imageSize, height: imageSize, marginBottom: 20 }}
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
