export class Student{
    constructor(email, age){
        this.email = email;
        this.age = age
    }
    getDetail(){
        return "Helo " + this.email + ", I am " + this.age + " years old";
    }
}

export const MAGIC_NUMBER = Math.round(Math.random() * 100);