import { StyleSheet, Text, Pressable } from "react-native"
import React from "react"

interface CustomButtonProps {
  buttonPress: () => void
  type: "PRIMARY" | "SECONDARY" | "TERTIARY"
  text: string
}

export default function CustomButton({ buttonPress, type, text }: CustomButtonProps) {

 const containerStyle = [
    styles.container,
    type === "PRIMARY" && styles.containerPRIMARY,
    type === "SECONDARY" && styles.containerSECONDARY,
    type === "TERTIARY" && styles.containerTERTIARY,
 ]
  return (
    <Pressable onPress={buttonPress} style={[styles.container, styles[`container${type}`]]}>
      <Text style={[styles.text, styles[`text${type}`]]}>{text}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 15,
    borderRadius: 5,
    marginVertical: 5,
    alignItems: "center",
  },
  containerPRIMARY: {
    backgroundColor: "#3B71F3",
  },
    containerSECONDARY: {
    backgroundColor: "white",
    borderColor: "#3B71F3",
    borderWidth: 2,
  },
    containerTERTIARY: {
    borderColor: "#3B71F3",
  },
  text: {
    fontWeight: "bold",
    color: "white",
  },
  textPRIMARY: {
    color: "white",
  },
  textSECONDARY: {
    color: "#3B71F3",
  },
  textTERTIARY: {
    color: "#3B71F3",
  },
})
