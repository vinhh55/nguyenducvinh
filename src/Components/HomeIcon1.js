import { StyleSheet,
    Text,
    View,
    SafeAreaView,
    Platform,
    ScrollView,
    Pressable,
    TextInput,
    Image } from "react-native";
  import React from "react";
  
  const HomeIcon1 = () => {
    const list = [
      {
        id: "0",
        image: "https://merch-billieeilish.com/wp-content/uploads/2023/11/12.png",
        name: "NEW",
      },
      {
        id: "1",
        image:"https://store.billieeilish.com/cdn/shop/products/BEHTESuperDeluxe_1024x1024.png?v=1629225721",
        name: "MUSIC",
      },
      {
        id: "3",
        image:
          "https://store.billieeilish.com/cdn/shop/products/WTPO_Doll_Box_1024x1024.png?v=1614144064",
        name: "TOY",
      },
      {
        id: "4",
        image:
          "https://store.billieeilish.com/cdn/shop/files/necklaceinbox_1024x1024.png?v=1689959041",
        name: "Phụ Kiện",
      },
      {
        id: "5",
        image:
          "https://store.billieeilish.com/cdn/shop/products/phonecase_1024x1024.png?v=1655950912",
        name: "Khác",
      },
    ];
    return (
      <SafeAreaView
        style={{
          paddingTop: Platform.OS === "android" ? -3 : 0,
          flex: 1,
          backgroundColor: "while",
          top: 20,
        }}
      >
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {list.map((item, index) => (
                <Pressable
                  key={index}
                  style={{
                    margin: 18,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    style={{ width: 50, height: 50, resizeMode: "contain" }}
                    source={{ uri: item.image }}
                  />
  
                  <Text
                    style={{
                      textAlign: "center",
                      fontSize: 12,
                      fontWeight: "500",
                      marginTop: 5,
                    }}
                  >
                    {item?.name}
                  </Text>
                </Pressable>
              ))}
             </ScrollView>
      </SafeAreaView>
    );
  };
  
  export default HomeIcon1;
  