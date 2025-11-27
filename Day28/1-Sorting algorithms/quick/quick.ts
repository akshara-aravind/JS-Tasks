// * Quick Sort
function quickSort(arr:number[]) {
    var pivot = arr[arr.length - 1];
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length; j++) {
            if (arr[j] > pivot) {
                var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}
// console.log(quickSort([8,2,4,7,1,3,9,6,5]))
// console.log(quickSort([11,9,12,7,1,2,3]))