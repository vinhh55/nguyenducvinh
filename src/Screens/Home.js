import { View, Text, Image,ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import HomeIcon from "../Components/HomeIcon";
import HomeSearch from "../Components/HomeSearch";
import HomeBanner from "../Components/HomeBanner";
import ProductsTile from "../Components/ProductsTile";
import ProductsCarousel from "../Components/ProductsCarousel";
import { Other, fruits, vegetables } from "../Utils/Date";
import Home2 from "../Components/Home2";
import Home1 from "../Components/Home1";
import HomeIcon1 from "../Components/HomeIcon1";
 

const Home = () => {
  return (
    <ScrollView style={{backgroundColor:"#FFFFFF"}}>
    <SafeAreaView style={{ paddingHorizontal: 10, paddingTop: 10,backgroundColor:"while" }}>
      <HomeIcon />
      <HomeSearch/>
      <HomeBanner/>
      <HomeIcon1 />
      <ProductsTile title="T-shirt"/>
      <ProductsCarousel data={fruits}/>
      <Home1/>
      <ProductsTile title="Music                "/>
      <ProductsCarousel data={vegetables}/>
      <Home2/>
      <ProductsTile title="Other products "/>
      <ProductsCarousel data={Other}/>
    </SafeAreaView>
    </ScrollView>
  );
};
export default Home;
