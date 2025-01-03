import { lazy, Suspense } from "react";
import type { ClassKey } from "keycloakify/login";
import type { KcContext } from "./KcContext";
import { useI18n } from "./i18n";
import DefaultPage from "keycloakify/login/DefaultPage";
import Template from "keycloakify/login/Template";
import "./theme.css";

const UserProfileFormFields = lazy(
    () => import("keycloakify/login/UserProfileFormFields")
);
const Login = lazy(() => import("./pages/Login"));
const LoginResetPassword = lazy(() => import("./pages/LoginResetPassword"));
const LoginVerifyEmail = lazy(() => import("./pages/LoginVerifyEmail"));
const LoginUpdatePassword = lazy(() => import("./pages/LoginUpdatePassword"));
const LogoutConfirm = lazy(() => import("./pages/LogoutConfirm"));

const doMakeUserConfirmPassword = true;

const classes = {
    kcBodyClass: "kcBodyClass",
    kcFormCardClass: "kcFormCardClass",
    kcInputClass: "kcInputClass",
    kcButtonClass: "kcButtonClass",
    kcHeaderClass: "kcHeaderClass",
    kcHeaderWrapperClass: "kcHeaderWrapperClass",
    kcFormPasswordVisibilityButtonClass: "kcFormPasswordVisibilityButtonClass"
} satisfies { [key in ClassKey]?: string };

export default function KcPage(props: { kcContext: KcContext }) {
    const { kcContext } = props;
    const { i18n } = useI18n({ kcContext });

    return (
        <Suspense>
            {(() => {
                switch (kcContext.pageId) {
                    case "login.ftl":
                        return (
                            <Login
                                kcContext={
                                    kcContext as Extract<
                                        KcContext,
                                        { pageId: "login.ftl" }
                                    >
                                }
                                i18n={i18n}
                                doUseDefaultCss={true}
                                Template={Template}
                                classes={classes}
                            />
                        );

                    case "login-reset-password.ftl":
                        return (
                            <LoginResetPassword
                                kcContext={
                                    kcContext as Extract<
                                        KcContext,
                                        { pageId: "login-reset-password.ftl" }
                                    >
                                }
                                i18n={i18n}
                                doUseDefaultCss={true}
                                Template={Template}
                                classes={classes}
                            />
                        );

                    case "login-update-password.ftl":
                        return (
                            <LoginUpdatePassword
                                kcContext={
                                    kcContext as Extract<
                                        KcContext,
                                        { pageId: "login-update-password.ftl" }
                                    >
                                }
                                i18n={i18n}
                                doUseDefaultCss={true}
                                Template={Template}
                                classes={classes}
                            />
                        );

                    case "login-verify-email.ftl":
                        return (
                            <LoginVerifyEmail
                                kcContext={
                                    kcContext as Extract<
                                        KcContext,
                                        { pageId: "login-verify-email.ftl" }
                                    >
                                }
                                i18n={i18n}
                                doUseDefaultCss={true}
                                Template={Template}
                                classes={classes}
                            />
                        );
                    case "logout-confirm.ftl":
                        return (
                            <LogoutConfirm
                                kcContext={
                                    kcContext as Extract<
                                        KcContext,
                                        { pageId: "logout-confirm.ftl" }
                                    >
                                }
                                i18n={i18n}
                                doUseDefaultCss={true}
                                Template={Template}
                                classes={classes}
                            />
                        );
                    default:
                        return (
                            <DefaultPage
                                kcContext={kcContext}
                                i18n={i18n}
                                classes={classes}
                                Template={Template}
                                doUseDefaultCss={true}
                                UserProfileFormFields={UserProfileFormFields}
                                doMakeUserConfirmPassword={doMakeUserConfirmPassword}
                            />
                        );
                }
            })()}
        </Suspense>
    );
}
