console.log('hello user')

// var breakfast = ['banana',
//                 'chicken wing',
//                 'coffee',
//                 'eye of newt',
//                 'pancakes',
//                 'avocado',
//                 'fish biscuit',
//                 'pecan',
//                 'corn dog'];
// var indexOne = 3;
// var indexTwo = 4;
// var indexThree = 6;
// for (var i = indexOne; i < indexThree; i++) {
//   console.log(breakfast[i]);
// }


// let myForm = document.getElementById('container-two');

// function handleSubmit(event) {
//   event.preventDefault();

//   var firstName = event.target.firstname.value;
//   var lastName = event.target.lastname.value;
//   var pets = event.target.pets.value;
//   var age = +event.target.age;
//   console.log(firstName)
//   console.log(lastName)
//   console.log(typeof age)
//   console.log(pets)
// }

// myContainer.addEventListener('click', handleClick);
// myForm.addEventListener('submit', handleSubmit);

function Graph() {
  this.nodes = [];
  this.edges = [];
}

Graph.prototype.addNodes = function(n){
  this.nodes.push(n);
};

Graph.prototype.addEdges = function(n){
  this.edges.push(n);
};

var graphObj = new Graph();

// console.log(true && false, false && true, false || false, true || true, true || false, false || true, true && true, false && false)

//  var gopher = 1;
//  if (gopher < 10){ 
//     console.log('gopher');
//  } else {
//    console.log('potato');
//  }


var movies = ["The Matrix", "Frozen"];

console.log(typeof(typeof(movies)));

// var pugbombButton = document.getElementById('pugbomb');
// pugbombButton.addEventListener('click', pugbombButtonHandler());

// function pugbombButtonHandler() {
//   alert('PUGBOMB!!!!');
// }


function helloCodeFellows(){ 
  console.log('testAlpha')
 }
//  var testAlpha = helloCodeFellows();
 var testBeta = helloCodeFellows;

 console.log(testBeta)
