import { defineConfig, presetIcons, presetWebFonts, presetUno } from 'unocss'

export default defineConfig({
  theme: {
    colors: {
      cBackground: '#0D1117',
      cPrimary: '#28303F',
      cSecondary: '#65768A',
      cTextPrimary: '#ABB5C1',
      cTextSecondary: '#E5ECFF'
    }
  },
  safelist: [
    'text-right',
    'text-center',
    'text-left',
    'font-inter',
    'font-roboto',
    'font-montserrat'
  ],
  presets: [
    presetUno(),
    presetWebFonts({
      provider: 'google',
      fonts: {
        inter: 'Inter',
        roboto: 'Roboto',
        montserrat: 'Montserrat'
      }
    }),
    presetIcons({
      cdn: 'https://esm.sh/',
      extraProperties: {
        display: 'inline-block',
        'vertical-align': 'middle'
      }
    })
  ]
})
