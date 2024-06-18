import Constants from "expo-constants";
/**
 * Private environment variable reader
 * @param key
 * @param fallback
 * @returns
 */

export default function (
  key: string,
  fallback: string | number | null = null
): string {
  return String(
    process?.env?.[key] ??
      (Constants.expoConfig as any)?.extra?.[key] ??
      fallback
  );
}
