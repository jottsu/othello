import getIndex from '../util/getIndex'

export default (i, j, nextDisc, discs) => {
  let upperIndexes = []
  upperIndexes = setUpper(upperIndexes, i, j, nextDisc, discs)
  return upperIndexes
}

const setUpper = (upperIndexes, i, j, nextDisc, discs) => {
  if (i <= 1) {
    upperIndexes.splice(0, upperIndexes.length)
    return upperIndexes
  }

  const upperIndex = getIndex(i - 1, j)
  const upperDisc = discs[upperIndex]

  if (upperDisc === 0) {
    upperIndexes.splice(0, upperIndexes.length)
    return upperIndexes
  }

  if (upperDisc === nextDisc) {
    return upperIndexes
  }

  upperIndexes.push(upperIndex);
  upperIndexes = setUpper(upperIndexes, i - 1, j, nextDisc, discs)
  return upperIndexes
}
