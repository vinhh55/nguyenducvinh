import { View, Text, Image } from "react-native";
import React from "react";
import { responsiveHeight } from "react-native-responsive-dimensions";

const Home1 = () => {
  return (
    <View>
      <Image 
        style={{
          height: responsiveHeight(15),
          marginTop: 15,
          alignSelf: "center",
          borderRadius: 15,
          height:150,
          width: 450,
        }}
        source={require("../assets/7.jpg")}
      />
    </View>
  );
};

export default Home1;
