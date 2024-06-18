import dictionary from "@/lang/tr.json";

const DEFAULT_LOCALE = "en";

export function __(
  message: string,
  params: Record<string, string> = {}
): string {
  let locale = "tr";

  let string =
    !Boolean(locale) || locale === DEFAULT_LOCALE
      ? message
      : (dictionary as any)[message] ??
        (dictionary as any)[message?.toLocaleLowerCase?.()] ??
        message;

  for (let param in params)
    string = string.replace(`:${param}`, __(params[param]));

  return string;
}

export function __c(message: string, params?: Record<string, string>) {
  let string = __(message, params);
  return string.charAt(0).toUpperCase() + string.slice(1);
}
