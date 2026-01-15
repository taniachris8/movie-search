export function withFallback(
  value: string | undefined | null,
  fallback = "Information is not available"
) {
  if (!value || value === "N/A") {
    return fallback;
  }
  return value;
}
