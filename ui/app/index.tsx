// import React, { useState } from "react";
// import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
// import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
// import homeImg from "../assets/images/house.png";

// const items = ["house", "apartment", "townhouse", "duplex", "triplex"];
// const discoverImages = [homeImg, homeImg, homeImg, homeImg, homeImg, homeImg];

// const HomeScreen = () => {
//   const [activeItem, setActiveItem] = useState(items[0]);

//   return (
//     <SafeAreaProvider>
//       <SafeAreaView className="flex-1 bg-slate-50 p-4">
//         {/* Search */}
//         <View className="relative my-4">
//           <TextInput
//             placeholder="Search house, apartment..."
//             onChangeText={(text) => console.log("text: ", text)}
//             className="bg-white rounded-full pl-14 py-3 shadow shadow-gray-400"
//           />

//           <Text className="absolute right-4 top-4">icon</Text>
//           <Text className="absolute left-4 top-4">icon</Text>
//         </View>

//         {/* Navbar */}
//         <ScrollView horizontal className="flex-row flex-[0.5] space-x-2 pb-2">
//           {items.map((item, index) => (
//             <TouchableOpacity
//               key={index}
//               onPress={() => setActiveItem(item)}
//               className={`px-4 py-2.5 rounded-full ${
//                 activeItem === item ? "bg-slate-800" : "bg-white"
//               }`}
//             >
//               <Text
//                 className={`text-white capitalize ${
//                   activeItem === item ? "text-white" : "text-gray-400"
//                 }`}
//               >
//                 {item}
//               </Text>
//             </TouchableOpacity>
//           ))}
//         </ScrollView>

//         {/* Featured */}
//         <View className="my-2 flex-[3] mb-3">
//           <Image
//             source={homeImg}
//             resizeMode="cover"
//             className="w-full h-full rounded-[30px] relative"
//           />

//           {/* Favorite button */}
//           <View className="absolute top-3 right-3 bg-white rounded-full w-12 h-12 flex items-center justify-center">
//             <Text>icon</Text>
//           </View>

//           {/* Info */}
//           <View
//             style={{
//               shadowColor: "#555",
//               shadowOffset: { width: 0, height: 2 },
//               shadowOpacity: 0.5,
//               shadowRadius: 3.84,
//               elevation: 1,
//             }}
//             className="absolute bg-white justify-between bottom-0 w-full flex-row py-2 px-4 rounded-3xl"
//           >
//             <View className="flex-col space-y-1 flex-1">
//               {/* Place */}
//               <Text className="flex-wrap">Inner Sunset, San Francisco, CA</Text>
//               {/* Rate */}
//               <View className="flex-row space-x-1.5">
//                 {/* star */}
//                 <View>
//                   <Text>icon 4.9</Text>
//                 </View>
//                 {/* review */}
//                 <View>
//                   <Text className="text-gray-400">10.2k Review</Text>
//                 </View>
//               </View>
//             </View>
//             <View className="items-center justify-center">
//               {/* Rent */}
//               <View className="flex-row items-center flex-1">
//                 <Text className="text-xl">$1200</Text>
//                 <Text className="text-gray-400 text-xs">/month</Text>
//               </View>
//             </View>
//           </View>
//         </View>

//         {/* Discover */}
//         <View className="flex-[4]">
//           {/* Title */}
//           <Text className="text-xl pb-2">Discover New Locations</Text>

//           <ScrollView
//             contentContainerStyle={{
//               justifyContent: "space-between",
//               flexDirection: "row",
//               flexWrap: "wrap",
//               marginVertical: 8,
//             }}
//           >
//             {discoverImages.map((image, index) => (
//               <View key={index} className="w-[49%] h-48 mb-3 relative">
//                 <Image
//                   source={image}
//                   resizeMode="cover"
//                   className="w-full h-full rounded-3xl relative"
//                 />

//                 {/* Tag place  */}
//                 <View
//                   style={{ backgroundColor: "rgba(90, 90, 90, 0.3)" }}
//                   className="absolute top-3 left-3 rounded-3xl"
//                 >
//                   <Text className="capitalize text-white text-xs px-4 py-2">toronto</Text>
//                 </View>
//               </View>
//             ))}
//           </ScrollView>
//         </View>
//       </SafeAreaView>
//     </SafeAreaProvider>
//   );
// };

// export default HomeScreen;
import { useState } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import SearchBar from "../components/SearchBar";
import FilterBar from "../components/FilterBar";
import FeaturedItem from "../components/FeaturedItem";
import DiscoverList from "../components/DiscoverList";

const items = ["house", "apartment", "townhouse", "duplex", "triplex"];

const HomeScreen = () => {
  const [activeItem, setActiveItem] = useState<string>(items[0]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const searchHandler = (text: string) => {
    setSearchTerm(text);
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 bg-slate-50 p-4">
        <SearchBar onChangeText={searchHandler} />
        <FilterBar items={items} activeItem={activeItem} setActiveItem={setActiveItem} />
        <FeaturedItem />
        <DiscoverList />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default HomeScreen;
