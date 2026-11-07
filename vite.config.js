import { defineConfig } from "vite";

// Site estatico: index.html na raiz; termos, privacidade, imagens, CSS e JS em public/ (copiados sem alteracao).
export default defineConfig({
  server: { host: "::", port: 8080 },
});
