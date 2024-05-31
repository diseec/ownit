import { View, Image, Text, TouchableOpacity } from "react-native";
import homeImg from "../assets/images/house.png";
import { Ionicons } from "@expo/vector-icons";

const FeaturedItem = () => (
  <View className="my-2 flex-[3] mb-3.5">
    {/* IMAGE */}
    <Image source={homeImg} resizeMode="cover" className="w-full h-full rounded-[30px] relative" />

    {/* FAVORITE BUTTON */}
    <TouchableOpacity className="absolute top-3 right-3 bg-white rounded-full w-12 h-12 flex items-center justify-center">
      <Ionicons name="heart" size={22} color="red" />
    </TouchableOpacity>

    {/* INFO */}
    <View
      style={{
        shadowColor: "#5559",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 3.84,
        elevation: 1.5,
      }}
      className="absolute bg-white justify-between bottom-0 w-full flex-row py-2 px-4 rounded-3xl"
    >
      <View className="flex-col space-y-1 flex-1">
        {/* TITLE */}
        <Text className="flex-wrap">Inner Sunset, San Francisco, CA</Text>

        {/* RATE */}
        <View className="flex-row space-x-1.5">
          <View>
            <Text>icon 4.9</Text>
          </View>
          <View>
            <Text className="text-gray-400">10.2k Review</Text>
          </View>
        </View>
      </View>

      {/* PRICE */}
      <View className="items-center justify-center">
        <View className="flex-row items-center flex-1">
          <Text className="text-xl">$1200</Text>
          <Text className="text-gray-400 text-xs">/month</Text>
        </View>
      </View>
    </View>
  </View>
);

export default FeaturedItem;
