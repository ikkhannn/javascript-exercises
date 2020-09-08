class User {
    
    constructor(email,name){
        this.email = email;
        this.name = name;
    }

    login(){
        console.log(this.email," is logged in");
    }

    logout(){
        console.log(this.email," is logged out") ;
    }


}

var userOne = new User('ryu@ninjas.com','Ryu');
var userTwo = new User('yoshi@mariokorp.com','Yoshi');

