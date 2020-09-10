// 面试题1 实现数组扁平化
// 将一个多维数组变为一维数组：[1, [2, 3, [4, 5]]]  ------>    [1, 2, 3, 4, 5]
// 1.ES6的flat(depth) depth Infinity 无穷大
let arr = [1, [2, 3, [4, 5]]];
const newArr = arr.flat(Infinity);
console.log(newArr)

// 2.序列化后正则
let str = JSON.stringify(arr).replace(/(\[|\])/g, '');
str = '[' + str + ']';
JSON.parse(str);   // [1, 2, 3, 4, 5]
console.log(str)

// 3.树状数据最直接是递归
function flat(arr:any[]):number[]{
    let newArr:any[] = []
    for (let child of arr){
        if (child instanceof Array){
            newArr = newArr.concat(flat(child))
        }else {
            newArr.push(child)
        }
    }
    return newArr
}
console.log(flat(arr))

// 面试题二 实现数组去重
// 1. 使用 filter 方法  返回数组匹配的第一个
const arr2:string[] = ["banana", "apple", "orange", "lemon", "apple", "lemon"];
function removeDuplicates(data:string[]) {
    return data.filter((value, index) => data.indexOf(value) === index);
}
console.log(removeDuplicates(arr2)); // [ 'banana', 'apple', 'orange', 'lemon' ]

// 2.使用 ES6 的 Set Set 是 ES6 中的新对象类型，用于创建唯一key的集合。
function removeDuplicates1(data:string[]){
    return [...new Set(data)]
}
console.log(removeDuplicates1(arr2)); // [ 'banana', 'apple', 'orange', 'lemon' ]

// 面试题三 排序
// 1.基础排序算法
// 2.进阶排序算饭


