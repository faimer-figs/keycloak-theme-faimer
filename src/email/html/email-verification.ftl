<#import "template.ftl" as layout>
<@layout.emailLayout>
    <p>${msg("emailVerificationBodyIntro")}</p>

    <p><a href="${link}">${msg("emailVerificationLinkText")}</a></p>

    <p>${msg("emailVerificationExpiry", linkExpirationFormatter(linkExpiration))}</p>

    <p>${msg("emailVerificationIgnore")}</p>

    <p>
        <strong style="color: #31355a">${msg("organizationName")}</strong><br/>
        <em style="color: #31355a">${msg("organizationTagline")}</em><br/>
        <a href="mailto:${msg('organizationEmail')}" style="color: #2e7d32; text-decoration: underline;">${msg("organizationEmail")}</a>
    </p>
</@layout.emailLayout>
