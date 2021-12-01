// Bài 1
// Cho 1 mảng sau
// Đếm số lần xuất hiện của các số
// Ví dụ
// const nums = [1,1,2]
// Output:
// Số 1 xuất hiện 2 lần
// Số 2 xuất hiện 1 lần

let counts = (nums) => {
    let res = [];
    nums.forEach(item => {
        res[item] = res[item] ? res[item] + 1 : 1;
    })

    return res;
}

//Case 1
const nums = [1, 3, 5, 7, 1, 2, 3, 4, 5, 6];
console.log(counts(nums));

//Case 2
const nums1 = [1, 1, 1, 10, 23, 2, 26, 26];
console.log(counts(nums1));

//Case 3
const nums2 = [1000, 2000, 1000, 2000, 10000, 22222];
console.log(counts(nums2));
