/* 2. Circle - Class
        Convert the UML diagram to Typescript class. - use number for double*/


class Circle{
    constructor(radius,color){
        this.radius=radius;
        this.color=color;
    }

    getRadius(){
        return this.radius;
    }

    set changeRadius(updatedradius){
        this.radius=updatedradius;
    }

    getColor(){
        return this.color;
    }

    set changeColor(updatedcolor){
        this.color=updatedcolor;
    }

    getArea(){
        return 3.14*this.radius*this.radius;
    }

    getCircumference(){
        return 2*3.14*this.radius;
    }
}

var obj=new Circle(1.0,"red");
var obj2=new Circle([1.0,"red"]);

console.log(`Radius= ${obj.getRadius()}`);
console.log(`Color= ${obj.getColor()}`);
obj.changeRadius=3;
console.log(`Updated Radius= ${obj.getRadius()}`);
obj.changeColor="Blue";
console.log(`Updated Color= ${obj.getColor()}`);
console.log(`Area of Circle= ${obj.getArea()}`);
console.log(`Area of Circumference= ${obj.getCircumference()}`);

console.log(obj2.toString());