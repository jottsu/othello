import getIndex from '../util/getIndex'

export default (i, j, nextDisc, discs) => {
  let upperRightIndexes = []
  upperRightIndexes = setUpperRight(upperRightIndexes, i, j, nextDisc, discs)
  return upperRightIndexes
}

const setUpperRight = (upperRightIndexes, i, j, nextDisc, discs) => {
  if (i <= 1, j >= 8) {
    upperRightIndexes.splice(0, upperRightIndexes.length)
    return upperRightIndexes
  }

  const upperRightIndex = getIndex(i - 1, j + 1)
  const upperRightDisc = discs[upperRightIndex]

  if (upperRightDisc === 0) {
    upperRightIndexes.splice(0, upperRightIndexes.length)
    return upperRightIndexes
  }

  if (upperRightDisc === nextDisc) {
    return upperRightIndexes
  }

  upperRightIndexes.push(upperRightIndex);
  upperRightIndexes = setUpperRight(upperRightIndexes, i - 1, j + 1, nextDisc, discs)
  return upperRightIndexes
}
