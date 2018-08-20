import getIndex from '../util/getIndex'

export default (i, j, nextDisc, discs) => {
  let lowerIndexes = []
  lowerIndexes = setLower(lowerIndexes, i, j, nextDisc, discs)
  return lowerIndexes
}

const setLower = (lowerIndexes, i, j, nextDisc, discs) => {
  if (i >= 8) {
    lowerIndexes.splice(0, lowerIndexes.length)
    return lowerIndexes
  }

  const lowerIndex = getIndex(i + 1, j)
  const lowerDisc = discs[lowerIndex]

  if (lowerDisc === 0) {
    lowerIndexes.splice(0, lowerIndexes.length)
    return lowerIndexes
  }

  if (lowerDisc === nextDisc) {
    return lowerIndexes
  }

  lowerIndexes.push(lowerIndex);
  lowerIndexes = setLower(lowerIndexes, i + 1, j, nextDisc, discs)
  return lowerIndexes
}
