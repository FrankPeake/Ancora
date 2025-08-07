import { StyleSheet, Text, TextInput, View } from "react-native"
import React from "react"

interface CustomInputProps {
  value: string
  placeholder?: string
  secure?: boolean
  setValue: (value: string) => void
}

export default function CustomInput({
  value,
  placeholder,
  secure,
  setValue,
}: CustomInputProps) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={setValue}
        secureTextEntry={secure}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: "100%",
    paddingHorizontal: 10,
    borderRadius: 5,
    borderColor: "#e8e8e8",
    marginVertical: 10,
  },
  input: {},
})
