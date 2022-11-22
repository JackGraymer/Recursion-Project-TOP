#!/usr/bin/node

/*
Using iteration, write a function fibs which takes a number and returns an array containing that many numbers from the fibonacci sequence. Using an example input of 8, this method should return the array [0, 1, 1, 2, 3, 5, 8, 13].
*/

function fibs(n) {
       
let arr = [0,1]

    for(let i=2; i<n; i++){
        arr[i] = arr[i-1]+arr[i-2]
    }
    document.querySelector('.fibs').textContent = 'Fibonacci: ' + arr
}


fibs(8)



