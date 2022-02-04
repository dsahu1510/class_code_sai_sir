function Customer(name, accno, balance) {
      this.name= name;
      this.accno = accno;
      this.balance = balance;
      this.deposit = function(amount){
             this.balance = this.balance + amount;
      } 
}
var cust1 = new Customer("kiran", 101, 10000);
var cust2 = new Customer("raj", 102, 20000);
console.log(cust1.balance);
cust1.deposit(200);
console.log(cust1.balance);
cust2.deposit(9000);
console.log(cust2.balance);