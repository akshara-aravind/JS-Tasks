//5 Create a function  removeFalsy(arr)  that removes all falsy values ( false ,  0 ,  '' , null ,  undefined ,  NaN )
function removeFalsy(arr){
  let array = arr.filter((el) => el !=false && el !== '0' && el !== 'null' && el !== 'undefine' && el !== 'NaN')
    return array
}
console.log(removeFalsy([1,2,0,4,'']))