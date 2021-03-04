export const MAGIC_NUMBER = Math.round(Math.random() * 100);
export class Student{
    constructor(email, age){
        this.email = email;
        this.age = age;
    }
    getDetail(){
        return "Hello " + this.email;
    }
}
export function demo(){}