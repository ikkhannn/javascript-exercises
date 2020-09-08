class User {
    
    constructor(email,name){
        this.email = email;
        this.name = name;
        this.score = 0;
    }

    login(){
        console.log(this.email," is logged in");
        return this;
    }

    logout(){
        console.log(this.email," is logged out") ;
        return this;
    }

    updateScore(){
         this.score = this.score +1;
         console.log(this.email, 'score is now ',this.score);
        return this;
        }


}

var userOne = new User('ryu@ninjas.com','Ryu');
var userTwo = new User('yoshi@mariokorp.com','Yoshi');

userOne.login().updateScore().updateScore().updateScore().logout();