import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

import { styles } from "./BatTextInputStyles"

interface Props {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  multiline?: boolean;
}

export default function BatTextInput({ label, value, onChangeText, multiline = false }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={[styles.input, multiline && styles.textArea]}
        value={value}
        onChangeText={onChangeText}
        multiline={multiline}
      />
    </View>
  );
}
