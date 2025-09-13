import React from "react";
import { View, StyleSheet } from "react-native";
import BatLogo from "../Components/BatLogo/BatLogo";

interface Props {
  onNext: () => void;
}

export default function Tela1({ onNext }: Props) {
  return (
    <View style={styles.container}>
      <BatLogo
        imageSize={120}
        buttonText="Ativar Bat Sinal"
        onPress={onNext}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
