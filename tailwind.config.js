module.exports = {
  content: [
    './src/**/*.{html,js,ts}',
    './index.html',
  ],
  theme: {
    extend: {
      borderRadius: {
        'customRounded': '20px',
      },
      colors: {
        primary: '#290742',      // Cor roxa escura
        secondary: '#4FFF4B',    // Cor verde limão para os detalhes
        tertiary: '#9E6DC2',     // Cor lilás para texto
        detailColor: '#170027',  // Cor de fundo do input de busca
        containerColor: '#290742', //cor para os containers
        gray: {
          light: '#f7f7f7',      // Fundo dos posts
          dark: '#333',          // Texto escuro
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
        'opacity': 'opacity',   // Adicionando transição para opacidade
        'transform': 'transform', // Adicionando transição para transformações
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'ping-slow': 'ping 3s cubic-bezier(0, 0, 0.2, 1) infinite',
        'fadeIn': 'fadeIn 2s ease-in forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      boxShadow: {
        'custom-light': '0 0 15px rgba(0, 0, 0, 0.1)',
        'custom-heavy': '0 0 25px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
};
