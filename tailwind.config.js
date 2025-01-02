/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#3f4373",
                secondary: "#FFFFFF",
                lightBlue: "#61C8D7"
            },
            spacing: {
                128: "32rem"
            }
        }
    },
    plugins: []
};
