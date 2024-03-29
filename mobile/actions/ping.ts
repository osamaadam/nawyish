export async function ping(url: string | URL) {
  url = new URL("/api", url);
  const response = await fetch(url);
  return response?.status === 200;
}
