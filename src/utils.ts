export const calculateLineHeight = (size: number) => {
  const baseFontSize = 16
  const baseLineHeight = 1.5
  const minLineHeight = 1
  const maxLineHeight = 2

  const lineHeight = baseLineHeight / (size / baseFontSize) - 0.1

  const limitedLineHeight = Math.max(
    minLineHeight,
    Math.min(lineHeight, maxLineHeight)
  )

  return { fontSize: size, lineHeight: limitedLineHeight }
}
