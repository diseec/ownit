import React, { useEffect } from "react";
import { Link, Tabs } from "@/utils/router";
import { useColors } from "@/hooks/useColors";
import { StyleSheet, Text } from "@/components/Wrapped";
import Sizes from "@/constants/Sizes";
import TabBar from "@/components/Layout/TabBar";
import { useSizes } from "@/hooks/useSizes";

const tabs = [
	{
		name: "home",
		icon: "home",
		// href: "/(tabs)/(home)/index",
		headerShown: false,
	},
	{
		name: "(profile)",
		icon: "cafe",
		// href: "/(tabs)/profile",
	},
	{
		name: "(favorites)",
		icon: "heart",
		href: null, // hide the button
	},
];

export default function TabLayout() {
	const s = useSizes();
	return (
		<Tabs tabBar={(props) => <TabBar tabs={tabs} props={props} />} initialRouteName="home">
			{tabs.map(({ name, icon, ...options }) => (
				<Tabs.Screen
					key={name}
					name={name}
					options={{
						lazy: false,
						headerShown: false,
						...options,
					}}
				/>
			))}
		</Tabs>
	);
}
