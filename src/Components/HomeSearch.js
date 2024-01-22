import { View, Text, TextInput } from "react-native";
import { responsiveHeight } from "react-native-responsive-dimensions";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";

const HomeSearch = () => {
  const navigation = useNavigation();
  const [key, setKey] = useState("");
  const handleBlurSearch = () => {
    navigation.navigate("Search", { q: key });
  };
  return (
    <View
      style={{
        backgroundColor: "#DDDDDD",
        height: responsiveHeight(6.5),
        borderRadius: 20,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 20,
        gap: 10,
      }}
    >
      <FontAwesome name="search" size={24} color="black" />
      <TextInput 
      onBlur={handleBlurSearch}
        onChangeText={(text) => setKey(text)}

        value={key}
         style={{ flex: 1 }} placeholder="Search Store" />
    </View>
  );
};

export default HomeSearch;
