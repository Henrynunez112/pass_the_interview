//Linear Logarithmic Θ(N*log(N))

const mergeSort = (arr) => {
  let length = arr.length;
  if (length === 1) return arr;

  let mid = Math.floor(length / 2);
  let leftSide = arr.slice(0, mid);
  let rightSide = arr.slice(mid, length);
  return merge(mergeSort(leftSide), mergeSort(rightSide));
};

const merge = (left, right) => {
  let sortedArray = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sortedArray.push(left[0]);
      left.shift();
    } else {
      sortedArray.push(right[0]);
      right.shift();
    }
  }

  return [...sortedArray, ...left, ...right];
};
const inputArr = [3, 5, 2, 90, 4, 7];
console.log(mergeSort(inputArr));

module.exports = { mergeSort };
