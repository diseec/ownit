import React from "react";
import { useState } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import HomeDiscoverList from "./components/HomeDiscoverList";
import HomeFeaturedItem from "./components/HomeFeaturedItem";
import HomeFilterBar from "./components/HomeFilterBar";
import HomeSearchBar from "./components/HomeSearchBar";

// K1: i didnt apply the naming convention i leave it you its author!

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
				<HomeSearchBar onChangeText={searchHandler} />
				<HomeFilterBar items={items} activeItem={activeItem} setActiveItem={setActiveItem} />
				<HomeFeaturedItem />
				<HomeDiscoverList />
			</SafeAreaView>
		</SafeAreaProvider>
	);
};

export default HomeScreen;
