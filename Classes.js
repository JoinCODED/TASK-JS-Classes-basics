/** Question 1: (1000 Points ⭐️)
 * 1. write a class of `Person`, give it the following properties
 * - firstName: String
 * - lastName: String
 * - gender: String
 * - birthYear: Number
 * - interests: [String]
 *
 * 2. Add the constructor that initializes all properties except the interests array should be empty by default
 *
 * 3. Add the following methods
 *
 *
 * + printName(), that print the persons full name  (first name and last name)
 * + calculateAge(currentYear), that takes a number of current year (i.e. 2021), and returns the age of the person
 * + addInterest(newInterest), that takes  a string of a new interest, and adds it to the interest array, and returns back the array
 *   after you are done with the class, create at least 3 objects of type Person of your interests
 */
class Person {
  // continue the code here
  constructor(firstName, lastName, gender, birthYear) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.birthYear = birthYear;
    this.interests = [];
  }
  printName = () => {
    console.log(`${this.firstName} ${this.lastName}`);
  };
  calculateAge = (currentYear) => currentYear - this.birthYear;

  addInterest = (newInterest) => {
    this.interests.push(newInterest);
    return this.interests;
  };
}

const omar = new Person("Omar", "Alibrahim", "Male", 1995);
const ahmad = new Person("Ahmad", "Hussain", "Male", 1991);
const sara = new Person("Sara", "Mohammad", "Female", 1999);
omar.addInterest("Coding", "Singing", "Teaching");
ahmad.addInterest("Horse riding", "Painting");
sara.addInterest("Playing Guitar", "Drawing");

/** (Question 2): (15000 Points)
 * 1. Write a class `Movie`, give it the following properties
 * - title
 * - duration (in minutes)
 * - genre
 * - [rating]
 *
 * 2. Add the constructor that initializes all properties except the rating array should be empty by default
 *
 * 3. and the following the methods
 * + rate(rating),
 *      That adds a new rating to the rating array.
 *      Rating should be restricted to be greater than 0 and less than 10.
 *      This function will be used to make a single rating for the movie.
 * + averageRating(),
 *      That calculates the average of the rating array.
 *      if rating array includes the following data for example: [9, 9, 10, 10], then the averageRating should return 9.5 as an average
 *      the average equation: average = sumOfValues / countOfValues
 *      (*BONUS*): use the method reduce to calculate the average
 */

class Movie {
  // continue the code here
  constructor(title, duration, genre) {
    this.title = title;
    this.duration = duration;
    this.genre = genre;
    this.rating = [];
  }
  rate = (newRating) => newRating >= 0 && newRating <= 10 &&  this.rating.push(newRating)
      

  averageRating = () => this.rating.reduce((a, b) => (a + b) / 2);
}

const movie1 = new Movie("Harry Potter", 240, "Action");
movie1.rate(7);
movie1.rate(8);
movie1.rate(10);
movie1.rate(14);
console.log("Movie rating is", movie1.averageRating());

/** (Question 3): (1000 Points)
 * 1. Create a class `Actor` that inherits `Person`, and adds the following properties
 * - movies: array of `Movie`
 *
 * 2. Add the following methods
 * + addMovie(movie), that adds a movie to the actors movies
 * +
 */

// write the class here

class Actor extends Person {
  movies = [];
  addMovie = (movie) => this.movies.push(movie);
}
