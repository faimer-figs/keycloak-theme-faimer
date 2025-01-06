<p align="center">
    <i>🚀 <a href="https://keycloakify.dev">Keycloakify</a> Custom Theme for FAIMER EMR 🚀</i>
    <br/>
    <br/>
</p>

# FAIMER EMR Keycloak Theme

Custom Keycloak theme built for FAIMER EMR authentication using Keycloakify. This theme provides branded login, account
management, and email templates aligned with FAIMER's design system.

## Installation

```bash
git clone git@github.com:faimer-figs/keycloak-theme-faimer.git
cd keycloak-theme-faimer
npm install
```

## Development

### Setup Mock Keycloak Instance

In `src/main.ts`, uncomment:

```typescript
import { getKcContextMock } from "./login/KcPageStory";  // Change the import as needed

if (import.meta.env.DEV) {
    window.kcContext = getKcContextMock({
        pageId: "login.ftl", // Change pageId as needed
        overrides: {}
    });
}
```

### Run Development Server

```bash
npm run dev
npm run storybook  # View page stories
```

### Add New Components

```bash
npx keycloakify add-story   # Generate screen story
npx keycloakify eject-page  # Eject page TSX
```

### Add Email Templates

1. Create file in `src/email/html` (e.g. `email-verification.ftl`)
2. Import `template.ftl`
3. Add message keys for locales (en, es, fr, km)

## Build

### Prerequisites

- Maven ≥3.1.1
- Java ≥7

Install Maven:

```bash
brew install maven              # macOS
sudo apt-get install maven      # Debian/Ubuntu
choco install openjdk maven     # Windows
```

### Build Theme

```bash
npm run build-keycloak-theme
```

## Additional Features

Initialize themes:

```bash
npx keycloakify initialize-account-theme
npx keycloakify initialize-email-theme
```

### GitHub Actions

- Builds theme and publishes jars as release artifacts
- Release: Update `package.json` version and push
- Enable: Settings > Actions > Workflow permissions > "Read and write permissions"

## Documentation

- [Testing locally](https://docs.keycloakify.dev/testing-your-theme)
- [Customization](https://docs.keycloakify.dev/customization-strategies)
- [Version targeting](https://docs.keycloakify.dev/targeting-specific-keycloak-versions)

A Webpack-based starter is available
at [keycloakify-starter-webpack](https://github.com/keycloakify/keycloakify-starter-webpack).
