const HUE_STEPS = 12
const HUE_STEP_SIZE = 360 / HUE_STEPS

export default function genBoardState() {
  const saturation = rnd(50, 100)
  const lightness = rnd(35, 75)
  const hues = [...Array(HUE_STEPS)]
    .map((_, i) => makeColor(i*HUE_STEP_SIZE, saturation, lightness))
  const palette = []
  const colorSet = []

  for (let i = 0; i < 6; i++) {
    palette.push(hues.splice(rnd(0, hues.length), 1)[0])
  }

  for (let i = 0; i < 9; i++) {
    colorSet.push(rnd(0, 6))
  }
  return {palette, colorSet}
}

function rnd(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}

function makeColor(hue, saturation, lightness) {
  return `hsl(${hue}, ${saturation}%, ${lightness}%)`
}
