import { View, Text, Image, SafeAreaView} from "react-native";
import React from "react";
import { responsiveHeight } from "react-native-responsive-dimensions";
import { SliderBox } from "react-native-image-slider-box";
const HomeBanner = () => {
  const images = [
    "https://e1.pxfuel.com/desktop-wallpaper/572/62/desktop-wallpaper-live-preview-billie-eilish-happier-than-ever-tour-dates-announced-billie-eilish-happier-than-ever.jpg",
    "https://www.billieeilish.com/files/2023/07/3200x18002-compressed-1536x864.jpg",
    "https://shopca.billieeilish.com/cdn/shop/files/BE-0132-_Store-Reskin_Music-Products-Desktop-Banner.png?v=1682440061",
  ];
  return (
    <SafeAreaView
      style={{ 
        paddingTop: Platform.OS === "android" ? -3 : 0,
        flex: 1,
        backgroundColor: "while",  
        top: 20,
        right: 10,
       }}
    >
          <SliderBox
          images={images}
          autoplay
          circleLoop
          dotColor="#13274F"
          inactiveDotColor="#90A4AE"
          ImageComponentStyle={{ width: "100%", resizeMode: 'cover' }}
          sliderBoxHeight={200}
          resizeMode={'cover'}
          autoplayInterval={5000}
          paginationBoxStyle={{
            position: "absolute",
            bottom: 0,
            padding: 0,
            alignItems: "center",
            alignSelf: "center",
            justifyContent: "center",
            paddingVertical: 10,
          }}
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 5,
            marginHorizontal: 0,
            padding: 0,
            margin: 0,
            backgroundColor: "rgba(128, 128, 128, 0.92)",
          }}
        />
    </SafeAreaView>
  );
};

export default HomeBanner;

