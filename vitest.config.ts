import path from "path";
import { defineConfig } from "vite";

const resolvedPath = path.resolve(__dirname, "src");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [],
  resolve: {
    alias: {
      "~/": `${resolvedPath}/`,
    }
  }
});
