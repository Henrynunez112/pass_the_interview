const quicksort = (arr, leftBound = 0, rightBound = arr.length - 1) =>{
    if(leftBound < rightBound){
        const pivotIndex = partition(arr, leftBound, rightBound)
        quicksort(arr, leftBound, pivotIndex - 1)
        quicksort(arr, pivotIndex, rightBound)
    }
    return arr
}

function swap(arr, indexOne, indexTwo) {
    const temp = arr[indexTwo]
    arr[indexTwo] = arr[indexOne]
    arr[indexOne] = temp
}


const partition = (arr, leftIndex, rightIndex) =>{
    const pivot = arr[Math.floor((rightIndex + leftIndex) / 2)]
    while(leftIndex <= rightIndex){
        while(arr[leftIndex] < pivot){
            leftIndex++
        }
        while(arr[rightIndex] > pivot){
            rightIndex--
        }
        if(leftIndex <= rightIndex){
            swap(arr, leftIndex, rightIndex)
            leftIndex++
            rightIndex--
        }
    }
    return leftIndex
}

console.log(quicksort([ 3, 1, 4, 2, 8, 9 ]))
