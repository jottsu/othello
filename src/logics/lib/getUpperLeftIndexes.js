import getIndex from '../util/getIndex'

export default (i, j, nextDisc, discs) => {
  let upperLeftIndexes = []
  upperLeftIndexes = setUpperLeft(upperLeftIndexes, i, j, nextDisc, discs)
  return upperLeftIndexes
}

const setUpperLeft = (upperLeftIndexes, i, j, nextDisc, discs) => {
  if (i <= 1, j <= 1) {
    upperLeftIndexes.splice(0, upperLeftIndexes.length)
    return upperLeftIndexes
  }

  const upperLeftIndex = getIndex(i - 1, j - 1)
  const upperLeftDisc = discs[upperLeftIndex]

  if (upperLeftDisc === 0) {
    upperLeftIndexes.splice(0, upperLeftIndexes.length)
    return upperLeftIndexes
  }

  if (upperLeftDisc === nextDisc) {
    return upperLeftIndexes
  }

  upperLeftIndexes.push(upperLeftIndex);
  upperLeftIndexes = setUpperLeft(upperLeftIndexes, i - 1, j - 1, nextDisc, discs)
  return upperLeftIndexes
}
