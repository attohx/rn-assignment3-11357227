import { Text, View, ScrollView, TextInput, StyleSheet, Button, FlatList, Image, } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "left",
      }}
    >
      <Text>Hello Devs, </Text>

      <Text>Categories</Text>

      <Text>Ongoing</Text>

      <TextInput>Text Input</TextInput>

      <FlatList>Hi</FlatList>

      <Image></Image>


    </View>
  );
}
