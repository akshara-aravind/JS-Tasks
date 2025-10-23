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
function productDetails(_a) {
    var id = _a.id, name = _a.name, price = _a.price, inStock = _a.inStock;
    return "Product ".concat(id, ": ").concat(name, " costs ").concat(price);
}
console.log(productDetails({ id: 7001, name: 'Apple iPhone 14', price: 79990, inStock: true }));
