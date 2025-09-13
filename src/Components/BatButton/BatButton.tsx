import React from 'react';
import { Pressable, Text } from 'react-native';

import { styles } from './BatButtonStyles';

interface Buttontext{
    text: string
}

export function BatButton(props: Buttontext) {
  return (
    <Pressable style={styles.button}>
      <Text style={styles.text}>{props.text}</Text>
    </Pressable>
  );
}