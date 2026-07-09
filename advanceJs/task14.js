const Purchase = [
    {item : "Keyboard" , price : 20000 , count : 3, inStock : true},
    {item : "Mouse", price:20000,count:4,inStock:false},
    {item: "monitor", price:200000, count:4,inStock:true},
    {
        item : "USBhub",price:2000,count:5,inStock:true
    }
]

const inStockItems = Purchase.filter(p => p.inStock);
console.log(inStockItems);

const totalPrice = Purchase.map(p => p.price*p.count);
console.log(totalPrice);

const card = totalPrice.reduce((sum,current) => sum+current,0);
console.log(card);