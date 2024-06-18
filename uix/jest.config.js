module.exports = {
  roots: [
    "<rootDir>/app",
    "<rootDir>/components",
    "<rootDir>/utils",
    "<rootDir>/hooks",
    "<rootDir>/value_objects",
    "<rootDir>/constants",
    "<rootDir>/models",
  ],
  preset: "jest-expo",
  testMatch: [
    "**/__tests__/**/*.+(ts|tsx|js|jsx)",
    "**/?(*.)+(spec|test).+(ts|tsx|js|jsx)",
  ],
  transformIgnorePatterns: [
    "node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg|react-redux)",
  ],
  // transform: {
  //   "^.+\\.(ts|tsx)$": "babel-jest",
  //   "^.+\\.(ts|tsx)$": [
  //     "ts-jest",
  //     {
  //       useESM: true,
  //       tsconfig: "tsconfig.json",
  //     },
  //   ],
  // },
};
