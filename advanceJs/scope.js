function createSecureAccount(ownerName){
    let balance = 0;
    return {
        deposit : (amount) => {
            balance += amount;
            console.log(`${ownerName} deposited Rs ${amount}.`)
        },
        getBalance: () => balance,
    };
}
const myAccount = createSecureAccount('Rahul');
myAccount.deposit(1000);
myAccount.deposit(500);
console.log(`Current Balance: Rs${myAccount.getBalance()}`);
console.log(myAccount.balance);