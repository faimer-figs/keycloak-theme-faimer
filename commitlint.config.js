export default {
    extends: ["@commitlint/config-conventional"],
    rules: {
        "type-enum": [
            2,
            "always",
            [
                "build",
                "chore",
                "ci",
                "docs",
                "feat",
                "fix",
                "perf",
                "refactor",
                "revert",
                "style",
                "test"
            ]
        ],
        "type-case": [2, "always", "lower-case"],
        "subject-case": [2, "always", "lower-case"],
        "subject-empty": [2, "never"],
        "type-empty": [2, "never"],
        "subject-full-stop": [2, "never", "."],
        "header-max-length": [2, "always", 72]
    }
};