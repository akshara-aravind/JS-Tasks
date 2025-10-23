//5. Define a type Product with id, name, price, and inStock.
// interface Details {
//     id:number;
//     name:string;
//     price:number;
//     inStock:boolean;
// }
// let user: Details = {
//     id:7001,
//     name:'Apple iPhone 14',
//     price:79900,
//     inStock:true,
// }
// function productDetails(){
//     return (`Product ${user.id}: ${user.name} costs ${user.price}`)
// }
function productDetails({id,name,price,inStock} : {id:number; name:string;price:number;inStock:boolean}){
  return `Product ${id}: ${name} costs ${price}`
}
console.log(productDetails({id:7001,name:'Apple iPhone 14',price:79_990,inStock:true}))