import React, { useState } from "react";
import { View, Button, StyleSheet } from "react-native";
import BatTextInput from "../BatTextInput/BatTextInput";
import BatButton from "../BatButton/BatButton";

export default function BatForm() {
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    localizacao: "",
    observacao: ""
  });

  const handleChange = (campo: string, valor: string) => {
    setFormData({ ...formData, [campo]: valor });
  };

  const handleSubmit = () => {
    console.log("Dados enviados:", formData);
    alert("Dados enviados!");
  };

  return (
    <View style={styles.container}>
      <BatTextInput
        label="Nome"
        value={formData.nome}
        onChangeText={(text) => handleChange("nome", text)}
      />
      <BatTextInput
        label="Telefone"
        value={formData.telefone}
        onChangeText={(text) => handleChange("telefone", text)}
      />
      <BatTextInput
        label="Localização"
        value={formData.localizacao}
        onChangeText={(text) => handleChange("localizacao", text)}
      />
      <BatTextInput
        label="Observação"
        value={formData.observacao}
        onChangeText={(text) => handleChange("observacao", text)}
        multiline
      />

      <BatButton text="Enviar" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "90%"
  }
});
