const inventory = [
    {name : 'Phone', price : 15000, category: 'Electronics', stock:10},
    {
        name:'Shirt',
        price : 800,
        category : 'Clothing',
        stock : 0
    },
    {
        name : 'Laptop',
        price : 55000,
        category: 'Electronics',
        stock : 5
    },
    {
        name: 'Shoes',
        price:2000,
        category:'Clothing',
        stock:8
    }
];

inventory.forEach((item) => {
    console.log(`{item.name} - Rs${item.price} (${item.stock} in stock)`);
})

const Electronics = inventory.filter((item) => {
    return item.category == 'Electronics';
})

console.log(Electronics);

const totalVal = inventory.reduce((total,item) => {
    return total + (item.price+item.stock);
},0)
console.log(totalVal);

const Product = inventory.filter((item) => {
    return item.stock === 0;
})

console.log(Product);


inventory.push({
    name : "watch",
    price : 3000,
    category : "Accessories",
    stock:12
});

console.log(inventory);


const discountProd = inventory.map((item) => {
    return {
        ...item,
        price:item.price*0.8
    };
});

console.log(discountProd);