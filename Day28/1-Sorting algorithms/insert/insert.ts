// * Insertion Sort
function insertionSort(arr:number[]) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++) {
           if(arr[i]>arr[j]){
            if(arr[j]>arr[j+1]){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
           }
        }
    }
    return arr;
}
// console.log(insertionSort([8, 2, 4, 7, 1, 3, 9, 6, 5]));
console.log(insertionSort([7, 12, 9, 11, 3]));
