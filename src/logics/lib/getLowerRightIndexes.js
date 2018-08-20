import getIndex from '../util/getIndex'

export default (i, j, nextDisc, discs) => {
  let lowerRightIndexes = []
  lowerRightIndexes = setLowerRight(lowerRightIndexes, i, j, nextDisc, discs)
  return lowerRightIndexes
}

const setLowerRight = (lowerRightIndexes, i, j, nextDisc, discs) => {
  if (i >= 8 || j > 8) {
    lowerRightIndexes.splice(0, lowerRightIndexes.length)
    return lowerRightIndexes
  }

  const lowerRightIndex = getIndex(i + 1, j + 1)
  const lowerRightDisc = discs[lowerRightIndex]

  if (lowerRightDisc === 0) {
    lowerRightIndexes.splice(0, lowerRightIndexes.length)
    return lowerRightIndexes
  }

  if (lowerRightDisc === nextDisc) {
    return lowerRightIndexes
  }

  lowerRightIndexes.push(lowerRightIndex);
  lowerRightIndexes = setLowerRight(lowerRightIndexes, i + 1, j + 1, nextDisc, discs)
  return lowerRightIndexes
}
