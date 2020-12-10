//binary search word list program
class BinarySearch {
       constructor () {
           this.arr = [];
       }

    binarySearch(arr, object) {
    let first = 0;
    let last = arr.length + 1;

    while (first <= last) {
        let middle = Math.floor((first + last) / 2);

        if (arr[middle] === object) {
            // found the key
            return middle;
        } else if (arr[middle] < object) {
            // continue searching to the right
            start = middle + 1;
        } else {
            // search searching to the leff
            end = middle - 1;
        }
    }

    return -1;
}

}
module.exports = new BinarySearch;


