## Entrance Study Guide

## Table of Contents

- [Quiz 1](#quiz_1)

## Quiz 1

1. Q1 - Which is the correct example of concatenation in JS?

- 'I brush my ' + bodyPart + ' in the morning'

2. What java script tag do you need to add JS to an HTML file

- <script></script>

3. WHich is not a data type

- attribute

4. What command would we wise to create and switch to a new branch called debug in Git

- git checkout -b debug

5. What defines the structure of a webpage

- HTML

6. When writing clean code, which should you avoid/

- no whitespace

7. What Unix command would create a new directory called thursday

- mkdir thursday

8. Which of these combinations evaluates to true

-
true && false

false && true

false || false

-T- true || true

-T- true || false

-T- false || true

-T- true && true

false && false

9. Analyze code block and find error in JS

- missing opening curly bracket

10. Which is not an example of JS statement

- 1 =! loneliestNumber;
  - chosen because I do not recognize the =!

## Quiz 2

1. HTML attributes and CSS declarations are examples of key-value pairs.

- True

2. Assuming there are no other CSS declarations, and no inline CSS styles, what will the following CSS declaration do to the body element and other HTML elements inside the body tag?

body {
color: white;
background-color: black;
}

- Change background color of all HTML elements within body to black and change color of all text to white

3. Please pick the statement that best describes the default display for the HTML elements listed below:

<span>
<div>
<h1>, <h2>, <h3>, <h3>, <h5>, <h6>
<ul>

- **Not correct** all listed elements, except <ul>, are block elements by default 

4. Which of the following are true about HTML elements with inline display?

- 1. The content of inline elements determines their default width - T
- 2. <p> element will display inline by default - F
- 3. All HTML elements with inline display can be changed to block display - T
- 4. Inline elements flow within the text and do not start on a new line - T
- 5. Inline elements cannot have any margins - F

- 1, 3, 4

5. Which of the following correctly lists the outside-in ordering of the components of the CSS “box model”?

- Margin, Border, Padding, Content

6. Pick the statement that best describes the following JavaScript code

var movies = ["The Matrix", "Frozen"];
typeof(typeof(movies));

- The code will produce valid results as both typeof calls are invoked with valid JavaScript types

7. Branching practice 3/4 correct

## Quiz #3

1. In JavaScript, the "=" operator is used for what purpose?

- to assign a value to a variable

2. What is the purpose of z-index in CSS positioning?

- In a layout with overlapping elements, determines which element sits on top

3. In our guessing game we used a conditional (if/else statement) to check for what/

- If the guessed answer was equivalent to the stored answer

4. What type of CSS positioning is a subset of absolute positioning and positions an element in relation to the browser window?

- Fixed Positioning

5. 
var units = "years";
var davidAge = 65;
var johnAge = 40;
var ageDifference = davidAge - johnAge;
alert("The age difference is " + ageDifference + " " + units);

Why should we make a separate variable for the age difference?

- The code is more readable with an appropriately named variable, rather than including an arithmetic expression inside of parentheses inside of a concatenation.

6. In JavaScript, what is the difference between the "==" and "===" operators?

- "===" means equality without type coersion, meaning the two values being compared must be of the same data type (and value) to return true.

7. What type of CSS positioning takes an element out of normal flow and positions it in relation to its containing element?

- Absolute positioning

8. 
var meows = true;
while (meows = true) {
  console.log('MEOW!');
  meow = false;
}
console.log('Sorry, no meowing allowed.');

- The code will cause an infinite loop and the console will log many many meows.

9. 
var breakfast = ['banana',
                'chicken wing',
                'coffee',
                'eye of newt',
                'pancakes',
                'avocado',
                'fish biscuit',
                'pecan',
                'corn dog'];
var indexOne = 3;
var indexTwo = 4;
var indexThree = 6;
for (var i = indexOne; i < indexThree; i++) {
  console.log(breakfast[i]);
}

What will be the result of the following JavaScript code?

- The following items will log into the console: eye of newt, pancakes, avocado

10. What does the CSS property 'float' do?

- Allows you to take an element in normal flow and place it as for to the left or the right of the containing element as possible

## Quiz 4

1. What does Math.floor() do?

- It truncates the decimal values from a floating point number

2. When used inside of an object, this refers to:

- The object that it is used in

3. var rabbit = {}; 
This line of code creates an object by using:

- object literal notation

4. In the line of code

var turtle = newAnimal("Michelangelo",1);
"Michelangelo" and 1 are:

- Arguments

5. What is the term we use for a function that is associated with (or, attached to) an object?

- a method

6. True/false: An object is a collection of properties and methods.

- True

7. True/false: Figuring out your problem domain should only be done after you start writing code; otherwise you do not know whether the code actually works.

- false

8. What does DOM stand for?

- Document Object Model

9. True/false: Javascript cannot be used to manipulate HTML elements; it is only used in web applications to solve arithmetic calculations.

- false

10. Invoke the wizardsOfMiddleEarth function.

function wizardsOfMiddleEarth() {
  this.gray = "Gandalf";
  this.white = "Saurumon";
  this.brown = "Radaghast"; 
  this.blue = ["Alatar", "Pallando"];
  return this.gray + this.white + this.brown + this.blue[0] + this.blue[1];
}

- wizardsOfMiddleEarth();

## Quiz 5

1. A function ____________ loads before any code is executed.

- declaration

2. The elements we need to put inside of a form are: input, button and _____?

- label

3. 
What is the error in the following JavaScript code, assuming that there is a button in the corresponding HTML with an ID of "pugbomb":

var pugbombButton = document.getElementById('pugbomb');
pugbombButton.addEventListener('click', pugbombButtonHandler());

function pugbombButtonHandler() {
  alert('PUGBOMB!!!!');
}

- The handler function is being called inside of the event listener

4. A function __________ loads only when the interpreter reaches that line of code.

- expression

5. 
In the following code which line shows the conflicting code from your working branch?

1    <<<<<<<<<<< HEAD
2    <h1>Code Fellows</h1>
3    ===========
4    <p>Code Fellows</p>
5    >>>>>>>>>>> master

- Line 2

6. What property is used to change the text color of an element? 

- color

7. 
Given the following code what style should be applied to make the images stack vertically?

<section class=”isenguard”>
  <img class=”lotr” src=”orcsWithAxes.gif” alt=”Chopping Down Trees”>
  <img class=”lotr” src=”treeBeard.png” alt=”Stomping on Orcs”>
  <img class=”lotr” src=”riverDam.jpg” alt=”Dam breaking”>
</section>

- .lotr{display:block;} 

8. 
Consider the following JavaScript code:

function helloCodeFellows(){ 
 // do some logic and return a valid value 
}
var testAlpha = helloCodeFellows();
var testBeta = helloCodeFellows;
What is the difference between variables testAlpha and testBeta?

- 
Variable testAlpha holds the return value from function helloCodeFellows whereas variable testBeta holds reference for function helloCodeFellows.

9. Which of the following are standard CSS pseudo-classes?

- 
:hover

:last-child

:target

10. 
Which of the following is/are true about JavaScript object properties?

A. All properties can be accessed through "." operation

B. All properties are automatically locally scoped but may be accessed by using ‘prototype’

C. Variables declared inside constructor functions are locally scoped and cannot be directly accessed as properties - T -

D. Variables declared inside constructor functions are globally scoped - F -

E. Properties that contain boolean values may not be accessed with bracket notation and are only accessible through “.” operation

- C

## Quiz 6

1. Your classmate has an account on GitHub, with a username of "naman14". She has a repository called "Timber". In order to download the "Timber" Git repository on your local machine for the first time, you would issue which of following Git commands?

- git clone https://github.com/naman14/Timber.git

2. Which of the following CSS declarations will change the color of text inside all <cite> tags to red? 

- cite {color: red}

3. h1 { 
  border-width: 5px;
  border: dashed blue;
}

After adding the CSS properties listed above, at 100% zoom, what will be the computed width of the border around an <h1>?

- 3px

4. 
Which of the following statements about the CSS float property are true?

A. The CSS "float" property affects the layout of elements in a page -T-

B. Content flows down the right side of a left-floated box -T-

C. Adding a "float" CSS property allows an element to be positioned outside its containing element -F-

D. "float" CSS property can have pixel values such as "10px" or string values such as "left", "right" -F-

E. "clear" CSS property can prevent content from trying to flow around or alongside a floated element -T-

- **A, B, C, D, E**
- A, B, And E

5. Which of the following best describes fixed positioning?

- The box is held in the same location even if the page is scrolled

6. 
Which of following statements are true about absolute positioning?

A. Absolute positioning lets you determine an element’s location by specifying a left, right, top, or bottom position in pixels, ems, or percentages -T-

B. Adding the following CSS properties to an element will always make it show up on top left corner of an HTML page

     {
        position: absolute; 
        top: 0px;
        left: 0px;
     } -T_
C. When using absolute positioning, an element is taken out of normal flow and is positioned in relation to the closest parent that is relatively positioned

D. There is no difference between "position:absolute" and "position:fixed" CSS properties -F-

- **A, B, C, D**
- A & C

7. 
Which of the following statements would evaluate as truthy, given the below variable definitions?

var dog = {
 breed: "Beagle",
 weight: 30,
 group: "Hound"
}
var key = "weight";
A. dog[key] === 30

B. dog["weight"] == "30";

C. "weight" in dog

D. dog.weight

E. dog.key === 30; -F-

F. dog.hasOwnProperty('weight');

- A, B, C, D & F

8. 
var john = new Object();
john.name = "John Doe";
john.age = 30;

var henry = {
  name: "Henry",
  age: 24
};

Which of the following statements best describes the two objects above?

- Both john and henry are valid objects and can have additional properties added to them

9. 
function Dog (name, age) {
  this.name = name;
  this.age = age;
}
var ageDiff = function(dog1, dog2) {
  return Math.abs(dog1.age - dog2.age);
}
ageDiff(new Dog("Sparky", 12), new Dog("Molly", 8));

- 
The JavaScript engine will create two Dog objects, then pass them as arguments to function ageDiff

10. In modern browsers, localStorage data is stored in:

- The file system

11. function Graph() {
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

- The variable graphObj has no methods, and only has access to the nodes and edges arrays.
