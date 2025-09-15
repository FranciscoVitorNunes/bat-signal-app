# 🦇 Bat Form App

Aplicativo simples em **React Native + Expo + TypeScript** que demonstra:
- Uso de componentes reutilizáveis.
- Exibição condicional de telas.
- Formulário com campos personalizados.

---

## 🚀 Funcionalidades
- Tela inicial com **logo + botão**.
- Ao clicar no botão, o **logo e botão somem**, exibindo o **formulário**.
- Formulário pede:
  - Nome
  - Telefone para contato
  - Localização atual
  - Observação

---

## 📂 Estrutura do Projeto
```
bat-signal-app/
│── App.tsx                 # Ponto de entrada -> chama Home
│── assets/
│   ├── logo.png            # Logo do app 
├── src/
│   ├── screens/
│   │   ├── Home.tsx        # Controla a lógica -> alterna Tela1 e Tela2
│   │   ├── Tela1.tsx       # Exibe logo + botão
│   │   ├── Tela2.tsx       # Exibe formulário
│   │
│   ├── components/
│   │   ├── BatButton.tsx       # Botão reutilizável (texto via props)
│   │   ├── BatLogo.tsx         # Componente de imagem + botão
│   │   ├── BatTextInput.tsx    # Label + TextInput (para formulário)
│   │   ├── BatForm.tsx         # Monta o formulário com vários BatTextInput
│   │
├── arquivos de configuração (package.json, tsconfig.json, etc.)
```

---

## ▶️ Como rodar
1. Clone este repositório:
   ```bash
   git clone https://github.com/FranciscoVitorNunes/bat-signal-app.git
   cd bat-signal-app
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run start
   ```

4. Abra o app **Expo Go** no celular e escaneie o QR Code.

---

## 🛠️ Tecnologias usadas
- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [TypeScript](https://www.typescriptlang.org/)

---

## ✨ Telas

### Tela 1
- Exibe a **logo**.
- Exibe o **botão** que, ao ser clicado, abre o formulário.

### Tela 2
- Exibe o **formulário** com campos de entrada personalizados.

---

## 📌 Observações
Este projeto é apenas um **exemplo didático** de organização em **React Native** com **componentes reutilizáveis**.
