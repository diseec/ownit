import React from "react";
import { RootSiblingParent } from "react-native-root-siblings";
import { Provider } from "react-redux";
import { store } from "@/hooks/stores";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import Colors from "@/constants/Colors";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Redirect } from "@/utils/router";
export {
	// Catch any errors thrown by the Layout component.
	ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
	// Ensure that reloading on `/modal` keeps a back button present.
	initialRouteName: "(tabs)",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
	const [loaded, error] = useFonts({
		SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
		...FontAwesome.font,
	});

	// Expo Router uses Error Boundaries to catch errors in the navigation tree.
	useEffect(() => {
		if (error) throw error;
	}, [error]);

	useEffect(() => {
		if (loaded) {
			SplashScreen.hideAsync();
		}
	}, [loaded]);

	if (!loaded) {
		return null;
	}

	return <RootLayoutNav />;
}

function RootLayoutNav() {
	const colorScheme = useColorScheme();

	const MyDarkTheme = {
		...DarkTheme,
		colors: {
			...DarkTheme.colors,
			background: Colors.dark.background,
		},
	};

	const MyDefaultTheme = {
		...DefaultTheme,
		colors: {
			...DefaultTheme.colors,
			background: Colors.light.background,
		},
	};

	return (
		<Provider store={store}>
			<RootSiblingParent>
				<ThemeProvider value={colorScheme === "dark" ? MyDarkTheme : MyDefaultTheme}>
					<Stack screenOptions={{}}>
						<Stack.Screen
							name="(tabs)"
							options={{
								headerShown: false,
							}}
						/>
						<Stack.Screen name="modal" options={{ presentation: "modal" }} />
					</Stack>
				</ThemeProvider>
			</RootSiblingParent>
		</Provider>
	);
}
