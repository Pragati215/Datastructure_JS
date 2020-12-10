//binary search word list program
class BinarySearch {
       constructor () {
           this.arr = [];
       }

    binarySearch() {
    let first = 0;
    let last = arr.length + 1;

    while (first <= last) {
        let middle = Math.floor((first + last) / 2);

        if (arr[middle] === object) {
            // found the key
            return middle;
        } else if (arr[middle] < object) {
            // continue searching to the right
            first = middle + 1;
        } else {
            // search searching to the leff
            last = middle - 1;
        }
    }

    return -1;
}

}
module.exports = new BinarySearch;


