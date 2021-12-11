const HUE_STEPS = 10
const HUE_STEP_SIZE = 360 / HUE_STEPS

export default function genBoardState() {
  const saturation = rnd(50, 100)
  const lightness = rnd(35, 75)
  const hues = [...Array(HUE_STEPS)]
    .map((_, i) => makeColor(i*HUE_STEP_SIZE, saturation, lightness))
  const palette = []
  const cellColors = []

  for (let i = 0; i < 6; i++) {
    palette.push(hues.splice(rnd(0, hues.length), 1)[0])
  }

  for (let i = 0; i < 9; i++) {
    cellColors.push(palette[rnd(0, hues.length)])
  }

  return cellColors
}

function rnd(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}

function makeColor(hue, saturation, lightness) {
  return `hsl(${hue}, ${saturation}%, ${lightness}%)`
}
