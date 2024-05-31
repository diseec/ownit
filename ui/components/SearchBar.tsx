import { View, TextInput, Text } from "react-native";
import { Feather } from "@expo/vector-icons";

interface SearchBarProps {
  onChangeText: (text: string) => void;
}

const SearchBar = ({ onChangeText }: SearchBarProps) => (
  <View className="relative my-4">
    <TextInput
      placeholder="Search house, apartment..."
      onChangeText={onChangeText}
      className="bg-white rounded-full pl-14 py-3 shadow shadow-gray-400"
    />
    <View className="absolute left-4 top-3.5">
      <Feather name="search" size={24} color="black" />
    </View>
    <Text className="absolute right-4 top-4">btn</Text>
  </View>
);

export default SearchBar;
