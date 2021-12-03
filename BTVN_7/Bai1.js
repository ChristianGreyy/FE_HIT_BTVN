
const run = (str) => {
    const arr = [];
    for(let item of str) {
        arr[item] = arr[item] ? arr[item] + 1 : 1;
    }
    for(let index in str) {
        if(arr[str[index]] == 1) {
            return index;
        }
    }
    return -1;
}


// case1
const str = "tranduong"
console.log(run(str));
// case2
const str1 = "hitclubhiuhiu"
console.log(run(str1));
// case3
const str2 = "aabb"
console.log(run(str2));