class User {
    
    constructor(email,name){
        this.email = email;
        this.name = name;
    }
}

var userOne = new User('ryu@ninjas.com','Ryu');
var userTwo = new User('yoshi@mariokorp.com','Yoshi');

console.log(userOne);
console.log(userTwo);