<#import "template.ftl" as layout>
<@layout.emailLayout>
    <h2>${msg("passwordResetTitle")}</h2>

    <p>${msg("passwordResetBodyIntro")}</p>

    <a href="${link}" class="button">
        ${msg("passwordResetButtonText")}
    </a>

    <p>${msg("emailVerificationExpiry", linkExpirationFormatter(linkExpiration))}</p>

    <p>${msg("passwordResetIgnore")}</p>

    <p style="color: #666666; font-size: 13px;">
        ${msg("passwordResetSecurity")}
    </p>
</@layout.emailLayout>
