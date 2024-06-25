import React, { useState } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import HomeFeaturedItem from "./(home)/components/HomeFeaturedItem/HomeFeaturedItem";
import HomeFilterBar from "./(home)/components/HomeFilterBar/HomeFilterBar";
import HomeSearchBar from "./(home)/components/HomeSearchBar/HomeSearchBar";
import { styles } from "./(home)/components/Home/Home.styles";
import HomeDiscoverList from "./(home)/components/HomeDiscoverList/HomeDiscoverList";

const items = ["house", "apartment", "townhouse", "duplex", "triplex"];

const HomeScreen = () => {
	const [activeItem, setActiveItem] = useState<string>(items[0]);
	const [searchTerm, setSearchTerm] = useState<string>("");

	const searchHandler = (text: string) => {
		setSearchTerm(text);
	};

	return (
		<SafeAreaProvider>
			<SafeAreaView style={styles.safeAreaProvider}>
				<HomeSearchBar onChangeText={searchHandler} />
				<HomeFilterBar items={items} activeItem={activeItem} setActiveItem={setActiveItem} />
				<HomeFeaturedItem />
				<HomeDiscoverList />
			</SafeAreaView>
		</SafeAreaProvider>
	);
};

export default HomeScreen;
