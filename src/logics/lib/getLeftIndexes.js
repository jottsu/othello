import getIndex from '../util/getIndex'

export default (i, j, nextDisc, discs) => {
  let leftIndexes = []
  leftIndexes = setLeft(leftIndexes, i, j, nextDisc, discs)
  return leftIndexes
}

const setLeft = (leftIndexes, i, j, nextDisc, discs) => {
  if (j <= 1) {
    leftIndexes.splice(0, leftIndexes.length)
    return leftIndexes
  }

  const leftIndex = getIndex(i, j - 1)
  const leftDisc = discs[leftIndex]

  if (leftDisc === 0) {
    leftIndexes.splice(0, leftIndexes.length)
    return leftIndexes
  }

  if (leftDisc === nextDisc) {
    return leftIndexes
  }

  leftIndexes.push(leftIndex);
  leftIndexes = setLeft(leftIndexes, i, j - 1, nextDisc, discs)
  return leftIndexes
}
