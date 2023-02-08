/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  prefix : "" ,
  content: [
    "./config/*.json",
    "./layout/*.liquid",
    "./assets/*.liquid",
    "./sections/*.liquid",
    "./snippets/*.liquid",
    "./templates/*.liquid",
    "./templates/*.json",
    "./templates/customers/*.liquid",
  ],
  purge : {
    enabled : true ,
    
},

  plugins: [],
};

