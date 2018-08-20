import getIndex from '../util/getIndex'

export default (i, j, nextDisc, discs) => {
  let lowerLeftIndexes = []
  lowerLeftIndexes = setLowerLeft(lowerLeftIndexes, i, j, nextDisc, discs)
  return lowerLeftIndexes
}

const setLowerLeft = (lowerLeftIndexes, i, j, nextDisc, discs) => {
  if (i >= 8 || j <= 0) {
    lowerLeftIndexes.splice(0, lowerLeftIndexes.length)
    return lowerLeftIndexes
  }

  const lowerLeftIndex = getIndex(i + 1, j - 1)
  const lowerLeftDisc = discs[lowerLeftIndex]

  if (lowerLeftDisc === 0) {
    lowerLeftIndexes.splice(0, lowerLeftIndexes.length)
    return lowerLeftIndexes
  }

  if (lowerLeftDisc === nextDisc) {
    return lowerLeftIndexes
  }

  lowerLeftIndexes.push(lowerLeftIndex);
  lowerLeftIndexes = setLowerLeft(lowerLeftIndexes, i + 1, j - 1, nextDisc, discs)
  return lowerLeftIndexes
}
