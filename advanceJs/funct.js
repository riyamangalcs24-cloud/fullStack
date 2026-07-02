function add(a,b) {
    return a+b;
}

function sub(a, b){
    return a-b;
}

const mul = (a,b) => {
    return a*b;
}

const divide = (a,b) => {
    if(b == 0){
        return "Cannot divisible by 0";
    }
    else{
    return a / b;
    }
}

function calculateBMT(weight,height){
    return weight / (height * height);
}

console.log(add(5,3));
console.log(mul(5,10));
console.log(divide(10,5));
console.log(calculateBMT(3,4));