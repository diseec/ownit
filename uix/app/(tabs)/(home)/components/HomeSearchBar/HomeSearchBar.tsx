import React from "react";
import { View, TextInput, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import { styles } from "./HomeSearchBar.styles";

interface HomeSearchBarProps {
	onChangeText: (text: string) => void;
}

const HomeSearchBar = ({ onChangeText }: HomeSearchBarProps) => (
	<View style={styles.container}>
		<TextInput
			placeholder="Search house, apartment..."
			onChangeText={onChangeText}
			style={styles.input}
		/>
		<View style={styles.searchIcon}>
			<Feather name="search" size={24} color="black" />
		</View>
		<Text style={styles.buttonText}>btn</Text>
	</View>
);

export default HomeSearchBar;
