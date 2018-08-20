import getIndex from '../util/getIndex'

export default (i, j, nextDisc, discs) => {
  let rightIndexes = []
  rightIndexes = setRight(rightIndexes, i, j, nextDisc, discs)
  return rightIndexes
}

const setRight = (rightIndexes, i, j, nextDisc, discs) => {
  if (j >= 8) {
    rightIndexes.splice(0, rightIndexes.length)
    return rightIndexes
  }

  const rightIndex = getIndex(i, j + 1)
  const rightDisc = discs[rightIndex]

  if (rightDisc === 0) {
    rightIndexes.splice(0, rightIndexes.length)
    return rightIndexes
  }

  if (rightDisc === nextDisc) {
    return rightIndexes
  }

  rightIndexes.push(rightIndex);
  rightIndexes = setRight(rightIndexes, i, j + 1, nextDisc, discs)
  return rightIndexes
}
