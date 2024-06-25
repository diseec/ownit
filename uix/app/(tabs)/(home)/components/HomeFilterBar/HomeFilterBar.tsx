import React from "react";
import { ScrollView, TouchableOpacity, Text, StyleSheet } from "react-native";
import { styles } from "./HomeFilterBar.styles";

interface HomeFilterBarProps {
	items: string[];
	activeItem: string;
	setActiveItem: (item: string) => void;
}

const HomeFilterBar = ({ items, activeItem, setActiveItem }: HomeFilterBarProps) => (
	<ScrollView horizontal style={styles.scrollView}>
		{items.map((item, index) => (
			<TouchableOpacity
				key={index}
				onPress={() => setActiveItem(item)}
				style={[styles.item, activeItem === item ? styles.itemActive : styles.itemInactive]}
			>
				<Text style={activeItem === item ? styles.textActive : styles.textInactive}>{item}</Text>
			</TouchableOpacity>
		))}
	</ScrollView>
);

export default HomeFilterBar;
