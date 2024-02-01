console.log("Welcome to Object!");

class Person {
    
    constructor(name, email){
        this.name = name;
        this.email = email;
    }
    
    changeName(name){
        this.name = name;
    }
    sendMail(msg){
        console.log("sending email to",p2.name);
        console.log(msg);
    }
    
}

const p1 = new Person("Ananna","ananna@gmail.com")
const p2 = new Person("Parvin", "parvin@gmail.com")
const p3 = new Person("Mumtahina","mumtahina@gmail.com")

console.log(p1,p2,p3)
p1.changeName("Omi")
console.log(p1)
p2.sendMail("Hope You Are Doing Well :)")
