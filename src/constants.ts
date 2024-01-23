export const MODE = {
  LEFT: 'left',
  CENTER: 'center',
  RIGHT: 'right'
} as const
export type ModeView = (typeof MODE)[keyof typeof MODE]

export const MODE_VIEW_TO_ALIGNMENT = {
  [MODE.LEFT]: 'text-left',
  [MODE.CENTER]: 'text-center',
  [MODE.RIGHT]: 'text-right'
}

export const TYPOGRAPHY = {
  INTER: 'inter',
  ROBOTO: 'roboto',
  MONTSERRAT: 'montserrat'
} as const
export type Typography = (typeof TYPOGRAPHY)[keyof typeof TYPOGRAPHY]

export const TYPOGRAPHY_TO_FONT = {
  [TYPOGRAPHY.INTER]: 'font-inter',
  [TYPOGRAPHY.ROBOTO]: 'font-roboto',
  [TYPOGRAPHY.MONTSERRAT]: 'font-montserrat'
}
