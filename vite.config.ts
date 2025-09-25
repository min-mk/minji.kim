export default defineConfig(({ mode }) => ({
  base: "/", // ✅ custom domain이면 무조건 루트
  ...
}));
