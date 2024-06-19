import { ScrollView, View, Text } from "react-native";
import DiscoverItem from "./DiscoverItem";
// import homeImg from "@/assets/images/house.png";
// K1: you should never include images like this to bundle
// these should be served via responsible api server
// but we will be simulating that via node and serve
// fake images for development

// const discoverImages = [homeImg, homeImg, homeImg, homeImg, homeImg, homeImg];
const discoverImages = [];

const DiscoverList = () => (
  <View className="flex-[4]">
    {/* TITLE */}
    <Text className="text-xl pb-1">Discover New Locations</Text>

    <ScrollView
      contentContainerStyle={{
        justifyContent: "space-between",
        flexDirection: "row",
        flexWrap: "wrap",
        marginVertical: 8,
      }}
    >
      {discoverImages.map((image, index) => (
        <DiscoverItem key={index} image={image} location="toronto" />
      ))}
    </ScrollView>
  </View>
);

export default DiscoverList;
