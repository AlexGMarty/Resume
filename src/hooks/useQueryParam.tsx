export function useQueryParam(param: string): boolean {
  // Get the raw pathname and search from window.location
  const { pathname, search } = window.location;

  // Create URLSearchParams from the search string
  const searchParams = new URLSearchParams(search);

  // Check if the parameter exists in the current search params
  if (searchParams.has(param)) {
    return true;
  }

  // If not found, check if the parameter might be in the pathname
  // This handles cases where the URL got transformed
  // e.g., /Resume?assembled -> /Resume/?assembled
  const paths = pathname.split("/");
  for (const path of paths) {
    if (path.includes("?")) {
      const pathParams = new URLSearchParams(path.substring(path.indexOf("?")));
      if (pathParams.has(param)) {
        return true;
      }
    }
  }

  return false;
}
