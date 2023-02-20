/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri sukuria objektus su 3 savybėm ir 1 metodu:

Savybės:
title, director, budget
Metodas: 
wasExpensive() - jeigu filmo budget bus didesnę nei 100 000 000 mln USD, tada gražins true, kitu atveju false 
------------------------------------------------------------------------------------------------------ */

class Movie {
    constructor(title, director, budget) {
        this.title = title;
        this.director = director;
        this.budget = budget;
    }
    wasExpensive() {
        return this.budget > 100000000 ? true : false;
    }
}

const movie1 = new Movie("Lost in Translation", "Sofia Coppola", 4000000);
const movie2 = new Movie("Leon", "Luc Besson", 16000000);
const movie3 = new Movie("Titanic", "James Cameron", 2224000000);

console.log(movie1.wasExpensive());
console.log(movie2.wasExpensive());
console.log(movie3.wasExpensive());