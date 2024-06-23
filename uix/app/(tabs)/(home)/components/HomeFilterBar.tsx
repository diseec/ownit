import React from "react";
import { ScrollView, TouchableOpacity, Text } from "react-native";

interface HomeFilterBarProps {
	items: string[];
	activeItem: string;
	setActiveItem: (item: string) => void;
}

const HomeFilterBar = ({ items, activeItem, setActiveItem }: HomeFilterBarProps) => (
	<ScrollView horizontal className="flex-row flex-[0.5] space-x-2 pb-1">
		{items.map((item, index) => (
			<TouchableOpacity
				key={index}
				onPress={() => setActiveItem(item)}
				className={`px-4 h-10 justify-center rounded-full ${
					activeItem === item ? "bg-slate-800" : "bg-white"
				}`}
			>
				<Text className={`capitalize ${activeItem === item ? "text-white" : "text-gray-400"}`}>
					{item}
				</Text>
			</TouchableOpacity>
		))}
	</ScrollView>
);

export default HomeFilterBar;
