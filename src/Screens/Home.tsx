import React, { useState } from "react";
import { View } from "react-native";
import Tela1 from "./Tela1";
import Tela2 from "./Tela2";

export default function Home() {
  const [mostrarForm, setMostrarForm] = useState(false);

  return (
    <View style={{ flex: 1 }}>
      {!mostrarForm ? (
        <Tela1 onNext={() => setMostrarForm(true)} />
      ) : (
        <Tela2 />
      )}
    </View>
  );
}
