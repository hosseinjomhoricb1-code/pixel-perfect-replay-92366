// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Vite's dev/preview servers reject requests whose Host header isn't recognised
// ("Blocked request. This host (...) is not allowed."). The Lovable wrapper merges
// everything under `vite` into its own config via mergeConfig, and it only strips
// server.headers/cors/proxy in the sandbox — `server.allowedHosts` is preserved.
// Entries match exactly, or a leading "." allows that domain and its subdomains.
// The preview server inherits server.allowedHosts, so this covers `vite preview` too.
const ALLOWED_HOSTS = ["sb-32t71t097aw2.vercel.run"];

export default defineConfig({
  vite: {
    server: {
      allowedHosts: ALLOWED_HOSTS,
    },
  },
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
});
