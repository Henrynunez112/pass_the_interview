//Quadratic O(n^2)
export const swap = (arr, indexOne, indexTwo) =>{
    const temp = arr[indexTwo]
    arr[indexTwo] = arr[indexOne]
    arr[indexOne] = temp
}

const bubbleSort = (arr) =>{
    let swapping = true
    while(swapping){
        swapping = false
        for(let i = 0; i < arr.length - 1; i++){
            if(arr[i] > arr[i + 1]){
                swap(arr, i, i+1)
                swapping = true
            }
        }
    }
    return arr
}

console.log(bubbleSort([5, 6, 2, 3, 1, 4]))

module.export = {bubbleSort, swap}