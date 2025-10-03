// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "gradient-slow": {
          "0%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
          "100%": { "background-position": "0% 50%" },
        },
      },
      animation: {
        "gradient-slow": "gradient-slow 5s ease infinite",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".perspective": { perspective: "1000px" },
        ".backface-hidden": { "backface-visibility": "hidden" },
        ".rotate-y-180": { transform: "rotateY(180deg)" },
        ".transform-style-preserve-3d": { "transform-style": "preserve-3d" },
      });
    },
  ],
};
