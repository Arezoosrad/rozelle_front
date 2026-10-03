export function useRozelleApi() {
  const config = useRuntimeConfig()
  return $fetch.create({
    baseURL: config.public.apiBase,
    credentials: "include",
    headers: { Accept: "application/json" }
  })
}
