//1. Class - Movie

class Movie{
    constructor(title,studio,rating="PG"){
            this.title=title;
            this.studio=studio;
            this.rating=rating;   // this.rating=rating || "PG" - we can give default values like this also
    }
    getPG(){
        // return movies.filter(movie=>movie.rating==="PG");
        if(this.rating==="PG")
         return this.title;
    }
}

var m1=new  Movie("Casino Royale","Eon Productions","PG­13");
var m2=new Movie("Lion","8Greens Studio");
console.log(m1.rating,m2.rating);

// var moviesobj=[m1,m2];
console.log(m2.getPG());



