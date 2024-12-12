import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { keycloakify } from "keycloakify/vite-plugin";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        keycloakify({
            accountThemeImplementation: "none",
            keycloakifyBuildDirPath: "./build_theme",
            groupId: "com.ozonehis",
            artifactId: "ozone-faimer-keycloak-theme"
        })
    ]
});
