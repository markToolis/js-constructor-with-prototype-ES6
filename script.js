// ES5:
// function User (name, id){
//     this.name = name;
//     this.id = id;
//     this.human = true;
// }
// let ivan = new User('Ivan', 25),
//     wlad = new User ('Wlad', 23);

// User.prototype.exit = function(name){
//     console.log('пользователь ' + this.name + ' вышел')
// }

// ivan.exit();
// wlad.exit();

// ES6:
class User{
    constructor(name, id ){
        this.name = name;
        this.id = id;
        this.human = true; 
    }
    exit(){
        console.log(`пользователь ${this.name} вышел`);
    }
}
let ivan = new User('Ivan', 25);
let wlad = new User ('Wlad', 23);

ivan.exit();
