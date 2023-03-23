/**
 * @type {import('@types/tailwindcss/tailwind-config').TailwindConfig}
 */
module.exports = {
  purge: ["./src/**/*.{js,ts,jsx,tsx}"],
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [],
  theme: {
    extend: {
      fontSize: {
        t1: [
          "3rem",
          {
            lineHeight: "3.1rem",
            fontWeight: "bold",
          },
        ],
        t2: [
          "2.7rem",
          {
            lineHeight: "2.9rem",
            fontWeight: "bold",
          },
        ],
        t3: [
          "2rem",
          {
            lineHeight: "2rem",
            fontWeight: "bold",
          },
        ],
        t4: [
          "1.1rem",
          {
            lineHeight: "1.3rem",
            fontWeight: "bold",
          },
        ],
        t5: [
          "1rem",
          {
            lineHeight: "1.2rem",
            fontSize: "bold",
          },
        ],
      },
      colors: {
        primary: "#E83646",
        secondary: "#E4D375",
        grey1: "#f3f3f3",

        secondary_light: "#ffd800",
      },
    },
  },
};
