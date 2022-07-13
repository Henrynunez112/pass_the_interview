// const isValid = (string) =>{
//     let stack = []
//     for(let i = 0; i < string.length; i++){
//         if(string[i] === ")" && stack[stack.length - 1] === '('){
//             stack.pop()
//         }else if(string[i] === "]" && stack[stack.length - 1] === '['){
//             stack.pop()
//         }else if(string[i] === "}" && stack[stack.length - 1] === '{'){
//             stack.pop()
//         }else{
//             stack.push(string[i])
//         }
//     }
//     return stack.length === 0

// }

// const removeDuplicates = (string) =>{
//     let stack = []
//     for(let i = 0; i < string.length; i++){
//         if(stack[stack.length - 1] === string[i]){
//             stack.pop()
//         }else{
//             stack.push(string[i])
//         }
//     }
//     return stack.join('')
// }
// console.log(removeDuplicates('abbaca'))

// wave("hello") = ["Hello", "hEllo", "heLlo", "helLo", "hellO"]

// const wave = (str) =>{
//     let amount = str.length
//     let capital = 0
//     const arr = []
//     // while(amount > 0){
//     //     console.log(str.slice(0, capital),"<---this is first half", str.slice(capital + 1), "<---this is second half")
//     //    let newWord = str.slice(0, capital) + str.charAt(capital).toUpperCase() + str.slice(capital + 1)
//     //     capital++
//     //     arr.push(newWord)
//     //     amount--
//     // }
//     for(let i = 0; i < str.length; i++){
//         if(str[i] === " "){
//             continue
//         }else{
//             let newWord = str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1)
//             arr.push(newWord)
//         }
//     }
//     return arr
// }

// console.log(wave('two words'))

// const partsSums = (ls) =>{
//     let newArr = []
//     if(ls.length === 0) newArr.push(0)
//     let sum = 0
//             for(let i = 0; i < ls.length; i++){
//                 sum += ls[i]
//             }
//             ls.shift()
//             newArr.push(sum)
//             partsSums(ls)
// }
// console.log(partsSums([0, 1, 3, 6, 10]))

// Grade book
// Complete the function so that it finds the average of
// the three scores passed to it and returns the letter 
// value associated with that grade.

// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'

// const getGrade = (s1, s2, s3) =>{
//     const score = (s1 + s2 + s3) / 3
//     if(score >= 90 ){
//         return 'A'
//     }else if(score >= 80){
//         return 'B'
//     }else if(score >= 70){
//         return 'C'
//     }else if(score >= 60){
//         return 'D'
//     }else{
//         return 'F'
//     }
//     return grade
// }

// console.log(getGrade(55, 55, 55))

// const firstNonRepeated = (string) =>{
//     let counter = {}
//     for(let i = 0; i < string.length; i++){
//         if(!counter[string[i]]){
//             counter[string[i]] = 1
//         }else{
//             counter[string[i]]++
//         }
//     }
//     for(let key in counter){
//         if(counter[key] === 1){
//             return key
//         }
//     }
//     return null

// }

// console.log(firstNonRepeated('11223212351212225'))

// const solve = (str1, str2) =>{
//     let arrOne = str1.split("").filter(el => !str2.split("").includes(el)).join("")
//     let arrTwo = str2.split("").filter(el => !str1.split("").includes(el)).join("")
//     return arrOne+arrTwo
// }
// console.log(solve("xyab", "xzca"))

// const solve = (string) =>{
//     let uppercase = 0
//     let lowercase = 0
//     let numbers = 0
//     let special = 0
//     let format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/
//    for(let i = 0; i < string.length; i++ ){
//        if(!isNaN(string[i] * 1)){
//            numbers++
//        }else if(format.test(string[i])){
//            special++
//        }else if(string[i] === string[i].toUpperCase()){
//            uppercase++
//        }else if(string[i] === string[i].toLowerCase()){
//            lowercase++
//        }
//    }
//     return [uppercase,lowercase,numbers,special]
// }

// console.log(solve("*'&ABCDabcde12345"))

// const hasOneChar = (str) =>{
//     return [...new Set(str)].length === 1
// }
// console.log(hasOneChar('aaaaa'))

// const removeDuplicateWords = (s) =>{
//     const result = []
//     let split = s.split(' ')
//     for(let i = 0; i < split.length; i++){
//         if(!result.includes(split[i])){
//             result.push(split[i])
//         }
//     }
//     return result.sort().join(' ')


// }

// console.log(removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'))

// const findSmallestInt = (arr) =>{
//     let lowest = arr[0]
//     let i = 1
//     while(i !== arr.length){
//         if(arr[i] < lowest){
//             lowest = arr[i]
//         }
//         i++
//     }
//     return lowest
// } 
// console.log(findSmallestInt([78,56,232,12,8]))

// const findSmallestIntTwo = (arr) =>{
//     let lowest = arr[0]
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] < lowest){
//             lowest = arr[i]
//         }
//     }
//     return lowest
// }
// console.log(findSmallestIntTwo([78,56,232,12,8]))

// function spinWords(string){
//     //TODO Have fun :)
//     let result = []
//     let splitArr = string.split(" ")
//     for(let i = 0; i < splitArr.length; i++){
//         if(splitArr[i].length >= 5){
//             result.push(splitArr[i].split("").reverse().join(""))

//         }else{
//             result.push(splitArr[i])
//         }
//     }
    
//       return result.join(" ")
    
//   }
//   console.log(spinWords("This is another test"))


// const sumMul = (n, m) =>{
//     if(m < n) return "INVALID"
//     let i = m
//     let result = 0
//     while(n <= i){
//         if(i % n === 0){
//             console.log(i)
//             result += i
//         }
//         i--

//     }
//     return result
// }
// console.log(sumMul(2, -7))

// console.log(6 % 3 === 0)

// const remainder = (n, m) =>{

//     return (n > m  ? n % m : m % n)
// }

// console.log(remainder(13, 72))

// const halvingSum = (n) =>{
//     let sum = 0
//     while(n >= 1){
//         console.log(n)
//         sum += n
//         n = Math.floor((n*1)/ 2)
//     }
//     return sum
// }
// console.log(halvingSum(25))

// const isSquare = (n) =>{
//     let i = 0
//     while(i < n){
//         if( i * i === n){
//             return true
//         }
//         i++
//     }
//     return false

// }
// console.log(isSquare(-1))

const strangeMath = (n,k) =>{
    let result = 0
    let arr = []
    for(let i = 1; i <= n; i++){
        arr.push(i)
    }
    arr.sort()
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === k){
            result = i + 1
        }
    }
    return result
}

const strangeMathTwo = (n, k) =>{
    let arr = []
    for(let i = 0; i <= n; i++){
        arr.push(i)
    }
    return arr.sort().indexOf(k)
}
console.log(strangeMathTwo(12, 2))



