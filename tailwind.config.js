// tailwind.config.js
module.exports = {
    content: ["./src/*/.{html,js}"], // Specify the paths to all of your template files
    theme: {
      extend: {
        colors: {
          customBlue: '#1fb6ff',
          customPink: '#ff49db',
        },
        spacing: {
          '128': '32rem',
        },
      },
    },
    plugins: [],
  }