/** 给定一个数字数组, 要求返回除当前数字外的乘积数组 */
/**
 * Input - [1, 2, 3, 4]
 * Output - [24, 12, 8, 6]
 *
 * Input - [0, 1, 3, 5]
 * Output - [15, 0, 0, 0]
 */

function doIt(arr) {
  const ret = [];
  let start = 1;
  let end = 1;
  for(let i = 0; i < arr.length; i++) {
    ret[i] = start;
    start *= arr[i];
  }
  for(let i = arr.length - 1; i > -1; i--) {
    ret[i] *= end;
    end *= arr[i];
  }
  return ret;
}
/** tests */
console.log(doIt([1, 2, 3, 4]).toString() === [24, 12, 8, 6].toString());
console.log(doIt([0, 1, 3, 5]).toString() === [15, 0, 0, 0].toString());
