import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

import { styles } from "./BatButtonStyles"

interface Props {
  text: string;
  onPress: () => void;
}

export default function BatButton({ text, onPress }: Props) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

