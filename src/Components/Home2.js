import { View, Text, Image } from "react-native";
import React from "react";
import { responsiveHeight } from "react-native-responsive-dimensions";

const Home2 = () => {
  return (
    <View>
      <Image
        style={{
          height: responsiveHeight(15),
          marginTop: 15,
          alignSelf: "center",
          borderRadius: 15,
          height:50,
          width: 345,
        }}
        source={require("../assets/6.jpg")}
      />
    </View>
  );
};

export default Home2;
