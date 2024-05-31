import { View, TextInput, Text } from "react-native";

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
    <Text className="absolute right-4 top-4">icon</Text>
    <Text className="absolute left-4 top-4">icon</Text>
  </View>
);

export default SearchBar;
