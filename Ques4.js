//4. write a class to calculate the uber price.

class UberPrice{
    constructor(baseFare, costPerKm, costPerMinute){
        this.baseFare=baseFare;
        this.costPerKm=costPerKm;
        this.costPerMinute=costPerMinute;
    }

    getPrice(distance,time){
        var distancecost=distance*this.costPerKm;
        var timecost=time*this.costPerMinute;
        var totalcost=this.baseFare+distancecost+timecost;

        return totalcost;
    }
}

var uber_obj=new UberPrice(50,6,2);
var total=uber_obj.getPrice(10,15);
console.log(`Estimated Uber Price is Rs.${total}`);