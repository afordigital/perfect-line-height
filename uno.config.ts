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
  presets: [
    presetUno(),
    presetWebFonts({
      provider: 'google',
      fonts: {}
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
