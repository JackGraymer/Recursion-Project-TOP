/*


Build a function mergeSort that takes in an array and returns a sorted array, using a recursive merge sort methodology.
Tips:

    Think about what the base case is and what behavior is happening again and again and can actually be delegated to someone else (e.g. that same method!).
    
    It may be helpful to check out the background videos again if you don’t quite understand what should be going on.


*/


let arr = [9,3,7,5,6,4,8,2,]

function mergeSort(a){
    if (a.length<=1){
        return a
    }
    const mid = Math.floor(a.length/2)
    const left = a.slice(0,mid)
    const right = a.slice(mid)
    return merge(mergeSort(left), mergeSort(right))
}
function merge(left,right){
    const sorted = []
    while(left.length > 0 && right.length > 0){
        if (left[0] <= right[0]){
            sorted.push(left.shift())
        }else {
            sorted.push(right.shift())
        }
    }
    return [...sorted, ...left, ...right]

}

function sort() {
    document.querySelector('.mergeSort').textContent = 'Merge Sort: ' + mergeSort(arr)
}

sort()