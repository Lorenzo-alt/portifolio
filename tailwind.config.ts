import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class', 
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)'],
      },
      backgroundImage: {
        'bg-original': "url('/bg-original.png')",
        'bg-mobile': "url('/bg-mobile.png')",
      },
      colors: {
        "branco-padrao": '#FAFAFA',
        "branco-secondario": "#F1F1F1",
        "branco-terciario": "#E7E7E7",
        "branco-quaternario": '#D9D9D9',
        "azul-padrao": '#3384DB',
        "fundo-navbar": '#2D2D2D50',
        "fundo-painel": "#272727",
        "fundo-painel-hover": "#353535",
        "fundo-contato": '#484848',
        "grad-0": "#56565640",
        "grad-1": "#27272740",
        "grad-input-0": "#B0B0B070",
        "grad-input-1": "#94949470"
      }
    },
  },
  plugins: [
  ],
};
export default config;
