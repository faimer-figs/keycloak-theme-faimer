import { i18nBuilder } from "keycloakify/login";
import type { ThemeName } from "../kc.gen";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { useI18n, ofTypeI18n } = i18nBuilder
    .withThemeName<ThemeName>()
    .withCustomTranslations({
        en: {
            "doLogIn": "Log in",
            "doForgotPassword": "Lost password?",
        }
    })
    .build();

type I18n = typeof ofTypeI18n;

export { useI18n, type I18n };
