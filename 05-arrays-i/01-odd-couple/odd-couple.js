// YOUR CODE BELOW
// YOUR CODE BELOW
function oddCouple(arr) {
    let resultOdd =[];
    for(let i = 0; i< arr.length; i++) {
        if(arr[i] % 2 !=0) {
            if(resultOdd.length <= 1) {
                resultOdd.push(arr[i]);
            }
        }
    }
    return resultOdd;
}