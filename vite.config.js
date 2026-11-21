
import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        home: resolve(__dirname, "index.html"),
        company: resolve(__dirname, "company.html"),
        products: resolve(__dirname, "products.html"),
        board: resolve(__dirname, "board.html"),
        investors: resolve(__dirname, "investors.html"),
        contact: resolve(__dirname, "contact.html"),
        conduct: resolve(__dirname, "conduct.html"),
        financial: resolve(__dirname, "financial.html"),
        meetings: resolve(__dirname, "meetings.html"),
        notices: resolve(__dirname, "notices.html"),
        policies: resolve(__dirname, "policies.html"),
        shareholding: resolve(__dirname, "shareholding.html")
      }
    }
  }
});
