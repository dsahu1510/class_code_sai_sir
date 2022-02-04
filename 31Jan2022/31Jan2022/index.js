function User(name, password){
      this.name=name;
      this.password = password;
}

User.prototype.getDetails = function(){
    return this.name+"\t"+ this.password;
}

var user1 = new User("sai", "sai");
var user2 = new User("sai2", "sai123");
var user3 = new User("sai3", "sai1");

console.log(user1);

console.log(user2.getDetails());

console.log(user3.getDetails());

Array.prototype.