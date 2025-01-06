<#import "template.ftl" as layout>
<@layout.emailLayout>
    <h2>${msg("emailVerificationTitle")}</h2>

    <p>${msg("emailVerificationBodyIntro")}</p>

    <a href="${link}" class="button">
        ${msg("emailVerificationLinkText")}
    </a>

    <p>${msg("emailVerificationExpiry", linkExpirationFormatter(linkExpiration))}</p>

    <p>${msg("emailVerificationIgnore")}</p>
</@layout.emailLayout>
