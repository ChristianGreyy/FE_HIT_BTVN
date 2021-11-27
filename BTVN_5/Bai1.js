console.log("CASE 1");
//Case 1
const nums = [1, 3, 5, 7, 1, 2, 3, 4, 5, 6];
let res = [];
let counts = [];

nums.forEach(item => {
    if(res.indexOf(item) === -1) res.push(item);
    counts[item] = counts[item] ? counts[item] + 1 : 1;
})

res.forEach(item => {
    console.log("Số " + item + " xuất hiện " + counts[item]);
})
 
console.log("CASE 2");
//Case 2
const nums1 = [1, 1, 1, 10, 23, 2, 26, 26];
res = [];
counts = [];

nums1.forEach(item => {
    if(res.indexOf(item) === -1) res.push(item);
    counts[item] = counts[item] ? counts[item] + 1 : 1;
})

res.forEach(item => {
    console.log("Số " + item + " xuất hiện " + counts[item]);
})
 
console.log("CASE 3");
//Case 3
const nums2 = [1000, 2000, 1000, 2000, 10000, 22222];
res = [];
counts = [];

nums2.forEach(item => {
    if(res.indexOf(item) === -1) res.push(item);
    counts[item] = counts[item] ? counts[item] + 1 : 1;
})

res.forEach(item => {
    console.log("Số " + item + " xuất hiện " + counts[item]);
})
 



