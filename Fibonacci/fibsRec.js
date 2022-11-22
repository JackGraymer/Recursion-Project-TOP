/*
Now write another method fibsRec which solves the same problem recursively. This can be done in just a couple of lines (or 1 if you’re crazy, but don’t consider either of these lengths a requirement… just get it done).
*/

function fibsRec (n){

    if (n<2){
        return [0];

    }else if(n<3){
        return[0,1]

    }
    return [...fibsRec(n-1), fibsRec(n-1)[n-2] + fibsRec(n-1)[n-3]]
}

function fiboRec (n){
    document.querySelector('.fibsRec').textContent = 'Fibonacci Recursion: ' + fibsRec(n)
}

fiboRec(8)
