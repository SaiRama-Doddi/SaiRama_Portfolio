module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {},
    },
    plugins: [],
    corePlugins: {
      preflight: false, // Enable this if styles are conflicting
    },
    safelist: [
      'after:content-[""]' // Ensure Tailwind includes this class
    ],
  };
  