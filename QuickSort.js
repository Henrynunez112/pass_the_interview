import {swap} from './BubbleSort'


const quicksort = (arr, leftBound = 0, rightBound = arr.length - 1) =>{
    if(leftBound < rightBound){
        const pivotIndex = partition(arr, leftBound, rightBound)
        quicksort(arr, leftBound, pivotIndex - 1)
        quicksort(arr, pivotIndex, rightBound)
    }
    return array
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
