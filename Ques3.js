//3. Write a “person” class to hold all the details.


class Person{
    constructor(firstname,lastname,age,gender,qualification){
        this.firstname=firstname;
        this.lastname=lastname;
        this.age=age;
        this.gender=gender;
        this.qualification=qualification;
    }
}

var p1=new Person("Guna","Sekar","30","Male","M.E");
var p2=new Person("Kavitha","Krishnan",28,"Female","B.Tech");
console.log(`${p2.firstname} ${p2.lastname} is an ${p2.gender} entrepreneur, she is just ${p2.age} years old ${p2.qualification} graduate`);