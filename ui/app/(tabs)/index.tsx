import { useState } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import SearchBar from "../../components/SearchBar";
import FilterBar from "../../components/FilterBar";
import FeaturedItem from "../../components/FeaturedItem";
import DiscoverList from "../../components/DiscoverList";

const items = ["house", "apartment", "townhouse", "duplex", "triplex"];

const HomeScreen = () => {
  const [activeItem, setActiveItem] = useState<string>(items[0]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const searchHandler = (text: string) => {
    setSearchTerm(text);
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 bg-slate-50 px-4 pt-4">
        <SearchBar onChangeText={searchHandler} />
        <FilterBar items={items} activeItem={activeItem} setActiveItem={setActiveItem} />
        <FeaturedItem />
        <DiscoverList />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default HomeScreen;
