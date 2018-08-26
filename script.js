//creates three arrays: evens, odds, and primes
var evens = [2, 4, 6, 8];
var odds = [1, 3, 5, 7];
var primes = [2, 3, 5, 7, 11];
//combines arrays using spread operator
var numbers = [...primes, ...evens, ...odds];

//creates a test array and adds prime array usig spread operator
var testArray = [1, 2, 3,...primes];

//creates an object
var jamesBond = {
 first: 'James',
 last: 'Bond',
 country: 'United States',
 city: 'New york',
 twitter: '@jamesbond'
};
//deconstructs object
var {first, last, country, city, twitter} = jamesBond;

//creates array
var players = ['paul', 'andy', 'darrell', 'jim'];
//deconstructs array
var [player1, player2, player3, player4] = players;

