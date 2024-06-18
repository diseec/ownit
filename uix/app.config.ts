import { ExpoConfig, ConfigContext } from "expo/config";

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: "OwnIt",
  slug: "ownit",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/images/icon.png",
  scheme: "ownit",
  userInterfaceStyle: "automatic",
  splash: {
    image: "./assets/images/splash.png",
    resizeMode: "contain",
    backgroundColor: "#ffffff",
  },
  assetBundlePatterns: ["**/*"],
  ios: {
    supportsTablet: true,
    bundleIdentifier: "app.ownit",
  },
  android: {
    package: "app.ownit",
    adaptiveIcon: {
      foregroundImage: "./assets/images/adaptive-icon.png",
      backgroundColor: "#ffffff",
    },
  },
  web: {
    bundler: "metro",
    output: "static",
    favicon: "./assets/images/favicon.png",
  },
  plugins: ["expo-router"],
  experiments: {
    typedRoutes: true,
  },
  extra: {
    eas: {
      projectId: "8a3af64a-5ed5-45be-a07c-0b9fc699ae17",
    },
    API_URL: process.env.API_URL,
  },
  updates: {
    url: "https://u.expo.dev/8a3af64a-5ed5-45be-a07c-0b9fc699ae17",
  },
  runtimeVersion: "1.0.0",
});
