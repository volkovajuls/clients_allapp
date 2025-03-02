
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';

import React from 'react';

export default function FieldComp({
  title,
  placeholder,
  multiline,
  value,
  onChangeText,
}) {
  
  return (
    <KeyboardAvoidingView>
      <View style={styles.personalContainer}>
        <View style={styles.nameContainer}>
          <Text style={styles.nameText}>{title}</Text>
        </View>
        <View>
          <TextInput
            style={multiline ? styles.inputMulty : styles.input}
            onChangeText={onChangeText}
            value={value}
            placeholder={placeholder}
            multiline={multiline ? true : false}
          />
          
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  personalContainer: {
    marginTop: 24,
    marginHorizontal: 24,
  },
  nameContainer: {
    paddingLeft: 16,
    paddingVertical: 2,
  },
  nameText: {
    fontSize: 16,
    fontWeight: 500,
    paddingVertical: 2.5,
  },
  input: {
    height: 48,
    paddingVertical: 13,
    paddingHorizontal: 16,
    borderRadius: 16,
    flex:1,
    backgroundColor: '#F6F6F6',
    placeholderTextColor: '#A3A3A3',
  },
  inputMulty: {
    height: 92,
    paddingVertical: 12,
    paddingRight: 20,
    paddingLeft: 16,
    borderRadius: 16,
    backgroundColor: '#F6F6F6',
    placeholderTextColor: '#A3A3A3',
    lineHeight: 24,
    letterSpacing: -0.2,
  },
});
