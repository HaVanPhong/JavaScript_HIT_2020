// Bài 1: Tính tổng tiền thanh toán của giỏ hàng sau
const cart = [{
        title: "DẾ MÈN PHIÊU LƯU KÝ",
        price: 5,
        quantity: 2,
    },
    {
        title: "KIM ĐỒNG",
        price: 1,
        quantity: 7,
    },
    {
        title: "NGỌN LỬA ĐÊM BA MƯƠI",
        price: 2,
        quantity: 4,
    },
    {
        title: "CÔ BÉ GANH TỊ",
        price: 1,
        quantity: 5,
    },
];

const reducer = (accumulator, currentValue) => accumulator + currentValue.price;

const sumMoney = cart.reduce(reducer, 0);
console.log(sumMoney);
// Bài 2: Nhóm các cầu thủ theo quốc gia
const team = [
    { name: "Công Phượng", country: "Việt Nam" },
    { name: "Ronaldo", country: "Portugal" },
    { name: "Quang Hải", country: "Việt Nam" },
    { name: "Messi", country: "Argentina" },
    { name: "Nani", country: "Portugal" },
];

const groupByCountry = team.reduce((accumulator, obj) => {
    let key = obj['country'];
    if (!accumulator[key]) {
        accumulator[key] = [];
    }
    accumulator[key].push(obj);
    return accumulator;
}, {})
console.log(groupByCountry);

// kết quả:
// {
//   'Việt Nam': [
//     { name: 'Công Phượng', country: 'Việt Nam' },
//     { name: 'Quang Hải', country: 'Việt Nam' }
//   ],
//   Portugal: [
//     { name: 'Ronaldo', country: 'Portugal' },
//     { name: 'Nani', country: 'Portugal' }
//   ],
//   Argentina: [ { name: 'Messi', country: 'Argentina' } ]
// }
// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
// Bài 3: Gom các object của posts thành mảng posts
const topics = [{
        topic: "ReactJS",
        posts: [
            { postID: "id1", title: "title1" },
            { postID: "id2", title: "title2" },
        ],
    },
    {
        topic: "Vue.js",
        posts: [
            { postID: "id3", title: "title3" },
            { postID: "id4", title: "title4" },
        ],
    },
];
const result = topics.reduce((accumalator, obj) => accumalator.concat(obj.posts), []);
console.log(result);
// kết quả:
// [
//   { postID: 'id1', title: 'title1' },
//   { postID: 'id2', title: 'title2' },
//   { postID: 'id3', title: 'title3' },
//   { postID: 'id4', title: 'title4' }
// ]
// --------------------------------------------------------
// Bài 4: Tính tổng và tích của mảng
const arr = [3, 3, 1, 2, 1];
const sumArr = arr.reduce((accumulator, value) => accumulator + value, 0);
const tich = arr.reduce((accumulator, value) => accumulator * value, 1);
console.log("result ex4: ");
console.log("tong: " + sumArr);
console.log("tich: " + tich);
//--------------------
// Bài 5: Tìm phần tử khác nhau giữa 2 mảng
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [2, 3, 6];
const result5 = arr1.reduce((accumulator, value) => {
    if (!arr2.includes(value)) {
        accumulator.push(value)
    }
    return accumulator;
}, [])
console.log("result5: ");
console.log(result5);
// kết quả: [1, 4, 5]

//----------------------------

// Bài 6: Làm phẳng mảng

const arrFlat = [0, 1, [2, 3],
    [4, 5, [6, 7]],
    [8, [9, 10, [11, 12]]]
];
//ex6_1
console.log("result ex6_1: ");
console.log(arrFlat.flat(Infinity));
//ex6_2
function res(arr) {
    return arr.reduce((a, b) => {
        return a.concat(Array.isArray(b) ? res(b) : b);
    }, [])
}
console.log("result ex6_2: ");
console.log(res(arrFlat));
//ex6_3
function flatten(arr) {
    while (arr.some((item) => Array.isArray(item))) {
        arr = [].concat(...arr)
    }
    return arr
}
console.log("result ex6_3: ");
console.log(flatten(arrFlat));
//------------------------------------
// Bài 7: Đến số lần xuất hiện các phần tử trong mảng
const arrCount = [1, 2, 3, 4, 5, 2, 3, 4, 2, 2, 7, 8, 8];
const result_7 = arrCount.reduce((a, b) => {
    a[b] = (a[b] || 0) + 1;
    return a;
}, {})
console.log("result 7: ");
console.log(result_7);
// kết quả: { '1': 1, '2': 4, '3': 2, '4': 2, '5': 1, '7': 1, '8': 2 }