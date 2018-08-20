import getUpperIndexes from './lib/getUpperIndexes'
import getLowerIndexes from './lib/getLowerIndexes'
import getRightIndexes from './lib/getRightIndexes'
import getLeftIndexes from './lib/getLeftIndexes'
import getUpperRightIndexes from './lib/getUpperRightIndexes'
import getUpperLeftIndexes from './lib/getUpperLeftIndexes'
import getLowerRightIndexes from './lib/getLowerRightIndexes'
import getLowerLeftIndexes from './lib/getLowerLeftIndexes'
import getIndex from './util/getIndex'

export { getIndex }

export const getChangableIndexes = (i, j, nextDisc, discs) => {
  const changableIndexes = []
  if (discs[getIndex(i, j)] !== 0) {
    return changableIndexes
  }
  Array.prototype.push.apply(changableIndexes, getUpperIndexes(i, j, nextDisc, discs));
  Array.prototype.push.apply(changableIndexes, getLowerIndexes(i, j, nextDisc, discs));
  Array.prototype.push.apply(changableIndexes, getRightIndexes(i, j, nextDisc, discs));
  Array.prototype.push.apply(changableIndexes, getLeftIndexes(i, j, nextDisc, discs));
  Array.prototype.push.apply(changableIndexes, getUpperRightIndexes(i, j, nextDisc, discs));
  Array.prototype.push.apply(changableIndexes, getUpperLeftIndexes(i, j, nextDisc, discs));
  Array.prototype.push.apply(changableIndexes, getLowerRightIndexes(i, j, nextDisc, discs));
  Array.prototype.push.apply(changableIndexes, getLowerLeftIndexes(i, j, nextDisc, discs));
  return changableIndexes
}
